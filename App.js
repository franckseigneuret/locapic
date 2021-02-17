import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import pseudo from './reducers/pseudo'
import poi from './reducers/poi'
const store = createStore(combineReducers({ pseudo, poi }))

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ChatScreen from './screens/ChatScreen'
import ListPOI from './screens/ListPOI'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Map') {
            iconName = 'send';
            return <Feather name={iconName} size={25} color={color} />;
          } else if (route.name == 'Chat') {
            iconName = 'chatbubbles';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name == 'POI') {
            iconName = 'ios-location-sharp';
            return <Ionicons name={iconName} size={25} color={color} />;
          }

        },
      })}
      tabBarOptions={{
        activeTintColor: '#eb4d4b',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#130f40'
        }
      }}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="POI" component={ListPOI} />
    </Tab.Navigator>

  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
