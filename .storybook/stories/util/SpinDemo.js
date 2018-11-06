import React from "react";
import { Spring, config } from "react-spring";
import { Button, Checkbox } from "antd";
import { Spin, Flex, Item, Card, onlyOneReq } from "../../../src";

export default class extends React.Component {
  state = {
    value: 0,
    full: false
  };

  render() {
    const { full, value } = this.state;
    return (
      <div>
        <Checkbox
          checked={this.state.full}
          onChange={() =>
            this.setState({
              full: !full
            })
          }>
          是否充满
        </Checkbox>
        <Spin value={full ? 100 : 0} size={80} />
        <Spin size={80} />

        <br />

        <Button
          onClick={() =>
            this.setState({
              value: value + 10
            })
          }>
          +
        </Button>

        <Button
          onClick={() =>
            this.setState({
              value: Math.max(0, value - 10)
            })
          }>
          -
        </Button>

        <Spin value={value} size={80} />

        <Spin immediate={true} value={value} size={80} />
      </div>
    );
  }
}
