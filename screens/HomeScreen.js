import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e67e22'}}>
     <Text>HomeScreen</Text>
     <Button title="go to Main"
       onPress={() => props.navigation.navigate('Main')}
     />
   </View>
  )
}
export default HomeScreen;
