import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = (props) => {
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' }}>
      <MapView style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: currentLatitude, longitude: currentLongitude }} title="Hello"
          description="I am here !" />
      </MapView>
    </View>
  )
}
export default MapScreen;
