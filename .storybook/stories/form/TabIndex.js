import React, { Component, Fragment, createRef } from "react";
import { Button } from "antd";
import { observer } from "mobx-react";
import { Form, Cascader } from "../../../src";

@observer
class Demo extends Component {
  form = createRef();

  validate = () => {
    const form = this.form.current.state.form;

    console.log(form.validate(), form.errors, form.findFormByFieldName("simpleDemo").getResult());
  };

  reset = () => {
    const form = this.form.current.state.form;

    form.resetValue(true);
  };

  state = {
    val: [10, 12]
  };

  render() {
    return (
      <div>
        <Form ref={this.form} onPressEnter={target => this.validate()}>
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
                    <span>123</span>
                  </Fragment>
                );
              }}
            </Form.Connect>

            <Form.Connect initialValue={[]}>
              {form => (
                <Cascader
                  style={{
                    width: 400
                  }}
                  value={form.value}
                  onChange={val => {
                    form.changeValue(val);
                  }}
                  options={[
                    {
                      value: 1,
                      label: "水果",
                      children: [
                        {
                          value: 2,
                          label: "苹果"
                        },
                        {
                          value: 3,
                          label: "水蜜桃"
                        }
                      ]
                    },
                    {
                      value: 10,
                      label: "蛋类",
                      children: [
                        {
                          value: 11,
                          label: "鸡蛋"
                        },
                        {
                          value: 12,
                          label: "鸭蛋"
                        }
                      ]
                    },
                    {
                      value: 20,
                      label: "酒水"
                    },
                    {
                      value: 22,
                      label: "蔬菜"
                    },
                    {
                      value: 24,
                      label: "粮食"
                    },
                    {
                      value: 26,
                      label: "病案"
                    },
                    {
                      value: 28,
                      label: "炳刚"
                    }
                  ]}
                />
              )}
            </Form.Connect>
          </Form.Box>
        </Form>
        <Button
          onClick={this.validate}>
          验证
        </Button>

        <Button onClick={this.reset}>重置</Button>
      </div>
    );
  }
}

export default Demo;
