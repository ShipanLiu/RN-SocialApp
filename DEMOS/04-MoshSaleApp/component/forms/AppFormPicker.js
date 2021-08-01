import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        items={items}
        // 这里的name 是确定区域， item 是最后显示的名称
        // 比如 name="price" 区域。
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
