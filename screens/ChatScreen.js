import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ListItem, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux'
import { EvilIcons } from '@expo/vector-icons';


import socketIOClient from "socket.io-client";
var socket = socketIOClient("http://172.17.1.161:3000");



const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman'
  },
]


const ChatScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#f2f2f2' }}>
      <View style={{ width: '100%', marginTop: 55 }}>
      <Text style={{padding:15}}>Hello {props.pseudo}</Text>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider style={{ width: '100%' }}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <Input
          placeholder='Your message'
          containerStyle={styles.name}
        />

        <Button
          title="Send"
          icon={
            <EvilIcons name="envelope" size={24} color="#fff" />
          }
          iconLeft
          type="solid"
          buttonStyle={{
            backgroundColor: '#da5951'
          }}
          onPress={() => props.navigation.navigate('Main', { screen: 'Map' })}
        />

      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginBottom: 25,
  }
});

function mapStateToProps(state) {
  return {
    pseudo: state.pseudo,
  }
}

export default connect(
  mapStateToProps,
  null,
)(ChatScreen)