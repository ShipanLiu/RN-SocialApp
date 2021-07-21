import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './screen/LoginScreen';
import {UserProvider} from './store/UserContext';
import {ProductsProvider} from './store/ProductContext';

export default function App(props) {
  return (
    <ProductsProvider>
      <UserProvider>
        <LoginScreen />
      </UserProvider>
    </ProductsProvider>
  );
}
