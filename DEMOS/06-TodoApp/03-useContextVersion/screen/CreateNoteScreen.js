/*
  点击空白，键盘褪去。

*/

import React, {useState, useRef, useContext} from 'react';
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
  Alert,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {NotesContext} from '../context/NotesContexts';
import * as actions from '../actions/actions';

export default function CreateNoteScreen({navigation}) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const {state, dispatch} = useContext(NotesContext);

  return (
    // 加上ScrollView，在外面点击没有问题。
    <ScrollView
      contentContainerstyle={styles.container}
      keyboardDismissMode="none"
      keyboardShouldPersistTaps="handled">
      <View>
        <Text style={styles.text}>enter title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <TouchableOpacity style={styles.inputIcon} onPress={() => setTitle('')}>
          <Icon name="close-circle" size={30} color="blue" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>enter Content</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={setContent}
        />
        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => setContent('')}>
          <Icon name="close-circle" size={30} color="blue" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
          dispatch({
            type: actions.ADD,
            payload: {title: title, content: content},
          });
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
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
  button: {
    marginVertical: 10,
    alignSelf: 'center',
    borderWidth: 2,
    backgroundColor: 'tomato',
    width: '50%',
  },
  buttonText: {
    textAlign: 'center',
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
    top: 39,
  },
});
