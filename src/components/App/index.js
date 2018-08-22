import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Provider, Observer } from "mobx-react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import configuration from "../configuration";
import { Spin } from "../Indicator";
import { Flex, Item, flex } from "../../utils/grid";
import Sider from "./Sider";
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
`;

const Content = styled.div`
  padding: 20px 30px;
  background-color: #f0f2f5;
`;

const Footer = styled.div`
  background: #f0f2f5;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func]).isRequired,
    footer: PropTypes.any,
    header: PropTypes.any,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.array,
        path: PropTypes.string,
        render: PropTypes.func,
        icon: PropTypes.any
      })
    )
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
    const { routes, children, footer, header } = this.props;
    const renderRoutes = routes ? routes : children();
    return (
      <Fragment>
        <BrowserRouter>
          <Provider mogul={configuration}>
            <RootContainer>
              <Sider routes={renderRoutes.filter(route => route.type !== "redirect")} />

              <AppContainer direction={"column"} flex={1}>
                <Observer>
                  {() => (header && !configuration.fullScreen ? <Header>{header}</Header> : null)}
                </Observer>
                <Content>
                  <Switch>{this.renderRoutes(renderRoutes)}</Switch>
                </Content>
                <Observer>
                  {() =>
                    footer && !configuration.fullScreen ? (
                      <Footer style={{ textAlign: "center" }}>{footer}</Footer>
                    ) : null
                  }
                </Observer>
              </AppContainer>
            </RootContainer>
          </Provider>
        </BrowserRouter>

        <Observer>
          {() =>
            configuration.fullPageLoading ? (
              <FullPageOverlay style={{ opacity: 1 }}>
                <Spin size={100} />
              </FullPageOverlay>
            ) : null
          }
        </Observer>
      </Fragment>
    );
  }
}
