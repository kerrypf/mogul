import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

import styles from './Sider.module.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class _Sider extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    logo: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKeys: [],
      openKeys: []
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.goHomePage = this.goHomePage.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({
      collapsed,
      openKeys: collapsed ? [] : this.state.openKeys
    });
  }

  handleDefaultSelect() {
    const { pathname, menu } = this.props;
    const { selectedKeys } = this.state;
    const paths = pathname
      .split('/')
      .filter(item => item)
      .map(item => `/${item}`);
    if (paths.length > 1) {
      const path = paths[1];
      let target = menu.find(({ path: menuPath }) => menuPath === path);
      if (target === undefined) {
        target = menu.reduce((result, { children = [] }, index) => {
          if (result !== undefined) {
            return result;
          } else {
            const temp = children.find(
              ({ path: menuPath }) => menuPath === path
            );
            if (temp !== undefined) {
              temp.parentKey = index;
            }
            return temp;
          }
        }, undefined);
      }
      if (target !== undefined) {
        const { path, parentKey } = target;
        if (path !== selectedKeys[0]) {
          this.setState({
            selectedKeys: [path],
            openKeys: parentKey !== undefined ? [parentKey.toString()] : []
          });
        }
      }
    }
  }

  handleExpand(openKeys) {
    this.setState({
      openKeys
    });
  }

  handleSelect = ({
    item: {
      props: { path }
    }
  }) => {
    this.handleRouteChange(path);
  };

  handleRouteChange(path) {
    const { push, url } = this.props;
    push(`${url}${path}`);
  }

  componentDidMount() {
    this.handleDefaultSelect();
  }

  componentDidUpdate() {
    this.handleDefaultSelect();
  }

  renderMenu(menu) {
    return menu.map(({ title, icon, path, children }, index) => {
      if (children === undefined) {
        return (
          <Menu.Item key={path} path={path}>
            {icon !== undefined ? <Icon type={icon} /> : null}
            <span>{title}</span>
          </Menu.Item>
        );
      } else {
        const menuTitle = (
          <Fragment>
            {icon !== undefined ? <Icon type={icon} /> : null}
            <span>{title}</span>
          </Fragment>
        );
        return (
          <SubMenu key={index} title={menuTitle}>
            {this.renderMenu(children)}
          </SubMenu>
        );
      }
    });
  }

  goHomePage() {
    const { push } = this.props;
    push('/dashboard');
  }

  render() {
    const { name, menu, logo } = this.props;
    const { collapsed, selectedKeys, openKeys } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        className={styles.sider}
      >
        <div className={styles.title} onClick={this.goHomePage}>
          {logo}
          {collapsed ? null : <div className={styles.name}>{name}</div>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onSelect={this.handleSelect}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={this.handleExpand}
        >
          {this.renderMenu(menu)}
        </Menu>
      </Sider>
    );
  }
}

export default _Sider;
