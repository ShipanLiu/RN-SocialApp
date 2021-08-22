/*
  stack ==> tabbar ===> drawer


*/

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  HomeStack,
  MyDocStack,
  MessageStack,
  ProfileStack,
} from './ScreenStacks';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="tab-home"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          tabBarColor: '#009387',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="tab-docs"
        component={MyDocStack}
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#1f65ff',
          },
          tabBarLabel: 'Docs',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ios-document-text-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="tab-message"
        component={MessageStack}
        options={{
          tabBarStyle: {
            backgroundColor: '#694fad',
          },
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="comment-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tab-profile"
        component={ProfileStack}
        options={{
          tabBarStyle: {
            backgroundColor: '#d02860',
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
