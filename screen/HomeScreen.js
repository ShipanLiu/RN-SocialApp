import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>jiba</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
