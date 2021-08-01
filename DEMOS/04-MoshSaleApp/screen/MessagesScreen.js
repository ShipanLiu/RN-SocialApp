import React, {useState} from 'react';
import {FlatList, StyleSheet, View, SafeAreaView} from 'react-native';

import ListItem from '../component/lists/ListItem';
import ListItemSeparator from '../component/lists/ListItemSeparator';
import ListItemDeleteAction from '../component/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'jibarrrrrr',
    description: 'jiba2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2jibabbba',
    description: 'D#',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <SafeAreaView style={{}}>
      <View style={{}}>
        <FlatList
          data={messages}
          keyExtractor={message => message.id.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: 'T2',
                description: 'D2',
                image: require('../assets/mosh.jpg'),
              },
            ]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // flatlistContainer: {backgroundColor: 'green'},
});

export default MessagesScreen;
