import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tab-stack';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="bottom-tab">
      <Stack.Screen
        name="bottom-tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
