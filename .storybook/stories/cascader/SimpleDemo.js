import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, Item, Cascader } from "../../../src";
import moment from "moment";

class Demo extends Component {

  state = {
    val: [10,12]
  }

  render() {
    return (
      <div>
        Cascader
        <Cascader
          loading={ true }
          style={ {
            width: 400
          } }
          value={ this.state.val }
          onChange={ (val) => {
            this.setState({
              val
            })
          } }
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
            }
            ,
            {
              value: 24,
              label: "粮食"
            },
            {
              value: 26,
              label: "病案"
            }
            ,
            {
              value: 28,
              label: "炳刚"
            }
          ]}
        />
      </div>
    );
  }
}

export default Demo;
