import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';

const DimensionsWidth = Dimensions.get('window').width;
const DimensionsHeight = Dimensions.get('window').height;

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close-circle" color={colors.primary} size={70} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash" color={colors.primary} size={70} />
      </View>
      <Image
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
        style={styles.chairImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  chairImg: {
    width: DimensionsWidth,
    height: DimensionsHeight,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
