import React, {useContext} from 'react';
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

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default function ListNotesScreen({navigation}) {
  const {state, dispatch} = useContext(NotesContext);
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
        data={state}
        keyExtractor={item => item.title}
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
