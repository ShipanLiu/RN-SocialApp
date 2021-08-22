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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen.js';
import ProfileScreen from '../screen/ProfileScreen.js';
import AddPostScreen from '../screen/AddPostScreen.js';
import MessagesScreen from '../screen/MessagesScreen.js';
import EditProfileScreen from '../screen/EditProfileScreen.js';

const Stack = createStackNavigator();

export const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: '#009387',
        },
        headerLeft: ({color, size}) => (
          <Ionicons.Button
            name="ios-menu"
            color={color}
            backgroundColor="#009387"
            iconStyle={{
              color: 'pink',
            }}
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'HOME',
        }}
      />
    </Stack.Navigator>
  );
};

export const MyDocStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="addpost"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerLeft: ({color, size}) => (
        <Ionicons.Button
          name="ios-menu"
          color={color}
          backgroundColor="#1f65ff"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}>
    <Stack.Screen
      name="addpost"
      component={AddPostScreen}
      options={{
        title: 'DOCS',
      }}
    />
  </Stack.Navigator>
);

export const MessageStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="messages"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#694fad',
      },
      headerLeft: ({color, size}) => (
        <Ionicons.Button
          name="ios-menu"
          color={color}
          backgroundColor="#694fad"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}>
    <Stack.Screen
      name="messages"
      component={MessagesScreen}
      options={{
        title: 'MESSAGES',
      }}
    />
    <Stack.Screen
      name="chat"
      component={ChatScreen}
      options={({route}) => ({
        // title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

export const ProfileStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="profile"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#d02860',
      },
      headerLeft: ({color, size}) => (
        <Ionicons.Button
          name="ios-menu"
          color={color}
          backgroundColor="#d02860"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}>
    <Stack.Screen
      name="profile"
      component={ProfileScreen}
      options={{
        title: 'PROFILE',
      }}
    />
    <Stack.Screen
      name="editProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);
