// In App.js in a new project

import * as React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ShowGallery from './screen/ShowGallery';
import ShowImage from './screen/ShowImage';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* hide the status bar */}
      <StatusBar translucent={true} hidden={true} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              flex: 1,
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}>
          <Stack.Screen
            name="ShowGallery"
            component={ShowGallery}
            options={{title: 'Gallery'}}
          />
          <Stack.Screen
            name="showImage"
            component={ShowImage}
            options={{
              headerShown: true,
              title: 'Detail',
              headerTitleStyle: {alignSelf: 'flex-end'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
