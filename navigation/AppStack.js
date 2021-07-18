import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator();

export default function AppStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
