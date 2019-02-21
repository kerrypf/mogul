import React from "react";
import { Spring, config } from "react-spring";
import { Button, Checkbox } from "antd";
import { Spin, Flex, Item, Card, onlyOneReq, configuration } from "../../../src";

const CustomSpin = () => {
  return (
    <div>
      <img
        width={100}
        height={100}
        src={"http://ws2.sinaimg.cn/bmiddle/9150e4e5ly1fixjixg94ig206o06oq41.gif"}
      />
    </div>
  );
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCustom: !!configuration.customSpin
    };
  }

  useCustomPictureAsSpin = checked => {
    configuration.config({
      customSpin: checked ? type => <CustomSpin /> : undefined
    });
    this.setState({
      useCustom: checked
    });
  };

  render() {
    const { useCustom } = this.state;
    return (
      <div>
        <div>
          <Checkbox
            checked={useCustom}
            onChange={({ target }) => this.useCustomPictureAsSpin(target.checked)}>
            使用自定义spin
          </Checkbox>
        </div>

        <Card loading={true} style={{ minHeight: 200 }}>
          <div>hhhh</div>
        </Card>
      </div>
    );
  }
}
