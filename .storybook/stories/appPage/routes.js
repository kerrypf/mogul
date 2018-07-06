import React, { Component } from "react";
import { Dropdown, Icon, Menu } from "antd";

const menu = (
  <Menu theme={ "dark" }>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const page = ({ name }) => {
  return <div style={ { minHeight: 300, backgroundColor: "#fff" } }>
    { name }
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
    </div>
};

export default [
  {
    path: "/page1",
    render: () => page({
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
        render: () => page({
          name: "页面2"
        }),
      },
      {
        path: "/page3",
        name: "页面3",
        icon: "gift",
        render: () => page({
          name: "页面3"
        }),
      }
    ]
  },
  {
    path: "/page4",
    render: () => page({
      name: "页面4"
    }),
    name: "页面4",
    icon: "gift"
  },
  {
    type: "redirect",
    from: "/",
    to: "/page1"
  }
]
