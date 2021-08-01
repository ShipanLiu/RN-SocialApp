import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Images from '../components/ImageGallery/Images';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function ShowGallery(props) {
  return (
    <ScrollView>
      <View style={styles.imgWrapper}>
        {Images.map(imgObj => (
          <TouchableOpacity
            key={imgObj.id}
            onPress={() => {
              props.navigation.navigate('showImage', {url: imgObj.url});
              // console.log(props);
            }}>
            <Image source={imgObj.url} style={styles.singleImg} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  singleImg: {
    width: deviceWidth / 3 - 6,
    height: deviceHeight / 3,
    borderRadius: 10,
  },
});
