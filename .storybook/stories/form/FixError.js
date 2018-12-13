import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, Item } from "../../../src";

class A extends Component{

  componentDidMount() {
    console.log("mount")
  }

  componentWillUnmount() {
    console.log("unmount")
  }

  render(){
    return null;
  }
}

class Demo extends Component {
  state = {
    count: 1
  };

  validate = () => {
    const form = this.form.state.form;
    console.log(form.$("username"))
  };

  render() {
    const { count } = this.state;

    const Test = () => <Form.Input
      label={"名称"}
      placeholder={"名称字段"}
      fieldName={"username"}
    />
    return (
      <div>
        <Form ref={form => (this.form = form)}>
          <Test/>
        </Form>
        <Button onClick={this.validate}>验证</Button>
        <Button onClick={this.reset}>重置</Button>
        <Button
          onClick={() =>
            this.setState({
              count: count + 1
            })
          }>
          {count}
        </Button>
      </div>
    );
  }
}

export default Demo;
