import React, { Component } from "react";
import { Memorize, createModal, confirmCompose } from "../../../src/index";
import { Input, Button } from "antd";

class Test extends Component {
  render() {
    return <div>111</div>;
  }
}

export default class extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            createModal({
              id: "demo-test",
              title: "创建弹窗",
              children: <Test />,
              onOk: () => {}
            });
          }}>
          createModal
        </Button>

        <Button
          onClick={confirmCompose({
            title: "确认删除吗？"
          })(args => {
            console.log(11, args);
          })}>
          confirmCompose
        </Button>
      </div>
    );
  }
}
