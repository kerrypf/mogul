import React, { Component } from "react";
import { configuration, Table, Flex, Item } from "../../../src/index";
import faker from "faker";
import { Radio } from "antd";
import { Observer } from "mobx-react";

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

for (let i = 0; i <= 100; i++) {
  result.push(schema());
}

export default class extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  getData() {}

  //  componentDidMount(){
  //    axios("http://localhost:3004/reps");
  //  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        表格大小:
        <Observer>
          {() => (
            <Radio.Group
              value={configuration.tableProps.size}
              onChange={({ target: { value } }) => {
                configuration.config({
                  tableProps: {
                    size: value
                  }
                });
              }}>
              <Radio value={"small"}>小</Radio>
              <Radio value={"middle"}>中</Radio>
              <Radio value={"large"}>大</Radio>
            </Radio.Group>
          )}
        </Observer>
        <Table
          //          pagination={ false }
          data={result}
          rowKey={"id"}
          //          fixHeader={true}
          //          scrollY={500}
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
              width: 200,
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
