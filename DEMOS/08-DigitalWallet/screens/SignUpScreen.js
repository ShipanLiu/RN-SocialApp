import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

import LinearGradient from 'react-native-linear-gradient';

export default function SignUpScreen(props) {
  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => console.log('jiba')}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>Sign Up</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>{renderHeader()}</ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  headerText: {
    marginLeft: SIZES.padding * 1.5,
    color: COLORS.white,
    ...FONTS.h4,
  },
});
