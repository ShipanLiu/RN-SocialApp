import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

import songs from '../modal/data';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default function MusicPlayer(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* ArtWork */}
        <View style={styles.artworkWrapper}>
          <Image
            style={styles.artworkImg}
            source={require('../assets/1.jpg')}
          />
        </View>
        {/* name of songs */}
        <View>
          <Text style={styles.songTitle}>Song Title</Text>
          <Text style={styles.songArtist}>Song Artist Name</Text>
        </View>
        {/* song time line */}
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.ProressLabelTime}>0:00</Text>
            <Text style={styles.ProressLabelTime}>3:55</Text>
          </View>
        </View>
        {/* music controls */}
        <View style={styles.musicControls}>
          <TouchableOpacity>
            <Icon
              name="play-skip-back-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ios-pause-circle" size={75} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttomControls}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={30} color="#777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="repeat" size={30} color="#777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-outline" size={30} color="#777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-horizontal" size={30} color="#777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  artworkWrapper: {
    width: 300,
    height: 400,
    marginBottom: 25,
    // 来一些shadow ios
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    // android
    elevation: 5,
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  songTitle: {
    fontSize: 18,
    color: '#eee',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  songArtist: {
    color: '#EEE',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 14,
  },
  progressContainer: {
    // backgroundColor: 'pink',
    width: windowWidth * 0.9,
    height: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    // backgroundColor: 'blue',
    width: windowWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProressLabelTime: {
    color: '#fff',
    paddingHorizontal: 13,
  },

  musicControls: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },

  // bottom part
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: windowWidth,
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
