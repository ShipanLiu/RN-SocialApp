/*
  <Animated.View></Animated.View>
  const fadeAnim = useRef(new Animated.Value(0)).current;
  Animated.timing

  interpolate create a relation between inputRange and outPutRange.
  0 ==> 0    0.5 ==> -150  1 ==> -200    反方向一样。
  translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200],
              }),



*/

import React, {useRef, useState} from 'react';
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

export default function Test1(props) {
  const [appear, setAppear] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setAppear(!appear);
    Animated.timing(fadeAnim, {
      toValue: !appear ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200],
              }),
            },
            {
              rotate: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        }}>
        <View style={styles.anim}>
          <Text>test anim</Text>
        </View>
      </Animated.View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anim: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginBottom: 20,
  },
});
