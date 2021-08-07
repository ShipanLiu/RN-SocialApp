import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import WelcomPage from './screen/WelcomeScreen';
import CardScreen from './screen/CardScreen';
import ListingDetailsScreen from './screen/ListingDetailsScreen';
import ViewImageScreen from './screen/ViewImageScreen';
import MessagesScreen from './screen/MessagesScreen';
import AccountScreen from './screen/AccountScreen';
import ListingScreen from './screen/ListingScreen';
import AppTextInput from './component/AppTextInput';
import AppPicker from './component/AppPicker';
import LoginScreen from './screen/LoginScreen';
import ListingEditScreen from './screen/ListingEditScreen';
import Test from './screen/Test';
import ImgPickerScreen from './screen/ImgPickerScreen';
import ImageInput from './component/ImageInput';
import AppNavigator from './navigator/AppNavigator';
import navigationTheme from './navigator/navigationTheme';

// const listData = [
//   {label: 'Furniture', value: 1},
//   {label: 'Clothing', value: 2},
//   {label: 'Cameras', value: 3},
//   {label: 'jibas', value: 4},
// ];
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" />
      {/* <WelcomPage /> */}
      {/* <CardScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <AppTextInput placeholder="jiba" /> */}
      {/* <AppPicker
        items={listData}
        placeholder="jiba"
        icon="email"
        onSelectItem={selectedItem => console.log(selectedItem)}
        numberOfColumns={3}
      /> */}
      {/* <LoginScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <ImgPickerScreen /> */}
      {/* <Test /> */}
      {/* <ImageInput /> */}
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
