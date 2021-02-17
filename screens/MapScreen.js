import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = (props) => {
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
        <Marker coordinate={{ latitude: 48.858370, longitude: 2.294481 }} />
      </MapView>
    </View>
  )
}
export default MapScreen;
