import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../screens/map-screen';
import Chat from '../screens/chat-screen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="map">
      <Tab.Screen name="map" component={Map} options={{headerShown: false}} />
      <Tab.Screen name="chat" component={Chat} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
