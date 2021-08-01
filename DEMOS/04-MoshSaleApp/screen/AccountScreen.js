import React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import AppIcon from '../component/AppIcon';
import ListItem from '../component/lists/ListItem';
import AppText from '../component/AppText';
import colors from '../config/colors';
import ListItemSeparator from '../component/lists/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Shipan Liu"
          subTitle="liushipan1998@gmail.com"
          image={require('../assets/shipan.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item, index}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  container: {
    marginBottom: 20,
  },
});
