import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {/* 这里可以加一个icon， 或者加一个头像 */}
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {/* subtitle 可有可无， 没有subtitle， title 照样在中心显示 */}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default ListItem;

// /*
//     here is for the publisher's info
// */

// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableHighlight,
// } from 'react-native';
// import colors from '../config/colors';
// import AppText from './AppText';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

// export default function ListItem({
//   image,
//   title,
//   subTitle,
//   onPress,
//   renderRightActions,
// }) {
//   return (
//     <Swipeable renderRightActions={renderRightActions}>
//       <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
//         <View style={styles.container}>
//           <Image style={styles.image} source={image} />
//           <View style={styles.titleWrapper}>
//             <AppText style={styles.title}>{title}</AppText>
//             <AppText style={styles.subTitle}>{subTitle}</AppText>
//           </View>
//         </View>
//       </TouchableHighlight>
//     </Swipeable>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     padding: 15,
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginRight: 10,
//   },
//   titleWrapper: {
//     flexDirection: 'column',
//   },
//   title: {
//     fontSize: 28,
//   },
//   subTitle: {
//     color: colors.medium,
//   },
// });
