import React from 'react';
import { Form } from 'antd';
const FormItem = Form.Item;

// form: antd.Form
// label: String,
// key: String,
// option?: Object,
// render: Function,
// labelCol?: Number,
// wrapperCol?: Number

const CreateFormItem = (
  form,
  { label, key, option, render, labelCol = 8, wrapperCol = 16 }
) => {
  return props => (
    <FormItem
      labelCol={{ span: labelCol }}
      wrapperCol={{ span: wrapperCol }}
      label={label}
      key={key}
    >
      {form.getFieldDecorator(key, option)(render(props))}
    </FormItem>
  );
};

export default CreateFormItem;
