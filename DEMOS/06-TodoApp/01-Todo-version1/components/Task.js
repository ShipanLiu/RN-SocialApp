import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Task(props) {
  return (
    <View>
      <Text>Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
