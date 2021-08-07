/*
  reducer 里面的state 存储问题：

  1.用 useState在 Component里面创建 State 的镜像 showState
  2. asyncStorage 存储。
  3. 反向刷新 state。 在 getNotesFromLocal 函数里里面。



*/

import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  ActionSheetIOS,
} from 'react-native';

import {NotesContext} from '../context/NotesContexts';
import * as actions from '../actions/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default function ListNotesScreen({navigation}) {
  const {state, dispatch} = useContext(NotesContext);
  const [showState, setShowState] = useState(state);

  useEffect(() => {
    getNotesFromLocal();
  }, []);

  useEffect(() => {
    setShowState(state);
  }, [state]);

  useEffect(() => {
    saveNotesToLocal();
  }, [showState]);

  const saveNotesToLocal = async () => {
    try {
      const stringifyTodos = JSON.stringify(showState);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getNotesFromLocal = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      setShowState(JSON.parse(todos));
      // 上来就刷新， state 肯定是空的。 只有showState不是空的。
      // 所以要反向同步一下。
      refreshState(JSON.parse(todos));
    } catch (error) {
      console.log(error);
    }
  };

  const refreshState = data => {
    dispatch({type: actions.REFRESH, payload: data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Add"
          style={styles.addButton}
          onPress={() => navigation.navigate('create')}
        />
      </View>
      <FlatList
        data={showState}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.singleItem}>
            <TouchableOpacity
              style={styles.contentArea}
              onPress={() => navigation.navigate('content', {id: item.id})}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemIcon}
              onPress={() =>
                dispatch({type: actions.DELETE, payload: item.id})
              }>
              <Icon name="delete" size={30} color="tomato" />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="test" onPress={() => alert('test')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    paddingVertical: 30,
  },
  buttonContainer: {
    width: windowWidth / 2,
  },
  singleItem: {
    flexDirection: 'row',
    width: windowWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'orange',
    elevation: 5,
  },
  itemText: {
    fontSize: 30,
    textAlign: 'center',
  },
  itemIcon: {
    borderWidth: 1,
    borderRadius: 15,
  },
  contentArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
