/*
  CategoryPickerItem 是 DIY 种类的 PickerItem + icon
*/

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppIcon from './AppIcon';
import AppText from './AppText';

export default function CategoryPickerItem({item, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
