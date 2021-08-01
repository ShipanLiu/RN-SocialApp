/*
  所有自定义的组件都开头加上 App
*/
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import colors from '../config/colors';

const DimensionsWidth = Dimensions.get('window').width;

export default function AppButton({title, onPress, styleText, styleButton}) {
  return (
    <TouchableOpacity
      style={{...styles.button, ...styleButton}}
      onPress={onPress}>
      <Text style={{...styles.text, ...styleText}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: DimensionsWidth,
    marginVertical: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
