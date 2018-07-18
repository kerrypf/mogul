import React, { Component } from "react";
import { configuration, Table, Flex, Item, onlyOneReq } from "../../../src/index";
import axios from "axios";
import { observable }  from "mobx";
import { Observer } from "mobx-react";
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


const fetchData = ({ page = 1, size = 10 })=>{
  return  new Promise((res,rej) => {
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

let columns = [{
  title: "id",
  key: "id",
  width: 200,
  headerMode: {
    type: "sort",
    value: "desc",
    onChange:(type)=>{
      console.log(type)
    }
  }
}
,
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
    width: 250
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
    }
  }
]
export default class extends Component {

  @observable loadingData = false;

  state = {
    page: 1,
    size: 10,
    data: [],
    total: 0
  };

  constructor(props){
    super(props)
    this.getData({
      page: 1,
      size: 10
    })
  }

  @onlyOneReq("loadingData")
  getData({ page = 1, size = 10 }) {
    return fetchData({
      page,
      size
    }).then( ({ page, size, total, data }) => {
      this.setState({
        page,
        size,
        total,
        data
      });
    } )
  }

  render() {
    const { data, size, page, total } = this.state;
    return (
      <div style={{ padding: 10 }}>
        <Observer>
          { () =>  <Table
            data={ data }
            bordered={true}
            rowKey={"id"}
            loading={ this.loadingData }
            pagination={ {
              pageSize: size,
              current: page,
              total,
              onChange: (page, pageSize) =>{
                this.getData({
                  page,
                  size: pageSize
                })
              }
            } }
            fixHeader={true}
            scrollY={400}
//            scrollX={ 2000 }
            columns={ columns}
          />}
        </Observer>

      </div>
    );
  }
}
