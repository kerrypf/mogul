import React, { Component, Fragment } from "react";
import { Dropdown, Menu, Icon } from "antd";
import { observer } from "mobx-react";
import { Flex, configuration } from "../../../src";
import styled from "styled-components";
import { NavLink, withRouter, Switch, Route } from "react-router-dom";

const StyledIcon = styled(Icon)``;

const MenuIcon = styled(Icon)`
  margin-right: 6px;
`;
const UserMenu = styled(Flex).attrs({
  alignItems: "center"
})`
  padding: 0 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  height: 100%;

  &:hover {
    background-color: #e6f7ff;
  }

  & ${StyledIcon} {
    font-size: 32px !important;
  }
`;

const Divider = styled.span`
  margin: 0 9px;
  font-weight: 700;
  color: #c0c4cc;
`;

@withRouter
class HeaderBreadRoutes extends Component {
  renderLink({ icon, name, path }) {
    let iconComp = null;
    if (typeof icon === "string") {
      iconComp = <Icon type={"string"} />;
    } else {
      iconComp = icon;
    }

    return (
      <NavLink to={path}>
        {iconComp}
        <label style={{ marginLeft: 5 }}>{name}</label>
      </NavLink>
    );
  }

  renderTitle({ icon, name }) {
    let iconComp = null;
    if (typeof icon === "string") {
      iconComp = <Icon type={"string"} />;
    } else {
      iconComp = icon;
    }
    return (
      <span>
        {iconComp}
        <label style={{ marginLeft: 5 }}>{name}</label>
      </span>
    );
  }

  render() {
    let renderRoutes = [];
    let allMenus = [];
    if (!this.props.routes || !this.props.routes.pages) return <div />;
    this.props.routes.pages.forEach(page => {
      if (page.children) {
        let subMenu = [];
        page.children.forEach(subPage => {
          renderRoutes.push(
            <Route
              path={subPage.path}
              key={subPage.name + subPage.path}
              render={() => (
                <Fragment>
                  <Dropdown
                    overlay={
                      <Menu>
                        {page.children.map(_subpage => (
                          <Menu.Item key={_subpage.path}>
                            {this.renderLink(_subpage)}
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                  >
                    <a>{page.name}</a>
                  </Dropdown>
                  <Divider>/</Divider>
                  <NavLink to={subPage.path}>{subPage.name} </NavLink>
                </Fragment>
              )}
            />
          );
          subMenu.push(
            <Menu.Item key={subPage.name + subPage.path}>
              {this.renderLink(subPage)}
            </Menu.Item>
          );
        });

        allMenus.push(
          <Menu.SubMenu
            key={page.name + page.path}
            title={this.renderTitle(page)}
          >
            {subMenu}
          </Menu.SubMenu>
        );
      } else {
        renderRoutes.push(
          <Route
            path={page.path}
            key={page.name + page.path}
            render={() => (
              <Fragment>
                <NavLink to={page.path}>{page.name} </NavLink>
              </Fragment>
            )}
          />
        );

        allMenus.push(
          <Menu.Item key={page.name + page.path}>
            {this.renderLink(page)}
          </Menu.Item>
        );
      }
    });

    return (
      <div>
        <Dropdown overlay={<Menu>{allMenus}</Menu>}>
          <NavLink to={"/home"}>{configuration.sider.title}</NavLink>
        </Dropdown>
        <Divider>/</Divider>
        <Switch>{renderRoutes}</Switch>
      </div>
    );
  }
}

@withRouter
@observer
export default class extends Component {
  render() {
    return (
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{ height: "100%" }}
      >
        <HeaderBreadRoutes routes={this.props.routes} />

      </Flex>
    );
  }
}
