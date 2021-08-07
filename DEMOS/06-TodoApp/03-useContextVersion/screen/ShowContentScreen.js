import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as actions from '../actions/actions';
import {NotesContext} from '../context/NotesContexts';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default function ShowContentScreen({navigation, route}) {
  const {state, dispatch} = useContext(NotesContext);
  const {id} = route.params;
  const note = state.find(item => item.id === id);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  return (
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
            type: actions.EDIT,
            payload: {id: id, title: title, content: content},
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
