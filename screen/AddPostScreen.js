import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Animated,
  TextInput,
  Image,
} from 'react-native';
import ActionButton from 'react-native-simple-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function AddPostScreen(props) {
  const {logout, user} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      multiple: true,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
    });
  };
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      ) : null}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="add something here"
          multiline
          numberOfLines={4}
        />
      </View>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => takePhotoFromCamera()}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={() => choosePhotoFromLibrary()}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

//  special for ActionButtons
// ActionButton.prototype.animateButton = function (animate = true) {
//   if (this.state.active) return this.reset();

//   if (animate) {
//     Animated.spring(this.anim, {toValue: 1, useNativeDriver: false}).start();
//   } else {
//     this.anim.setValue(1);
//   }

//   this.setState({active: true, resetToken: this.state.resetToken});
// };

// ActionButton.prototype.reset = function (animate = true) {
//   if (this.props.onReset) this.props.onReset();

//   if (animate) {
//     Animated.spring(this.anim, {toValue: 0, useNativeDriver: false}).start();
//   } else {
//     this.anim.setValue(0);
//   }

//   setTimeout(() => {
//     if (this.mounted) {
//       this.setState({active: false, resetToken: this.state.resetToken});
//     }
//   }, 250);
// };
