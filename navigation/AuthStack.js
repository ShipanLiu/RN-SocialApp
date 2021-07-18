import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardScreen from '../screen/OnboardScreen';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';

const Stack = createStackNavigator();

export default function AuthStack(props) {
  const [isFirstLunch, setIsFirstLunch] = useState(null);
  let routeName;

  // 以后登陆就不显示了。
  useEffect(() => {
    AsyncStorage.getItem('alreadyLunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLunched', 'true');
        setIsFirstLunch(true);
      } else {
        setIsFirstLunch(false);
      }
    });
  }, []);

  if (isFirstLunch === null) {
    return null;
  } else if (isFirstLunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        // 注意 => 后面的（）的使用
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            elevation: 10,
          },
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="pink"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
