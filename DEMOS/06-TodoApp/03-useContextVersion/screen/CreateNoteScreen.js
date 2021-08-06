/*
  点击空白，键盘褪去。

*/

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

export default function CreateNoteScreen(props) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  return (
    // 加上ScrollView，在外面点击没有问题。
    <ScrollView contentContainerstyle={styles.container}>
      <Text style={styles.text}>enter title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.text}>enter title</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Pressable onPress={() => console.log('jiba')}>
        <Text>Done</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
  },
});
