import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import ListItem from '../component/lists/ListItem';
import AppText from '../component/AppText';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subtitle}>$24</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Jiba Dan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 23,
    color: colors.secondary,
  },
  userContainer: {
    marginTop: 20,
  },
});
