/*
  this screen show the listed stuff to be sailed
*/

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import LottieView from 'lottie-react-native';

import Card from '../component/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

export default function ListingScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ActivityIndicator animating={true} size="large" color="#00ff00" />
      <LottieView
        style={{zIndex: 10}}
        autoPlay
        loop
        source={require('../assets/lottieAnimation.json')}
      />
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
    padding: 20,
  },
});
