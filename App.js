import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers />;
};

export default App;

// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';

// import OnboardScreen from './screen/OnboardScreen';
// import LoginScreen from './screen/LoginScreen';

// const AppStack = createStackNavigator();

// export default function App(props) {
//   const [isFirstLunch, setIsFirstLunch] = useState(null);

//   // 以后登陆就不显示了。
//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLunched').then(value => {
//       if (value === null) {
//         AsyncStorage.setItem('alreadyLunched', 'true');
//         setIsFirstLunch(true);
//       } else {
//         setIsFirstLunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLunch === null) {
//     return null;
//   } else if (isFirstLunch === true) {
//     return (
//       <NavigationContainer>
//         <AppStack.Navigator headerMode="none">
//           <AppStack.Screen name="Onboarding" component={OnboardScreen} />
//           <AppStack.Screen name="Login" component={LoginScreen} />
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return <LoginScreen />;
//   }
// }
