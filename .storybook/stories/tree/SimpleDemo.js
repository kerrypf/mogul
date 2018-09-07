import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Tree } from "../../../src";
import data from "./data";

const flattenNode = node => {
  let nodes = [];

  if (node.children) {
    nodes = [...node.children];

    node.children.forEach(subNode => {
      let subNodes = flattenNode(subNode);
      nodes = [...nodes, ...subNodes];
    });
  }

  return nodes;
};

class Demo extends Component {
  state = {
    checkedKeys: []
  };

  render() {
    const { checkedKeys } = this.state;
    return (
      <div>
        <Tree
          options={data}
          value={[]}
          onSelect={val => console.log(val)}
          height={600}
          width={400}
          formatter={option => ({
            ...option,
            label: option.name,
            value: option.id,
            children: option.leaf ? null : option.children ? option.children : []
          })}
          checkedKeys={checkedKeys}
          checked={true}
          isChecked={(checkedKeys, option) => {
            let flag = false;

            if (checkedKeys.includes(option.value)) {
              return true;
            }

            let nodes = flattenNode(option);

            if (nodes.length > 0) {
              return !nodes.find(node => !checkedKeys.includes(node.id));
            }

            return flag;
          }}
          onChecked={(checked, option) => {
            if (checked) {
              let newAddKeys = [option.value];

              let nodes = flattenNode(option);

              nodes.forEach(node => {
                if (!checkedKeys.includes(node.id)) {
                  newAddKeys.push(node.id);
                }
              });

              this.setState({
                checkedKeys: [...checkedKeys, ...newAddKeys]
              });
            } else {
              let removeKeys = [option.value, ...flattenNode(option).map(node => node.id)];
              this.setState({
                checkedKeys: checkedKeys.filter(key => !removeKeys.includes(key))
              });
            }
          }}
        />
      </div>
    );
  }
}

export default Demo;
