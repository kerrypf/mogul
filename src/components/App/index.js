import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Provider, observer } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import { Transition } from "react-spring";
import { Redirect } from "../Route";
import configuration from "../configuration";
import { Spin } from "../Indicator";
import { Flex, Item, flex, item } from "../../utils/grid";
import Sider from "./Sider";
import MogulHistory from "./MogulHistory";

const FullPageOverlay = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.66);
  top: 0;
  left: 0;
`;

const RootContainer = styled(Flex).attrs({})`
  min-height: 100%;
  min-width: 960px;
`;

const AppContainer = styled(Item).attrs({
  flex: 1,
  shrink: 0
})`
  overflow: auto;
  ${flex({
    direction: "column"
  })};
`;

const Header = styled.div`
  height: 64px;
  padding: 0 30px;
  background-color: #fff;
  position: relative;
  width: 100%;

  ${ifProp(
    "fixingPos",
    css`
      z-index: 999;
      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    `,
    css``
  )};
`;

const Content = styled(Flex).attrs({ direction: "column" })`
  ${item({ flex: 1, shrink: 0 })};
  padding: 20px 30px;
  background-color: #f0f2f5;

  & > .__mogul__card {
    ${item({ flex: 1 })};
  }
`;

const Footer = styled.div`
  background: #f0f2f5;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

class HeaderComp extends React.Component {
  last_known_scroll_position = 0;
  ticking = false;

  state = {
    scrollY: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenWindowScroll);
    if (this.props.fixHeader) {
      this.listenWindowScroll();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenWindowScroll);
  }

  listenWindowScroll = () => {
    this.last_known_scroll_position = window.scrollY;
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.fixHeader(this.last_known_scroll_position);
        this.ticking = false;
      });

      this.ticking = true;
    }
  };

  fixHeader = scrollY => {
    if (scrollY === this.state.scrollY) return;
    // macos 浏览器允许向负方向滚动, 故设置最小Y滚动为 0
    this.setState({ scrollY: Math.max(0, scrollY) });
  };

  render() {
    const { fixHeader } = this.props;
    const { scrollY } = this.state;
    return (
      <Header fixingPos={fixHeader ? scrollY : null} style={{ top: fixHeader ? scrollY : 0 }}>
        {this.props.children}
      </Header>
    );
  }
}

@observer
export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func]),
    footer: PropTypes.any,
    header: PropTypes.any,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.array,
        path: PropTypes.string,
        render: PropTypes.func,
        icon: PropTypes.any,
        defaultExpand: PropTypes.bool
      })
    ),
    fixHeader: PropTypes.bool,
    defaultExpandAllMenu: PropTypes.bool,
    openKeys: PropTypes.array,
    style: PropTypes.object,
    onOpenChange: PropTypes.func
  };

  static defaultProps = {
    fixHeader: false,
    defaultExpandAllMenu: true
  };

  renderRoutes(routes) {
    let routeComponents = [];

    routes.forEach(
      ({ type, name = "", children = [], visible = true, disabled = false, ...route }) => {
        if (children.length > 0) {
          routeComponents = [...routeComponents, ...this.renderRoutes(children)];
        } else {
          switch (type) {
            case "redirect":
              routeComponents.push(<Redirect key={"redirect"} {...route} />);
              break;
            case "route":
            default:
              routeComponents.push(<Route key={name ? name : route.path} {...route} />);
              break;
          }
        }
      }
    );

    return routeComponents;
  }

  render() {
    const {
      routes,
      children,
      footer,
      header,
      fixHeader,
      style,
      defaultExpandAllMenu,
      openKeys,
      onOpenChange
    } = this.props;
    const renderRoutes = routes ? routes : children();

    return (
      <Fragment>
        <BrowserRouter>
          <Provider mogul={configuration}>
            <RootContainer style={style}>
              <MogulHistory />
              <Sider
                onOpenChange={onOpenChange}
                openKeys={openKeys}
                defaultExpandAllMenu={defaultExpandAllMenu}
                routes={renderRoutes.filter(route => route.type !== "redirect")}
              />

              <AppContainer direction={"column"} flex={1}>
                {header && !configuration.fullScreen ? (
                  <HeaderComp fixHeader={fixHeader}>{header}</HeaderComp>
                ) : null}
                <Content>
                  <Switch>{this.renderRoutes(renderRoutes)}</Switch>
                </Content>
                {footer && !configuration.fullScreen ? (
                  <Footer style={{ textAlign: "center" }}>{footer}</Footer>
                ) : null}
              </AppContainer>
            </RootContainer>
          </Provider>
        </BrowserRouter>

        <Transition
          items={configuration.fullPageLoading}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show =>
            show &&
            (({ opacity }) => (
              <FullPageOverlay style={{ opacity }}>
                <Spin size={100} />
              </FullPageOverlay>
            ))
          }
        </Transition>
      </Fragment>
    );
  }
}
