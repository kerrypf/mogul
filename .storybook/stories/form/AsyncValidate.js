import React, { Component, Fragment, createRef } from "react";
import { Button, Input } from "antd";
import { computed } from "mobx";
import { observer } from "mobx-react";
import { Form } from "../../../src";

const delay = () =>
  new Promise(res => {
    setTimeout(() => {
      res("服务器打嗝了。。。");
    }, 1000);
  });

@observer
class Demo extends Component {
  form = createRef();

  validate = () => {
    const form = this.form.current.state.form;
    form.validateAsync().then(result => {
      console.log(result);
    });
  };

  reset = () => {
    const form = this.form.current.state.form;

    form.resetValue(true);
  };

  @computed
  get isloading() {
    return this.form;
  }

  state = {
    val: [10, 12]
  };

  render() {
    return (
      <div>
        <Form ref={this.form} onPressEnter={target => this.validateAsync()}>
          <Form.Box
            fieldName={"form"}
            style={{ width: 800 }}
            labelStyle={{ width: "100px" }}
            //            direction={"column"}
            wrap={"wrap"}
            containerStyle={{
              width: "50%"
            }}>
            <div style={{ width: "100%" }}>validateASync 使用</div>

            <Form.Connect
              initialValue={""}
              rules={[[val => (val.length >= 3 ? true : "长度必须大于3")], [async val => delay()]]}>
              {form => (
                <Fragment>
                  <Input
                    value={form.value}
                    onChange={({ target: { value } }) => form.changeValue(value)}
                  />
                  <Form.Spin visible={form.validating} />
                </Fragment>
              )}
            </Form.Connect>
          </Form.Box>

          <Form.Box>
            {form => (
              <Fragment>
                <Button loading={form.root.validating} onClick={this.validate}>
                  验证
                </Button>

                <Button onClick={this.reset}>重置</Button>
              </Fragment>
            )}
          </Form.Box>
        </Form>
      </div>
    );
  }
}

export default Demo;
