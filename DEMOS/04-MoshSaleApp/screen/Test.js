/*
  I will manage the whole image state here, but not in a single imageInput component

  todo:  去重 在用户最终点击了done 之后。



*/

import React, {useState} from 'react';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import ImageInputList from '../component/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  // the new [] have to be mmerged in old arr
  const handleAdd = resultArr => {
    for (const item of resultArr) {
      setImageUris(preObj => [...preObj, item]);
    }
  };

  const handleRemove = uri => {
    console.log(uri);
    const filteredImageUris = imageUris.filter(item => uri !== item);
    setImageUris(filteredImageUris);
  };

  return (
    <ImageInputList
      imageUris={imageUris}
      // onAddImage={uri => handleAdd(uri)}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
  );
}
