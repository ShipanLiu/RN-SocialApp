import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {HomeScreen, ScanScreen, SignupScreen} from './screens';

const theme = {
  ...DefaultTheme,
  border: 'transparent',
};

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="signup"
        screenOptions={() => ({
          headerTitleAlign: 'center',
          headerShown: false,
        })}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
