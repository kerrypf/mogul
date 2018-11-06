import React, { Component } from "react";
import { Checkbox } from "antd";
import { App, configuration } from "../../../src/index";
import Logo from "../image/logo.png";
import routes from "./routes";
import AppHeader from "./AppHeader";

configuration.config({
  sider: {
    logo: Logo
  }
  //  fullScreen: true
});

export default class extends Component {
  state = {
    openKeys: [],
    singleMenu: false
  };

  componentDidCatch(error, info) {}

  handleonOpenChange = (name, isOpen) => {
    if (this.state.singleMenu) {
      this.setState({
        openKeys: isOpen ? [name] : []
      });
    } else {
      if (this.state.openKeys.includes(name)) {
        this.setState({
          openKeys: this.state.openKeys.filter(key => key !== name)
        });
      } else {
        this.setState({
          openKeys: [...this.state.openKeys, name]
        });
      }
    }
  };

  render() {
    const { openKeys, singleMenu } = this.state;
    return (
      <div>
        <Checkbox
          checked={this.state.singleMenu}
          onChange={() =>
            this.setState({
              singleMenu: !singleMenu,
              openKeys: !singleMenu ? (openKeys[0] ? [openKeys[0]] : []) : openKeys
            })
          }>
          只允许一个展开菜单
        </Checkbox>
        <App
          openKeys={this.state.openKeys}
          onOpenChange={this.handleonOpenChange}
          fixHeader={true}
          header={
            <AppHeader
              routes={{
                pages: routes.filter(route => route.type !== "redirect")
              }}>
              hhh
            </AppHeader>
          }
          footer={
            <div>
              <a>@Mogul/components</a>
            </div>
          }
          routes={routes}
        />
      </div>
    );
  }
}
