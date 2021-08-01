import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screen/HomeScreen';
import FindScreen from '../../screen/FindScreen';
import ChatScreen from '../../screen/ChatScreen';
import PostScreen from '../../screen/PostScreen';
import SettingsScreen from '../../screen/SettingsScreen';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Add"
      tabBarOptions={{
        showLabel: false,
        style: styles.navigator,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Icon
                // name="plus-circle-outline"
                name="home-outline"
                // color="gray"
                size={40}
                style={[
                  styles.bottomBarIcon,
                  {color: focused ? '#e32f45' : '#748c94'},
                ]}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Icon
                // name="plus-circle-outline"
                name="search-outline"
                // color="gray"
                size={40}
                style={[
                  styles.bottomBarIcon,
                  {color: focused ? '#e32f45' : '#748c94'},
                ]}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Find</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 46,
                  width: 95,
                }}>
                {/* to fullfill the transparent part of icon */}
                <View
                  style={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    height: 45,
                    width: 45,
                    bottom: 20,
                    left: 20,
                  }}
                />
                <Icon
                  // name="plus-circle-outline"
                  name="md-add-circle-sharp"
                  color="red"
                  size={95}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Icon
                // name="plus-circle-outline"
                name="chatbubble-ellipses-outline"
                // color="gray"
                size={40}
                style={[
                  styles.bottomBarIcon,
                  {color: focused ? '#e32f45' : '#748c94'},
                ]}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>CHAT</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Icon
                // add-circle-outline
                name="settings-outline"
                // color="gray"
                size={40}
                style={[
                  styles.bottomBarIcon,
                  {color: focused ? '#e32f45' : '#748c94'},
                ]}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  navigator: {
    position: 'absolute',
    bottom: 10,
    left: 5,
    right: 5,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    // shadow for ios
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    // shadow for android
    elevation: 5,
  },
  bottomBarIcon: {},
});
