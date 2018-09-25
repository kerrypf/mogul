import React, { Component } from "react";
import { lastReq, onlyOneReq } from "../../../src/index";
import { Input, Button } from "antd";
import { observer } from "mobx-react";

const mock = delay => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        data: 222
      });
    }, delay);
  });
};

let count = 1;

@observer
export default class extends Component {
  state = {
    count: 0
  };

//  @observable loading = false;

  query() {
    let invokeTime = new Date().getTime();
    return this.getData().then((data) => {
      console.log(invokeTime,data);
    });
  }

  @lastReq("loading")
  getData(){
    return mock(Math.random() * 1000 + 200)
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.query }>
          测试一下
        </Button>
      </div>
    );
  }
}
