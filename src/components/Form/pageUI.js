import styled, { css, keyframes } from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring";
import { Item, Flex } from "../../utils";

const fadeIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const LabelItem = styled(Item)`
  text-align: right;

  ${props =>
    props.required
      ? css`
          &:before {
            display: inline-block;
            margin-right: 1px;
            content: "*";
            line-height: 1;
            font-size: 14px;
            color: #f5222d;
          }
        `
      : ""};
`;

export const FormFieldContainer = styled(Flex).attrs({
  alignItems: props => (props.alignItems ? props.alignItems : "center")
})`
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FormField = styled(Item).attrs({
  flex: props => (props.flex ? props.flex : "1"),
  hasError: props => !!props.hasError
})`
  position: relative;
  outline: none;
  ${props =>
    props.hasError
      ? css`
          .ant-input {
            border-color: red !important;
          }
        `
      : ""};
`;

export const FormMessage = styled.span`
  font-size: 12px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;

  ${props =>
    props.hasError
      ? css`
          color: red;
          animation: ${fadeIn} 0.3s;
        `
      : css`
          color: #cacaca;
        `};
`;

const StyledPath = styled.path`
  fill: #333;
  transition: fill 0.3s;
`;

const Container = styled.svg`
  line-height: 1;
  position: absolute;
  z-index: 2;
  right: 3px;
  cursor: pointer;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.8);

  transform-origin: center;
  &:hover {
    ${StyledPath} {
      transition: fill 0.3s;
      fill: red;
    }
  }
`;

export class FormClear extends Component {
  static propTypes = {
    visible: PropTypes.bool
  };

  static defaultProps = {
    size: 14,
    visible: true,
    title: "清除"
  };

  render() {
    const { size, style, className, visible, ...rest } = this.props;

    return (
      <Spring
        from={{ opacity: 0, scale: 0 }}
        to={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}>
        {({ opacity, scale }) => (
          <Container
            {...rest}
            viewBox={"0 0 44 44"}
            className={className}
            style={{
              ...style,
              opacity,
              width: size,
              height: size,
              transform: `translate(-50%,-50%)scale(${scale})`
            }}>
            <StyledPath d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm3.2,22.4l7.5,7.5c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.5-7.5c-0.2-0.2-0.5-0.2-0.7,0l-7.5,7.5c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l7.5-7.5c0.2-0.2 0.2-0.5 0-0.7l-7.5-7.5c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.2-0.2 0.5-0.3 0.7-0.3s0.5,0.1 0.7,0.3l7.5,7.5c0.2,0.2 0.5,0.2 0.7,0l7.5-7.5c0.2-0.2 0.5-0.3 0.7-0.3 0.3,0 0.5,0.1 0.7,0.3l1.4,1.4c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-7.5,7.5c-0.2,0.1-0.2,0.5 3.55271e-15,0.7z" />
          </Container>
        )}
      </Spring>
    );
  }
}
