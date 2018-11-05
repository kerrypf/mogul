import React, { Component } from "react";
import { configuration, Table, Flex, Item } from "../../../src/index";

export default class extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }
  render() {
    return (
      <div style={{ padding: 10 }}>
        <Table
          data={[]}
          rowKey={"id"}
          fluid={true}
          loading={this.state.loading}
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
