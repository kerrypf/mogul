import React, { Component, Fragment, cloneElement } from "react";
import PropTypes from "prop-types";
import styled, { css, injectGlobal } from "styled-components";
import { observer } from "mobx-react";
import { Icon, Tooltip, Popover } from "antd";
import { Spring, animated } from "react-spring";
import { withRouter } from "react-router-dom";
import { ifProp } from "styled-tools";
import { NavLink } from "../Route";
import configuration from "../configuration";
import { Flex, Item, flex, item } from "../../utils/grid";
import { getScrollbarWidth } from "../../utils/getScrollbarWidth";
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

const SiderContainer = styled(Flex).attrs({
  flex: "inline-flex"
})`
  ${item({
    shrink: 0
  })};
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
  will-change: opacity, paddingLeft;
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const RoutesContainer = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: calc(100% + ${getScrollbarWidth()}px);
  height: calc(100% - 108px);
`;

const RouteContainer = styled(Flex).attrs({
  direction: "column"
})`
  width: 100%;
  margin: 4px 0;
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

const RouteItem = styled(Flex)`
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: ${variable.text.third};
  padding: 0 30px;
  position: relative;
  cursor: pointer;
  width: 100%;

  &:hover {
    ${ArrowIcon} {
      color: #fff !important;
    }
  }
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
})`
  will-change: opacity, paddingLeft;
`;

const IconContainer = styled.div`
  width: 20px;
  text-align: center;
  display: inline-block;
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

const MenuContainer = styled(Flex).attrs({
  direction: "column"
})`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-color: #001529;
  margin-bottom: -1px;
`;

const SubRouteChild = styled(NavLink)`
  margin-bottom: 1px;
  background-color: #001529;
  padding: 0 8px;
  height: 38px;
  line-height: 38px;
  min-width: 160px;
  ${item({})};
  text-decoration: none;
  transition: all 0.3s;
  color: #fff;

  &:hover,
  &.active {
    color: #fff;
    background-color: ${variable.primary};
    text-decoration: none;
  }
`;

class SiderMenuIcon extends Component {
  render() {
    const { iconSize, icon } = this.props;

    return (
      <IconContainer>
        {icon ? (
          typeof icon === "string" ? (
            <Icon type={icon} style={{ fontSize: iconSize }} />
          ) : (
            cloneElement(icon, {
              style: {
                fontSize: iconSize
              }
            })
          )
        ) : (
          <Icon type={"antd"} style={{ fontSize: iconSize }} />
        )}
      </IconContainer>
    );
  }
}

@withRouter
class RouteMenuSingle extends Component {
  static propTypes = {
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    visible: PropTypes.bool,
    path: PropTypes.string,
    iconSize: PropTypes.number,
    indent: PropTypes.number
  };

  static defaultProps = {
    indent: 0,
    opacity: 1
  };

  render() {
    const { collapse } = configuration.sider;
    const { icon, name, path, iconSize, opacity, paddingLeft, indent } = this.props;

    return (
      <Tooltip title={collapse ? name : null} placement={"right"}>
        <RouteWithNoChild to={path} style={{ paddingLeft: indent + 30 }}>
          <SiderMenuIcon icon={icon} iconSize={iconSize} />

          <RouteName style={{ opacity, paddingLeft }}>{name}</RouteName>
        </RouteWithNoChild>
      </Tooltip>
    );
  }
}

@withRouter
@observer
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
    ).isRequired,
    iconSize: PropTypes.number,
    indent: PropTypes.number,
    defaultExpand: PropTypes.bool
  };

  static defaultProps = {
    indent: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      showChildren:
        typeof this.props.defaultExpand === "boolean"
          ? this.props.defaultExpand
          : this.props.defaultExpandAllMenu
    };
  }

  toggleShowChildren = () => {
    if (this.props.onOpenChange) {
      this.props.onOpenChange(this.props.name, !this.props.expand);
    } else {
      const { showChildren } = this.state;
      this.setState({
        showChildren: !showChildren
      });
    }
  };

  render() {
    const { collapse } = configuration.sider;
    const { children, icon, name, iconSize, opacity, paddingLeft, indent, expand } = this.props;

    const showChildren = typeof expand === "boolean" ? expand : this.state.showChildren;
    const visibleChildren = children.filter(child => child.visible !== false);

    return (
      <Fragment>
        <Popover
          overlayClassName={"__fixOverlay__"}
          content={
            collapse ? (
              <MenuContainer>
                {visibleChildren.map(route => (
                  <SubRouteChild key={route.name} to={route.path}>
                    {" "}
                    {route.name}{" "}
                  </SubRouteChild>
                ))}
              </MenuContainer>
            ) : null
          }
          placement={"rightTop"}>
          <RouteItem onClick={collapse ? null : this.toggleShowChildren}>
            <SiderMenuIcon icon={icon} iconSize={iconSize} />

            <RouteName style={{ opacity, paddingLeft: paddingLeft }}>{name}</RouteName>
            {collapse ? null : <ArrowIcon selected={showChildren} />}
          </RouteItem>
        </Popover>

        <Spring
          native={true}
          to={{
            height: showChildren && !collapse ? "auto" : 0,
            opacity: showChildren && !collapse ? 1 : 0
          }}
          from={{ height: "auto", opacity: 1 }}>
          {({ height, opacity }) => (
            <animated.div style={{ height: height, opacity, overflow: "hidden" }}>
              {visibleChildren.map(route => (
                <RouteMenuSingle
                  name={route.name}
                  path={route.path}
                  icon={route.icon}
                  key={route.name}
                  iconSize={14}
                  paddingLeft={4}
                  indent={20 + indent}
                />
              ))}
            </animated.div>
          )}
        </Spring>
      </Fragment>
    );
  }
}

@withRouter
@observer
class RouteSwitcher extends Component {
  render() {
    const {
      route,
      paddingLeft,
      opacity,
      iconSize,
      defaultExpandAllMenu,
      openKeys,
      onOpenChange
    } = this.props;
    if (!route.children || route.children.length === 0) {
      return (
        <RouteMenuSingle
          name={route.name}
          path={route.path}
          icon={route.icon}
          iconSize={iconSize}
          paddingLeft={paddingLeft}
          opacity={opacity}
        />
      );
    } else {
      return (
        <RouteMenu
          defaultExpandAllMenu={defaultExpandAllMenu}
          name={route.name}
          icon={route.icon}
          children={route.children}
          iconSize={iconSize}
          paddingLeft={paddingLeft}
          opacity={opacity}
          defaultExpand={route.defaultExpand}
          onOpenChange={onOpenChange}
          expand={openKeys ? openKeys.includes(route.name) : undefined}
        />
      );
    }
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
        defaultExpand: PropTypes.bool,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            visible: PropTypes.bool
          })
        )
      })
    ),
    defaultExpandAllMenu: PropTypes.bool
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

  redirectToRoot = () => {
    const { root } = configuration.sider;
    configuration.push(root);
  };

  render() {
    const { logo, title, collapse, width: _siderWidth } = configuration.sider;

    const { routes, defaultExpandAllMenu, onOpenChange, openKeys } = this.props;

    const { offsetX } = this.state;

    if (configuration.fullScreen) return null;

    const siderWidth = _siderWidth && Number(_siderWidth) ? Math.max(_siderWidth, 200) : 200;

    return (
      <Spring
        from={{ width: siderWidth, opacity: 1, iconSize: 14 }}
        to={{
          width: collapse ? 80 : siderWidth,
          opacity: collapse ? 0 : 1,
          paddingLeft: collapse ? 0 : 4,
          iconSize: collapse ? 16 : 14
        }}>
        {({ width, paddingLeft, opacity, iconSize }) => (
          <SiderContainer style={{ width: width }}>
            <Container style={{ width: width, left: -offsetX }}>
              <Title onClick={this.redirectToRoot}>
                {logo ? (
                  <LogoContainer>
                    <img src={logo} style={{ width: 40, height: 40 }} alt={"logo"} />
                  </LogoContainer>
                ) : null}

                <TitleLabel style={{ paddingLeft: paddingLeft, opacity }}>{title}</TitleLabel>
              </Title>

              <RoutesContainer>
                {routes
                  .filter(route => route.visible !== false)
                  .map(route => (
                    <RouteContainer key={route.name}>
                      <RouteSwitcher
                        defaultExpandAllMenu={defaultExpandAllMenu}
                        route={route}
                        iconSize={iconSize}
                        paddingLeft={paddingLeft}
                        opacity={opacity}
                        onOpenChange={onOpenChange}
                        openKeys={openKeys}
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
          </SiderContainer>
        )}
      </Spring>
    );
  }
}
