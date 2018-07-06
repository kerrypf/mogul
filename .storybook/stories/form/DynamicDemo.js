import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, Item } from "../../../src";
import moment from "moment";

export default class extends Component {
  state = {
    fields: []
  };

  validate = () => {
    const form = this.form.state.form;

    console.log(form.validate(), form.errors, form.getResult());
  };

  add = () => {
    this.setState({
      fields: [...this.state.fields, new Date().getTime()]
    });
  };

  render() {
    return (
      <div>
        动态表单
        <Form ref={form => (this.form = form)}>
          <Flex direction={"column"} style={{ width: 800 }}>
            <Form.Input
              fieldName={"enterpriseName"}
              label={"企业名称"}
              rules={[["required", "名称必填"]]}
            />

            <Item style={{ textAlign: "center" }}>
              <Button onClick={this.add}>添加发票</Button>
            </Item>

            <Form.Box fieldName={"receipt"} style={{ margin: "20px 0" }} wrap={"wrap"}>
              {this.state.fields.map((d, index) => (
                <Form.Box
                  key={d}
                  direction={"column"}
                  labelStyle={{ width: 100 }}
                  style={{
                    padding: 15,
                    border: "1px solid gray",
                    width: "calc(50% - 30px)",
                    margin: "10px 15px"
                  }}>
                  <Form.Input
                    fieldName={"receiptPrice"}
                    label={"发票金额"}
                    rules={[["required", "发票金额必填"]]}
                  />

                  <Form.FormSelect
                    fieldName={"receiptType"}
                    label={"发票类型"}
                    rules={[["required", "发票类型必选"]]}
                    options={[{ label: "个人", value: "1" }, { label: "企业", value: "2" }]}
                  />

                  <Button
                    onClick={() => {
                      this.setState({
                        fields: this.state.fields.filter(field => field !== d)
                      });
                    }}>
                    删除
                  </Button>

                </Form.Box>
              ))}
            </Form.Box>
          </Flex>
        </Form>
        <Button onClick={this.validate}>验证</Button>
      </div>
    );
  }
}
