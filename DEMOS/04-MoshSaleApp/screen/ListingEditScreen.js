import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../component/forms/index';
import CategoryPickerItem from '../component/CategoryPickerItem';
import FormImagePicker from '../component/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import usePermission from '../hooks/usePermission';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'please select at least one image'),
});

//  下拉菜单之后显示的种类
const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

function ListingEditScreen() {
  const myLocation = useLocation();
  const permissionResult = usePermission();

  return (
    <SafeAreaView style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        {/* name="title" 就会和 validationSchema 连接起来*/}
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={100}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        {/* 按下之后， 把 setFieldValue（）收集到的state 打包发走。*/}
        <SubmitButton title="Post" />
      </Form>
      <Button title="test position" onPress={() => console.log(myLocation)} />
      <Button
        title="test permission"
        onPress={() => console.log(permissionResult)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
