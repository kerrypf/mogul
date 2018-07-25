import React, { Component } from "react";
import { Memorize, createModal } from "../../../src/index";
import { Input, Button } from "antd";

class Test extends Component{
  render(){
    return <div>111</div>
  }
}

export default class  extends Component{

  componentDidMount(){
    createModal( {
      id: "demo-test",
      title: "创建弹窗",
      children: <Test/>,
      onOk: () => {},
    })
  }

  render(){
    return <div>
      11
    </div>
  }
}