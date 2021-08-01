import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function ShowImage(props) {
  return (
    <View>
      <Image
        source={props.route.params.url}
        style={styles.imgModal}
        fadeDuration={300}
        resizeMode="contain"
      />
      <Text onPress={() => console.log(props.route.params.url)}>
        here is a image
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgModal: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
