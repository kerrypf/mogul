import React, { Component } from "react";
import { Icon } from "antd";
import { configuration, Table, Flex, Item } from "../../../src/index";
import faker from "faker";

export default class extends Component {
  constructor(props) {
    super(props);

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
        stargazers_count: faker.random.number(),
        owner: {
          id: faker.random.uuid(),
          username: faker.internet.userName(),
          avatar: faker.internet.avatar(),
          email: faker.internet.email()
        },
        subscribers: [
          {
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            avatar: faker.internet.avatar(),
            email: faker.internet.email()
          },
          {
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            avatar: faker.internet.avatar(),
            email: faker.internet.email()
          },
          {
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            avatar: faker.internet.avatar(),
            email: faker.internet.email()
          }
        ]
      };
    };
    let result = [];

    for (let i = 0; i <= 30; i++) {
      result.push(schema());
    }

    this.state = {
      data: result
    };
  }

  toggleShowInfo = ({ id, _showInfo }) => {
    const { data } = this.state;

    this.setState({
      data: data.map(d => {
        if (d.id === id) {
          return {
            ...d,
            _showInfo: !_showInfo
          };
        } else {
          return d;
        }
      })
    });
  };

  render() {
    const { data } = this.state;

    const toggleShowInfo = this.toggleShowInfo;

    return (
      <div style={{ padding: 10 }}>
        <Table
          data={data}
          bordered={true}
          rowKey={"id"}
          //        rowHeight={ 50 }
          headerHeight={80}
          fixHeader={true}
          //        scrollY={ 500 }
          scrollX={1000}
          subTableKey={"_showInfo"}
          subTableRender={row => <div>
            <Table
              data={ row.subscribers }
              rowKey={ "id" }
              columns={ [{
                title: <div>id</div>,
                key: "id",
                render(row) {
                  return <span>{row.id}</span>;
                },
                width: 350,
                headerContainerProps: {
                  style: {
                    color: "red"
                  }
                }
              },
                {
                  title: "用户名",
                  key: "username",
                  render(row) {
                    return <span>{row.username}</span>;
                  },
                  width: 150
                },
                {
                  title: "头像",
                  key: "avatar",
                  render(row) {
                    return <img src={ row.avatar } width={ 50 } height={ 50 }/>;
                  },
                  width: 100,
                  cellContainerProps: {
                    style: {
                      textAlign: "center"
                    }
                  },
                },
                {
                  title: "邮箱",
                  key: "email",
                  render(row) {
                    return <span>{ row.email }</span>;
                  },
                  width: 250
                }] }
              pagination={ false }
              bordered={ false }
            />

          </div>}
          columns={[
            {
              title: "",
              key: "expand",
              render(row) {
                return (
                  <div style={{ textAlign: "center" }}>
                    <Icon
                      type={`${row._showInfo ? "minus-square-o" : "plus-square-o"} `}
                      onClick={() => {
                        toggleShowInfo(row);
                      }}
                    />
                  </div>
                );
              },
              width: 50
            },
            {
              title: <div>id</div>,
              key: "id",
              render(row) {
                return <span>{row.id}</span>;
              },
              width: 350
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
              render(row) {
                return <span>{row.description}</span>;
              },
              width: 300
            },
            {
              title: "创建于",
              key: "created_at",
              render(row) {
                return <span>{row.created_at.toString()}</span>;
              },
              width: 450
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
                return <a href={row.url}>{row.url}</a>;
              },
              width: 150
            },
            {
              title: "拥有者",
              key: "owner",
              render(row) {
                return <span>{row.owner.username}</span>;
              },
              width: 150
            }
          ]}
          // 当展开子表时,同时高亮该行
          rowSelectKey={ "_showInfo" }
        />
      </div>
    );
  }
}
