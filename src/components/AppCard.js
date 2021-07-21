import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppIcon from './AppIcon';

export default function AppCard({
  userImg = require('../assets/users/user-1.jpg'),
  userName = 'Jiba Dan',
  postTime = '100 years ago',
  postText = 'wanna join?',
  postImg,
  likes = 14,
  comments = 4,
  isLiked = false,
}) {
  const [liked, setLiked] = useState(isLiked);
  const [commented, setCommented] = useState(false);

  return (
    // userInfo
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View>
          <Image style={styles.userImg} source={userImg} />
        </View>
        <View style={styles.userText}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.publishTime}>{postTime}</Text>
        </View>
      </View>
      {/* post = text + image */}
      <View style={styles.postContainer}>
        <Text style={styles.postText}>{postText}</Text>
        {postImg !== 'none' ? (
          <Image style={styles.postImage} source={postImg} />
        ) : (
          <View style={styles.divider}></View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{
            backgroundColor: liked ? '#2e64e515' : 'transparent',
            borderRadius: 15,
          }}>
          <View style={styles.bottomicons}>
            <AppIcon name="heart-outline" color={liked ? 'blue' : '#000'} />
            <Text style={styles.iconText}>{likes} Likes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCommented(!commented)}
          style={{
            backgroundColor: commented ? '#2e64e515' : 'transparent',
            borderRadius: 15,
          }}>
          <View style={styles.bottomicons}>
            <AppIcon
              name="comment-text-outline"
              color={commented ? 'blue' : '#000'}
            />
            <Text style={styles.iconText}>{comments} Commnets</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 这里注意！！！ 不要设置  alignItems: 'center',
  container: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    marginBottom: 40,
  },
  userContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userText: {
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  publishTime: {
    color: 'gray',
  },

  postContainer: {
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 250,
  },
  postText: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomicons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    paddingHorizontal: 5,
  },
  divider: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '92%',
  },
});
