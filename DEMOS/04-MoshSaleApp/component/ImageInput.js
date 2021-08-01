import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from '@baronha/react-native-multiple-image-picker';
import uuid from 'react-native-uuid';
import colors from '../config/colors';

function ImageInput({imageUri, onChangeImage}) {
  const [imgObjArr, setImgObjArr] = useState([]);
  const handlePress = () => {
    // 如果imageUri 不存在的话， 直接选照片
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {text: 'Yes', onPress: () => onChangeImage()},
        {text: 'No'},
      ]);
  };

  //  create a new image Object(localIdentifier is for searching duplicate images later)
  const createImgObj = itemObj => {
    const imgObj = {
      localIdentifier: itemObj.localIdentifier,
      id: uuid.v4(),
      path: itemObj.path,
    };
    return imgObj;
  };

  const selectImage = async () => {
    try {
      const resultArr = await ImagePicker.openPicker({
        singleSelectedMode: false,
        usedCameraButton: false,
        selectedColor: '#f9813a',
      });
      const newArr = resultArr.map(itemObj => {
        return createImgObj(itemObj);
      });
      onChangeImage(newArr);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && (
          <Image
            source={{
              uri: imageUri,
            }}
            style={styles.image}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;

/*
 uri: 选择path：
  [{"bucketId": -1739773001, "chooseModel": 0, "duration": 0, "fileName": "IMG_20210719_225014.jpg", "height": 1280, "localIdentifier": 30, "mime": "image/jpeg", "parentFolderName": "Camera", "path": "content://media/external/file/30", "position": 3, "realPath": "/storage/emulated/0/DCIM/Camera/IMG_20210719_225014.jpg", "size": 200625, "type": "image", "width": 960}]
*/
