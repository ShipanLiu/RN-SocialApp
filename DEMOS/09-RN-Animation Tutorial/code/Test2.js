/*
 here is for bounce a ball

*/

import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default function Test2(props) {
  const bounce = useRef(new Animated.Value(0)).current;
  const borderRadiusAni = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // the bounce value is changed during the time , and we have to apply it
    Animated.spring(bounce, {
      toValue: 200,
      duration: 2000,
      friction: 2,
      tension: 20,
      useNativeDriver: true,
    }).start();
    Animated.spring(borderRadiusAni, {
      toValue: 50,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  console.log(borderRadiusAni);

  const handlePress = () => {};

  const trans = {
    transform: [
      {
        translateY: bounce,
      },
    ],
  };

  return (
    <>
      <Animated.View style={trans}>
        <View style={[styles.ball, {borderRadius: 50}]}></View>
      </Animated.View>
      <View style={styles.container}>
        <Button
          icon="camera"
          mode="contained"
          color="tomato"
          onPress={handlePress}
          onLongPress={() => alert('jiba')}
          style={{borderRadius: 8, elevation: 10}}
          labelStyle={{color: '#000'}}>
          press me
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom: 200,
    alignSelf: 'center',
  },
});
