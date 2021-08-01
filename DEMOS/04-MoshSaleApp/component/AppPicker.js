/*
  确定不同的picker。
*/

import React, {useState} from 'react';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  // 假如没有传递的话，就默认使用pickerItem（就是下拉的选项是文字）
  PickerItemComponent = PickerItem,
  // 让pick选项horizotal
  numberOfColumns,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width: width}]}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <View
            style={{
              marginBottom: 30,
              width: 200,
              alignSelf: 'center',
              borderRadius: 50,
              overflow: 'hidden',
            }}>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>

          {/* 转为 horizontal 设定的style */}
          {/* <View style={numberOfColumns ? styles.flatlist : null}> */}
          <View style={numberOfColumns && styles.flatlist}>
            <FlatList
              // 横向排放
              numColumns={numberOfColumns}
              data={items}
              keyExtractor={item => item.value.toString()}
              renderItem={({item}) => (
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  flatlist: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppPicker;
