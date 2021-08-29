import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import TabStack from './TabStack';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="feedStack"
      screenOptions={{
        headerShown: false,
        initialRouteName: 'feedStack',
      }}>
      <Drawer.Screen
        name="home-drawer"
        component={TabStack}
        options={{
          title: 'Home',
        }}
      />
      {/* <Drawer.Screen name="profileStack" component={ProfileStack} />
      <Drawer.Screen name="messageStack" component={MessageStack} />
      <Drawer.Screen name="myDocsStack" component={MyDocStack} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerStack;
