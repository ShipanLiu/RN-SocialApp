import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
//  a small try of styledcomponents
import {Container} from '../styles/FeedStyles';
import AppCard from '../components/AppCard';

const posts = [
  {
    id: 1,
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: 2,
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: 3,
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: 4,
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: 5,
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

export default function HomeScreen(props) {
  const {logout, user} = useContext(AuthContext);
  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <AppCard
            userName={item.userName}
            userImg={item.userImg}
            postImg={item.postImg}
            postTime={item.postTime}
            postText={item.post}
            likes={item.likes}
            comments={item.comments}
            isLiked={item.liked}
          />
        )}
      />
      {/* <AppCard
          userName="Da Ma"
          postImg={require('../assets/posts/post-img-3.jpg')}
        />
        <AppCard />
        <AppCard userName="Wassermelone" /> */}
    </Container>
  );
}

const styles = StyleSheet.create({});
