import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Icon name="md-menu" size={30} />
      <Text>Home</Text>
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
