import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
  const [pseudo, setPseudo] = useState('')

  return (
    <ImageBackground source={require('../assets/home.jpg')} style={styles.container}>
      <Input
        placeholder='John'
        containerStyle={styles.name}
        leftIcon={
          <Ionicons
            name='person'
            size={24}
            color='#da5951'
          />
        }
        onChangeText={(e) => setPseudo(e)}
      />

      <Button
        title="Go to Map"
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
        onPress={
          () => {
            props.onSubmitPseudo(pseudo)
            props.navigation.navigate('Main', { screen: 'Map' })
          }
        }
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
  name: {
    width: '70%',
    marginBottom: 25,
  }
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitPseudo: function (pseudo) {
      dispatch({ type: 'savePseudo', pseudo: pseudo })
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen)
