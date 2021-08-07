/*
  I will manage the whole image state here, but not in a single imageInput component

*/

import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

//  name 代表了image pick 区域， 相当于， name='price' 代表了 price 区域一样。
// setFieldValue 是 把这个区域的 值设定一下。
export default function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  //  保留一下这个imageUris 的接口， 以后用。

  const [imageUris, setImageUris] = useState([]);
  // the new [] have to be mmerged in old arr

  const handleAdd = resultArr => {
    for (const item of resultArr) {
      setImageUris(preObj => [...preObj, item]);
    }
    setFieldValue(name, imageUris);
  };

  const handleRemove = uri => {
    console.log(uri);
    const filteredImageUris = imageUris.filter(item => uri !== item);
    setImageUris(filteredImageUris);
    setFieldValue(name, filteredImageUris);
  };

  console.log(imageUris);

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        // onAddImage={uri => handleAdd(uri)}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
