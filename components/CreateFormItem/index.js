import React from 'react';
import { Form } from 'antd';
const FormItem = Form.Item;

// data: [{ label:String, dataIndex?:String, option?:Object, render?:Function }]
// labelCol: Number
// wrapperCol: Number

const CreateFormItem = (form, data, { labelCol = 8, wrapperCol = 16 } = {}) => {
  return props => {
    return data.map(({ label, dataIndex, option, render }) => (
      <FormItem
        labelCol={{ span: labelCol }}
        wrapperCol={{ span: wrapperCol }}
        label={label}
        key={dataIndex}
      >
        {form.getFieldDecorator(dataIndex, option)(render(props))}
      </FormItem>
    ));
  };
};

export default CreateFormItem;
