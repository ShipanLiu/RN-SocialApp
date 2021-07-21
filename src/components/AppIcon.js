import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppIcon({
  name = 'email',
  size = 30,
  color = '#000',
  ...rest
}) {
  return (
    <View style={styles.container}>
      <Icon name={name} size={size} color={color} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
