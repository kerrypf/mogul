import React, { Component } from "react";
import { Input, Select, Form } from "antd";
import { Query } from "../../../src";

@Form.create()
class Demo extends Component {

  render() {
    return (
      <div>
        <Query
          form={ this.props.form }
          handleSearch={ () => {} }
          handleFormReset={ () => {} }
          enableCollapse={ true } // 是否包含展开/收起按钮
          data={ [
            [
              {
                label: "名称",
                dataIndex: "name",
                render: () => (
                  <Input
                    style={{
                      width: "100%"
                    }}
                    placeholder="请输入名称"
                  />
                ),
                simple: true,
                options: {
                  rules: [
                    {
                      required: true,
                      message: "请选择配送日期"
                    }
                  ]
                }
              },
              {
                label: "状态",
                dataIndex: "status",
                render: () => (
                  <Select
                    placeholder="请选择状态"
                    style={{
                      width: "100%"
                    }}
                  >
                    <Select.Option key={1}>111</Select.Option>
                  </Select>
                )
              }
            ]
          ] }/>
      </div>
    );
  }
}

export default Demo;
