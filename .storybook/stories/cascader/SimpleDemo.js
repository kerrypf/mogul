import React, { Component } from "react";
import { Cascader, lastReq } from "../../../src";

const mock = delay => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        data: 222
      });
    }, delay);
  });
};

class Demo extends Component {
  state = {
    val: [10, 12],
    searchOptions: []
  };

  query(name) {
    return this.getData(name).then(data => {
      if (data.outOfDate){
        return Promise.reject(null)
      } else{
        return Promise.resolve([
          {
            label: name,
            value: 100
          },
          {
            label: name + 1,
            value: 101
          },
          {
            label: name + 2,
            value: 102
          }
        ]);
      }

    });
  }

  @lastReq("loading")
  getData() {
    return mock(Math.random() * 1000 + 200);
  }

  render() {
    return (
      <div>
        Cascader
        <Cascader
          loading={true}
          style={{
            width: 400
          }}
          value={this.state.val}
          onChange={val => {
            this.setState({
              val
            });
          }}
          options={[
            {
              value: 1,
              label: "水果",
              children: [
                {
                  value: 2,
                  label: "苹果"
                },
                {
                  value: 3,
                  label: "水蜜桃"
                }
              ]
            },
            {
              value: 10,
              label: "蛋类",
              children: [
                {
                  value: 11,
                  label: "鸡蛋"
                },
                {
                  value: 12,
                  label: "鸭蛋"
                }
              ]
            },
            {
              value: 20,
              label: "酒水"
            },
            {
              value: 22,
              label: "蔬菜"
            },
            {
              value: 24,
              label: "粮食"
            },
            {
              value: 26,
              label: "病案"
            },
            {
              value: 28,
              label: "炳刚"
            }
          ]}
        />
        <Cascader
          showSearch={true}
          loading={true}
          style={{
            width: 400
          }}
          value={this.state.val}
          onChange={val => {
            this.setState({
              val
            });
          }}
          onSearch={val => {
            return this.query(val);
          }}
          onSearchSet={val => {
            console.log(val);
          }}
          options={[
            {
              value: 1,
              label: "水果",
              children: [
                {
                  value: 2,
                  label: "苹果",
                  children: [
                    {
                      value: 100,
                      label: "苹果",
                      children: [
                        {
                          value: 101,
                          label: "苹果2",
                          children: [
                            {
                              value: 102,
                              label: "苹果3"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 3,
                  label: "水蜜桃"
                }
              ]
            },
            {
              value: 10,
              label: "蛋类",
              children: [
                {
                  value: 11,
                  label: "鸡蛋"
                },
                {
                  value: 12,
                  label: "鸭蛋"
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default Demo;
