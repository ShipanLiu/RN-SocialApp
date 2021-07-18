import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Find</Text>
      <Button title="click here" onPress={() => alert('button clicked')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
