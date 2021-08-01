//  因为style 没有继承性。 如何保证所有的 style都一样
//   所以写一个text 的高阶组件.  use Platform.select 选择组件

import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
