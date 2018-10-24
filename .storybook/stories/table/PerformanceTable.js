import React, { Component } from "react";
import { configuration, Table, Flex, Item, onlyOneReq } from "../../../src/index";
import { observable } from "mobx";
import { Observer, observer } from "mobx-react";
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

const fetchData = ({ page = 1, size = 10 }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = [];
      for (let i = 1; i <= size; i++) {
        result.push(schema());
      }
      res({
        page,
        size,
        total: 850,
        data: result
      });
    }, 1000);
  });
};

let columns = [
  {
    // title为 component时, 使用 fn形式
    title: () => "名称",
    key: "name",
    render(row) {
      return <span>{row.name}</span>;
    },
    width: 200
  }
];


@observer
export default class extends Component {
  @observable loadingData = false;

  state = {
    page: 1,
    size: 10,
    data: [],
    total: 0,
    index: 0
  };

  constructor(props) {
    super(props);
    this.getData({
      page: 1,
      size: 10
    });
  }

  @onlyOneReq("loadingData")
  getData({ page = 1, size = 10 }) {
    return fetchData({
      page,
      size
    }).then(({ page, size, total, data }) => {
      this.setState({
        page,
        size,
        total,
        data
      });
    });
  }

  render() {
    const { data, size, page, total } = this.state;

    return (
      <div style={{ padding: 10 }}>
        <button
          onClick={() =>
            this.setState({
              index: this.state.index + 1
            })
          }>
          增加
        </button>
        <Table
          data={data}
          bordered={true}
          rowKey={"id"}
          loading={this.loadingData}
          pagination={{
            pageSize: size,
            current: page,
            total,
            onChange: (page, pageSize) => {
              this.getData({
                page,
                size: pageSize
              });
            },
            onShowSizeChange: (page, size) => {
              this.getData({
                page,
                size: size
              });
            }
          }}
          fixHeader={true}
          // columns 使用引用的形式
          columns={columns}
        />
      </div>
    );
  }
}
