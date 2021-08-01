import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: colors.danger,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="trash" size={35} color={colors.secondary} />
      </View>
    </TouchableWithoutFeedback>
  );
}
