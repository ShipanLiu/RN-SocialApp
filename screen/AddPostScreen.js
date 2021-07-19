import React, {useContext} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Animated,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

//  special for ActionButtons
ActionButton.prototype.animateButton = function (animate = true) {
  if (this.state.active) return this.reset();

  if (animate) {
    Animated.spring(this.anim, {toValue: 1, useNativeDriver: false}).start();
  } else {
    this.anim.setValue(1);
  }

  this.setState({active: true, resetToken: this.state.resetToken});
};

ActionButton.prototype.reset = function (animate = true) {
  if (this.props.onReset) this.props.onReset();

  if (animate) {
    Animated.spring(this.anim, {toValue: 0, useNativeDriver: false}).start();
  } else {
    this.anim.setValue(0);
  }

  setTimeout(() => {
    if (this.mounted) {
      this.setState({active: false, resetToken: this.state.resetToken});
    }
  }, 250);
};

export default function AddPostScreen(props) {
  const {logout, user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>here shows user's docs</Text>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => {}}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={() => {}}>
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
