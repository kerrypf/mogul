import React, { Component, Fragment } from "react";
import { Button, DatePicker, Input } from "antd";
import { Form, Flex, Item } from "../../../src";
import moment from "moment";

class Demo extends Component {
  validate = () => {
    const form = this.form.state.form;

    console.log(form.validate(), form.errors, form.findFormByFieldName("simpleDemo").getResult());
  };

  reset = () => {
    const form = this.form.state.form;

    form.resetValue(true);
  };

  render() {
    return (
      <div>
        <Form ref={form => (this.form = form)}>
          <Form.Box
            fieldName={"simpleDemo"}
            style={{ width: 800 }}
            labelStyle={{ width: "100px" }}
            //            direction={"column"}
            wrap={"wrap"}
            containerStyle={{
              width: "50%"
            }}>
            <div style={{ width: "100%" }}>Form.Clear使用</div>

            <Form.Connect
              containerStyle={{
                width: "100%"
              }}>
              {({ value, changeValue }) => {
                return (
                  <Fragment>
                    <Input
                      value={value}
                      onChange={({ target: { value: val } }) => {
                        changeValue(val);
                      }}
                    />
                    <Form.Clear onClick={ () => changeValue("") } visible={!!value} />
                  </Fragment>
                );
              }}
            </Form.Connect>
          </Form.Box>
        </Form>
        <Button onClick={this.validate}>验证</Button>

        <Button onClick={this.reset}>重置</Button>
      </div>
    );
  }
}

export default Demo;
