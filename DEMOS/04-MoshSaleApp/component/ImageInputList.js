import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

export default function imageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
      <View style={styles.container}>
        {imageUris.map(uriObj => (
          <View key={uriObj.id} style={styles.singleImage}>
            <ImageInput
              imageUri={uriObj.path}
              onChangeImage={() => onRemoveImage(uriObj)}
            />
          </View>
        ))}
        {/* 一直在右面的相机icon ， 这里面没有传 imageUri 参数*/}
        <ImageInput onChangeImage={resultArr => onAddImage(resultArr)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  singleImage: {
    marginRight: 10,
  },
});
