import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ChatScreen from './screens/ChatScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name == 'Home') {
              iconName = 'ios-home';
            } else if (route.name == 'PagesStack') {
              iconName = 'ios-heart';
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0984e3',
          inactiveTintColor: '#dfe6e9',
        }}>
        <Tab.Screen name="MapScreen" component={MapScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
      </Tab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
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
