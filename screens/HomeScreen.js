import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
  return (
    <ImageBackground source={require('../assets/home.jpg')} style={styles.container}>
      <Input
        placeholder='John'
        leftIcon={
          <Ionicons
            name='person'
            size={24}
            color='#da5951'
          />
        }
      />

      <Button
        title="Go top Map"
        icon={
          <Ionicons
            name='arrow-forward-outline'
            size={25}
            color='#da5951'
          />
        }
        iconLeft
        type="solid"
        buttonStyle={{
          backgroundColor: '#3e88d6'
        }}
        onPress={() => props.navigation.navigate('Main')}
      />
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default HomeScreen;
