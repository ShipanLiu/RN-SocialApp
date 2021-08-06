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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListNotesScreen from './screen/ListNotesScreen';
import CreateNoteScreen from './screen/CreateNoteScreen';
import ShowContentScreen from './screen/ShowContentScreen';
import {NotesProvider} from './context/NotesContexts';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="notes"
          component={ListNotesScreen}
          options={() => ({title: 'mynotes'})}
        />
        <Stack.Screen
          name="create"
          component={CreateNoteScreen}
          options={() => ({title: 'create ome note'})}
        />
        <Stack.Screen
          name="content"
          component={ShowContentScreen}
          options={() => ({title: 'the exact content'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  );
};
