import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
// save the photos to local
import RNFS from 'react-native-fs';
import FormButton from '../components/FormButton';

export default function Camera(props) {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const handleCapture = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/myTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log(newFilePath);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <FormButton buttonTitle="capture" onPress={handleCapture} />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
