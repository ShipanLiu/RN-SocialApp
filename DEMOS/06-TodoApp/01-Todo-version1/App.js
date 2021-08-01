import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Task from './components/Task';

export default function App(props) {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasksWrapper: {},
  sectionTitle: {},
  items: {},
});
