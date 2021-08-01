import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        // 失去焦点， touched.email （touched[name]）就会变为true
        onBlur={() => setFieldTouched(name)}
        // 发生任何改变， 都会更新 name 的作用域
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
