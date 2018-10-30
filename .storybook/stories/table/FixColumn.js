import React, { Component } from "react";
import {  Table } from "../../../src/index";
import faker from "faker";

const Languages = ["javascript", "java", "c#", "c++", "prolog", "nodejs"];

const schema = function() {
  let name = faker.lorem.words();
  return {
    id: faker.random.uuid(),
    name: name,
    full_name: name,
    private: faker.random.boolean(),
    html_url: faker.internet.url(),
    description: faker.lorem.sentence(),
    fork: faker.random.boolean(),
    url: faker.internet.url(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    homepage: faker.internet.url(),
    size: faker.random.number(),
    language: Languages[faker.random.number() % 6],
    has_issues: faker.random.boolean(),
    forks_count: faker.random.number(),
    watchers: faker.random.number(),
    stargazers_count: faker.random.number()
  };
};
let result = [];

for (let i = 0; i <= 30; i++) {
  result.push(schema());
}

export default class extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <Table
          data={result}
          rowKey={"id"}
          headerHeight={80}
          fixHeader={true}
          scrollY={500}
          fluid={true}
          showHeader={ false }
          columns={[
            {
              title: <div>id</div>,
              key: "id",
              render(row) {
                return <span>{row.id}</span>;
              },
              minWidth: 200,
              fixed: "left"
            },
            {
              title: "名称",
              key: "name",
              render(row) {
                return <span>{row.name}</span>;
              },
              minWidth: 200,
            },
            {
              title: "描述",
              key: "description",
              minWidth: 300,
              render(row) {
                return <span>{row.description}</span>;
              },
//              fixed: "left"
            },
            {
              title: "创建于",
              key: "created_at",
              render(row) {
                return <span>{row.created_at.toString()}</span>;
              },
              width: 200,

            },
            {
              title: "stars",
              key: "stargazers_count",
              render(row) {
                return <span>{row.stargazers_count}</span>;
              },
              width: 100,

            },
            {
              title: "当前是否有issue",
              key: "has_issues",
              render(row) {
                return <span>{row.has_issues ? "是" : "五"}</span>;
              },
              width: 100,

            },
            {
              title: "地址",
              key: "url",
              render(row) {
                return <a href={row.url}>地址</a>;
              },
              width: 100,
              fixed: "right"
            }
          ]}
        />
      </div>
    );
  }
}
