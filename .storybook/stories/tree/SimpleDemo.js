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

const makeNodeData = node => ({
  label: node.name,
  value: node.id,
  children: node.leaf ? null : node.children ? node.children.map(n => makeNodeData(n)) : []
});

const nodeData = data.map(node => makeNodeData(node));

//console.log(nodeData);

class Demo extends Component {
  state = {
    checkedKeys: [],
    selected: [],
    search: "菜"
  };

  render() {
    const { checkedKeys, search } = this.state;
    return (
      <div>
        <input
          value={search}
          onChange={({ target: { value } }) =>
            this.setState({
              search: value
            })
          }
        />
        <Tree
          search={search}
          options={nodeData}
          value={this.state.selected}
          onSelect={(val, selected) => {
            this.setState({
              selected: selected
                ? [...this.state.selected, val.value]
                : this.state.selected.filter(key => key !== val.value)
            });
          }}
          height={600}
          width={400}
          checkedKeys={checkedKeys}
          checked={true}
          isChecked={(checkedKeys, option) => {
            let flag = false;

            if (checkedKeys.includes(option.value)) {
              return true;
            }

            let nodes = flattenNode(option);

            if (nodes.length > 0) {
              return !nodes.find(node => !checkedKeys.includes(node.value));
            }

            return flag;
          }}
          onChecked={(checked, option) => {
            if (checked) {
              let newAddKeys = [option.value];

              let nodes = flattenNode(option);
              nodes.forEach(node => {
                if (!checkedKeys.includes(node.value)) {
                  newAddKeys.push(node.value);
                }
              });

              this.setState({
                checkedKeys: [...checkedKeys, ...newAddKeys]
              });
            } else {
              let removeKeys = [option.value, ...flattenNode(option).map(node => node.value)];
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
