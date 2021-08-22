import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default function DrawerContent(props) {
  return (
    <View>
      <Text>here you are</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
