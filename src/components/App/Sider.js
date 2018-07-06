import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, injectGlobal } from "styled-components";
import { observer } from "mobx-react";
import { Icon, Tooltip, Popover, Menu } from "antd";
import { Spring } from "react-spring";
import { withRouter, NavLink } from "react-router-dom";
import { ifProp } from "styled-tools";
import configuration from "../configuration";
import { Flex, Item, flex } from "../../utils/grid";
import variable from "../variable";

injectGlobal`
    .__fixOverlay__{
        & .ant-popover-arrow{
            display: none !important;
        }
        
        & .ant-popover-inner-content{
            padding: 0 ;
        }
    }
`;

const Container = styled(Flex).attrs({
  direction: "column"
})`
  position: fixed;
  z-index: 2;
  background-color: #001529;
  height: 100% !important;
  overflow-x: hidden;
`;

const Title = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  height: 60px;
  padding: 10px 20px;

  cursor: pointer;
`;

const TitleLabel = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  padding-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  word-wrap: normal;
  width: auto;
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const RoutesContainer = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: calc(100% + 17px);
  height: calc(100% - 108px);
`;

const RouteContainer = styled(Flex).attrs({
  direction: "column"
})`
  width: 100%;
  margin: 4px 0;
`;

const RouteItem = styled(Flex)`
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #ffffff;
  padding: 0 30px;
  position: relative;
  cursor: pointer;
  width: 100%;
`;

const RouteWithNoChild = styled(NavLink)`
  ${flex({})};
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  padding: 0 30px 0 30px;
  color: ${variable.text.third};
  background-color: transparent;
  transition: color 0.3s, background-color 0.3s;
  will-change: color, background-color;
  text-decoration: none !important;
  width: 100%;
  &:hover {
    color: #fff;
  }

  &.active {
    color: #ffffff;
    background-color: ${variable.primary};
  }
`;

const RouteName = styled(Item).attrs({
  flex: 1,
  overflow: "auto"
})``;

const IconContainer = styled.div`
  width: 20px;
  text-align: center;
  display: inline-block;
`;

const ArrowIcon = styled(Icon).attrs({
  type: "down"
})`
  position: absolute;
  right: 10px;
  top: 15px;
  font-size: 12px;
  display: inline-block;
  transition: transform ease-in-out 0.3s;
  will-change: transform;

  ${ifProp(
    "selected",
    css`
      transform: rotate(180deg);
    `,
    css`
      transform: rotate(0);
    `
  )};
`;

const CollapseContainer = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  height: 48px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-color: #002140;
`;

const SubRouteChild = styled(NavLink)`
  margin: 0 -16px;
  padding: 0 16px;
`;

class RouteMenu extends Component {
  static propTypes = {
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    visible: PropTypes.bool,
    path: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        visible: PropTypes.bool
      })
    ),
    iconSize: PropTypes.number,
    indent: PropTypes.number
  };

  static defaultProps = {
    children: [],
    indent: 0
  };

  state = {
    showChildren: false
  };

  toggleShowChildren = () => {
    const { showChildren } = this.state;
    this.setState({
      showChildren: !showChildren
    });
  };

  render() {
    const { collapse } = configuration.sider;
    const { children, icon, name, path, iconSize, opacity, paddingLeft, indent } = this.props;
    const { showChildren } = this.state;
    let hasChildren = children.length > 0;

    if (hasChildren) {
      return (
        <Fragment>
          <Popover
            overlayClassName={"__fixOverlay__"}
            content={
              collapse ? (
                <Menu theme={"dark"} style={{ width: 120, borderRadius: 5 }}>
                  {children.map(route => (
                    <Menu.Item key={route.name}>
                      <SubRouteChild to={route.path}> {route.name} </SubRouteChild>
                    </Menu.Item>
                  ))}
                </Menu>
              ) : null
            }
            placement={"rightTop"}>
            <RouteItem onClick={collapse ? null : this.toggleShowChildren}>
              <IconContainer>
                {icon ? (
                  typeof icon === "string" ? (
                    <Icon type={icon} style={{ fontSize: iconSize }} />
                  ) : (
                    icon
                  )
                ) : (
                  <Icon type={"antd"} style={{ fontSize: iconSize }} />
                )}
              </IconContainer>

              <RouteName style={{ opacity, paddingLeft: paddingLeft }}>{name}</RouteName>
              {collapse ? null : <ArrowIcon selected={showChildren} />}
            </RouteItem>
          </Popover>
          {showChildren && !collapse
            ? children.map(route => (
                <RouteMenu
                  key={route.name}
                  name={route.name}
                  path={route.path}
                  icon={route.icon}
                  children={route.children}
                  iconSize={14}
                  paddingLeft={4}
                  opacity={1}
                  indent={20 + indent}
                />
              ))
            : null}
        </Fragment>
      );
    }

    return (
      <Tooltip title={collapse ? name : null} placement={"right"}>
        <RouteWithNoChild to={path} style={{ paddingLeft: indent + 30 }}>
          <IconContainer>
            {icon ? (
              typeof icon === "string" ? (
                <Icon type={icon} style={{ fontSize: iconSize }} />
              ) : (
                icon
              )
            ) : (
              <Icon type={"antd"} style={{ fontSize: iconSize }} />
            )}
          </IconContainer>

          <RouteName style={{ opacity, paddingLeft }}>{name}</RouteName>
        </RouteWithNoChild>
      </Tooltip>
    );
  }
}

@withRouter
@observer
export default class extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        visible: PropTypes.bool,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            visible: PropTypes.bool
          })
        )
      })
    )
  };

  state = {
    offsetX: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenWindowScroll);
  }

  listenWindowScroll = () => {
    let offsetX = window.pageXOffset || document.documentElement.scrollLeft;
    if (offsetX !== this.state.offsetX) {
      this.setState({
        offsetX: Math.min(200, offsetX)
      });
    }
  };

  render() {
    const { logo, title, collapse, root } = configuration.sider;

    const { routes, history } = this.props;

    const { offsetX } = this.state;

    return (
      <Spring
        from={{ width: 200, opacity: 1, iconSize: 14 }}
        to={{
          width: collapse ? 80 : 200,
          opacity: collapse ? 0 : 1,
          paddingLeft: collapse ? 0 : 4,
          iconSize: collapse ? 16 : 14
        }}>
        {({ width, paddingLeft, opacity, iconSize }) => (
          <Flex flex={"inline-flex"} style={{ width: width }}>
            <Container style={{ width: width, left: -offsetX }}>
              <Title onClick={() => history.push(root)}>
                {logo ? (
                  <LogoContainer>
                    <img src={logo} style={{ width: 40, height: 40 }} alt={"logo"} />
                  </LogoContainer>
                ) : null}

                <TitleLabel style={{ paddingLeft: paddingLeft, opacity }}>{title}</TitleLabel>
              </Title>

              <RoutesContainer>
                {routes.filter(route => route.visible !== false).map(route => (
                  <RouteContainer key={route.name}>
                    <RouteMenu
                      name={route.name}
                      path={route.path}
                      icon={route.icon}
                      children={route.children}
                      iconSize={iconSize}
                      paddingLeft={paddingLeft}
                      opacity={opacity}
                    />
                  </RouteContainer>
                ))}
              </RoutesContainer>

              <CollapseContainer
                onClick={() =>
                  collapse ? configuration.expandSider() : configuration.collapseSider()
                }>
                <Icon type={collapse ? "right" : "left"} />
              </CollapseContainer>
            </Container>
          </Flex>
        )}
      </Spring>
    );
  }
}
