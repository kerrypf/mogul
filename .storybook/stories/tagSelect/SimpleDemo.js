import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, TagSelect } from "../../../src";
import moment from "moment";

class Demo extends Component {
  state = {
    val: [{ value: 11, label: "哈哈22" }, { value: 22, label: "嘻嘻33" },
      { value: 12, label: "哈哈22" }, { value: 23, label: "嘻嘻33" },
      { value: 13, label: "哈哈22" }, { value: 24, label: "嘻嘻33" }
      ,
      { value: 14, label: "哈哈22" }, { value: 25, label: "嘻嘻33" }
    ]
  };

  render() {
    return (
      <div>
        Cascader
        <TagSelect
          style={{
            width: 400
          }}
          value={this.state.val}
          onChange={val => {
            this.setState({
              val
            });
          }}>
          {val => <div>{ val }</div>}
        </TagSelect>
      </div>
    );
  }
}

export default Demo;
