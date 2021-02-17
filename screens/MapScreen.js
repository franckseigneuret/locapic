import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay, Input } from 'react-native-elements';
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = (props) => {
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(0)
  const [currentLongitude, setCurrentLongitude] = useState(0)

  // Overlay pour renseigner tilte + description d'un nouveau POI
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [newCoordPOI, setnewCoordPOI] = useState({})

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('L\'autorisation d\'accéder à l\'emplacement a été refusée');
        return;
      }

      Location.watchPositionAsync({ distanceInterval: 2 },
        (location) => {
          // console.log(location);

          setCurrentLatitude(location.coords.latitude)
          setCurrentLongitude(location.coords.longitude)
        }
      );

    })();
  }, []);

  const handleOverlay = () => {
    setVisible(false)   // ferme overlay

    // implémente un objet temporaire qui s'ajoutera ensuite au litsPOI
    let dataMarker = newCoordPOI
    dataMarker.title = title
    dataMarker.description = description

    setListPOI([...listPOI, dataMarker])
    props.onSubmitPOI(dataMarker) // mapDispatchToProps
    setAddPOI(!addPOI) // inverse l'état du bouton POI
    setTitle('')
    setDescription('')
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          if (addPOI) {
            setVisible(true)
            // réinitialiser le title + description mais pb latence

            // console.log('coordinate', e.nativeEvent.coordinate)
            setnewCoordPOI(e.nativeEvent.coordinate)
          }
        }}
      >
        <Marker coordinate={{ latitude: currentLatitude, longitude: currentLongitude }} title="Hello" description="I am here !" />
        {
          listPOI.map((marker, i) => {
            let infosProps = {}
            if (marker.title.length) {
              infosProps.title = marker.title
            }
            if (marker.description.length) {
              infosProps.description = marker.description
            }
            return <Marker key={i} pinColor={'blue'}
              coordinate={marker}
              {...infosProps}
            />
          })
        }
      </MapView>

      <Overlay isVisible={visible}>
        <View style={{ height: 500, width: 300 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Renseignez ce nouveau POI</Text>
          <Input
            placeholder='Titre'
            onChangeText={(titleContent) => setTitle(titleContent)}
          />
          <Input
            placeholder='Description'
            onChangeText={(descContent) => setDescription(descContent)}
          />
          <Button title="Ajouter POI" onPress={() => handleOverlay()} />
        </View>
      </Overlay>

      <Button
        title="add POI"
        icon={
          <Ionicons name="ios-location-sharp" size={24} color="#FFF" />
        }
        iconLeft
        disabled={addPOI}
        type="solid"
        buttonStyle={{
          backgroundColor: '#da5951',
        }}
        onPress={() => { setAddPOI(!addPOI) }}
      />

    </View>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitPOI: function (poi) {
      dispatch({ type: 'savePOI', poi: poi })
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MapScreen)
