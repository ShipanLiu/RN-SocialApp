import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../config/colors';

export default function ListItemSeparator() {
  return (
    <View
      style={{width: '100%', height: 1, backgroundColor: colors.lightGray}}
    />
  );
}
