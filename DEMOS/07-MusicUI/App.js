import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import MusicPlayer from './components/MusicPlayer';

export default function App(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 之所以不写 just 和 align， 是因为默认要从上往下。
  },
});
