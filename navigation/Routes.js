/*
  here we will determine which Stack we will use

*/

import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function Routes() {
  // 把user 和 setUser 拿过来
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const actionOnAuthStateChanged = user => {
    setUser(user);
    if (initializing === true) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(actionOnAuthStateChanged);
    // useEffect里面 return 就是在ummount。
    // unsubscribe on unmount
    return subscriber;
  }, []);

  // if firebase is connecting to firebase, will return null, because during this time, this app is not determining
  // which page it want display, instand of returning a null, we can return a loading icon here
  console.log(initializing);
  console.log(user);
  if (initializing === true) return null;

  // 一旦有了user 之后，就直接跳到 AppStack 里面
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
