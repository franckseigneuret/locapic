import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Button, Input } from 'react-native-elements';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

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
      <View style={{ width: '100%', marginTop: 55}}>
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

      <View style={{ width: '100%'}}>
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
      </View>
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
    // width: '70%',
    marginBottom: 25,
  }
});

export default ChatScreen;
