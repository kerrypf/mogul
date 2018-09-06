import styled, { css, keyframes } from "styled-components";
import React, { Component } from "react";
import { switchProp, ifProp } from "styled-tools";
import PropTypes from "prop-types";
import { Icon } from "antd";
import { Item, Flex } from "../../utils/grid";

const FadeIn = keyframes`
    from{
        opacity: .2;
        transform: rotateZ(10deg);
    }
    
    to{
        opacity: 1;
        transform: rotateZ(0deg);
    }
`;

const Container = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  border-radius: 4px;
  position: relative;

  margin-right: 10px;
  transition: opacity 0.3s;
  will-change: opacity, color, height;
  animation: ${FadeIn} 0.3s;

  ${switchProp("size", {
    middle: css`
      height: 26px;
      padding-left: 6px;
      padding-right: ${ifProp("hasCloseIcon", 25, 6)}px;

      font-size: 14px;
    `,
    small: css`
      height: 22px;
      padding-left: 4px;
      padding-right: ${ifProp("hasCloseIcon", 21, 4)}px;
      font-size: 12px;
    `,
    large: css`
      height: 30px;
      padding-left: 8px;
      padding-right: ${ifProp("hasCloseIcon", 29, 8)}px;

      font-size: 16px;
    `
  })};

  ${switchProp("theme", {
    primary: css`
      color: #fff;
      background-color: rgb(33, 150, 243);
      border: 1px solid transparent;
    `,
    default: css`
      background-color: #fafafa;
      border: 1px solid #d9d9d9;
      color: rgba(0, 0, 0, 0.65);
    `
  })};

  ${props =>
    props.hasCursor
      ? css`
          cursor: pointer;
        `
      : ""};
  &:hover {
    opacity: 0.85;
  }
`;

const CloseIcon = styled(Icon).attrs({
  type: "close",
  title: "关闭"
})`
  cursor: pointer;
  position: absolute;
  right: 5px;

  &:hover {
    color: red;
  }
`;

export default class extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(["primary", "default"]),
    size: PropTypes.oneOf(["small", "middle", "large"]),
    closable: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    flex: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    theme: "default",
    size: "middle",
    closable: false,
    overflow: "auto"
  };

  render() {
    const { children, size, className, onClick, closable, onClose, overflow, ...rest } = this.props;
    return (
      <Container
        size={size}
        className={className}
        hasCursor={!!onClick}
        hasCloseIcon={closable}
        {...rest}>
        <Item overflow={overflow} onClick={onClick}>
          {children}
        </Item>
        {closable ? <CloseIcon onClick={onClose} /> : null}
      </Container>
    );
  }
}
