import React, { Component } from "react";
import { Dropdown, Icon, Menu, Button } from "antd";
import { Observer } from "mobx-react";
import { configuration, Card } from "../../../src";
const menu = (
  <Menu theme={"dark"}>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const page = ({ name }) => {
  return (
    <Card style={{ backgroundColor: "#fff", minHeight: 3000 }}>
      {name}
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>

      <Button
        onClick={() => {
          configuration.message("hello mogul");
        }}>
        弹出消息
      </Button>

      <Observer>
        {() => (
          <Button
            onClick={() =>
              configuration.fullScreen
                ? configuration.exitFullScreen()
                : configuration.enterFullScreen()
            }>
            {configuration.fullScreen ? "退出全屏" : "进入全屏"}
          </Button>
        )}
      </Observer>

      <Button
        onClick={() => {
          configuration.config({
            customFullScreenSpin: () => <div>自定义组件....</div>
          });
          configuration.showFullPageLoading();

          setTimeout(() => configuration.hideFullPageLoading(), 2000);
        }}>
        自定义overlay组件
      </Button>
    </Card>
  );
};

export default [
  {
    path: "/page1",
    render: () =>
      page({
        name: "页面1"
      }),
    name: "页面1",
    icon: "gift"
  },
  {
    name: "入口页面",
    icon: "gift",
    children: [
      {
        path: "/page2",
        name: "页面2",
        icon: "gift",
        render: () =>
          page({
            name: "页面2"
          })
      },
      {
        path: "/page3",
        name: "页面3",
        icon: "gift",
        render: () =>
          page({
            name: "页面3"
          })
      }
    ]
  },
  {
    path: "/page4",
    render: () =>
      page({
        name: "页面4"
      }),
    name: "页面4",
    icon: "gift"
  },
  {
    name: "入口页面2",
    icon: "gift",
    children: [
      {
        path: "/page7",
        name: "页面7",
        icon: "gift",
        render: () =>
          page({
            name: "页面7"
          })
      },
      {
        path: "/page8",
        name: "页面8",
        icon: "gift",
        render: () =>
          page({
            name: "页面8"
          })
      }
    ]
  },
  {
    type: "redirect",
    from: "/",
    to: "/page1"
  }
];
