import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = (props) => {
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(0)
  const [currentLongitude, setCurrentLongitude] = useState(0)

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
          setListPOI([...listPOI, e.nativeEvent.coordinate])
          console.log(listPOI)
        }
        }
      >
        <Marker coordinate={{ latitude: currentLatitude, longitude: currentLongitude }} title="Hello" description="I am here !" />
        {
          listPOI.map((marker, i) => (
            <Marker key={i} coordinate={marker} title="Hello" />
          ))
        }
      </MapView>
      <Button
        title="add POI"
        icon={
          <Ionicons name="ios-location-sharp" size={24} color="#FFF" />
        }
        iconLeft
        type="solid"
        buttonStyle={{
          backgroundColor: '#da5951',
        }}
        onPress={() => { setAddPOI(!addPOI) }}
      />

    </View>
  )
}
export default MapScreen;
