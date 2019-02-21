import React from "react";
import { Spring, config } from "react-spring";
import { Button, Checkbox } from "antd";
import { Spin, Flex, Item, Card, onlyOneReq, configuration, Table } from "../../../src";

const CustomSpin = ({ type }) => {
  console.log(type);
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
      customSpin: checked ? type => <CustomSpin type={type} /> : undefined
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

        <div style={{ height: 100 }} />
        <Table
          data={[]}
          rowKey={"id"}
          loading={true}
          fluid={true}
          columns={[
            {
              title: <div>id</div>,
              key: "id",
              render(row) {
                return <span>{row.id}</span>;
              },
              width: 400
            },
            {
              title: "名称",
              key: "name",
              render(row) {
                return <span>{row.name}</span>;
              },
              width: 200
            },
            {
              title: "描述",
              key: "description",
              //              minWidth: 300,
              render(row) {
                return <span>{row.description}</span>;
              },
              flex: "2 0 377px"
              //              width: 300
            },
            {
              title: "创建于",
              key: "created_at",
              render(row) {
                return <span>{row.created_at.toString()}</span>;
              },
              minWidth: 500
            },
            {
              title: "stars",
              key: "stargazers_count",
              render(row) {
                return <span>{row.stargazers_count}</span>;
              },
              width: 100
            },
            {
              title: "当前是否有issue",
              key: "has_issues",
              render(row) {
                return <span>{row.has_issues ? "是" : "五"}</span>;
              },
              width: 100
            },
            {
              title: "地址",
              key: "url",
              render(row) {
                return <a href={row.url}>地址</a>;
              },
              width: 50
            }
          ]}
        />
      </div>
    );
  }
}
