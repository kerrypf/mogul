import styled from "styled-components";
import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import { lighten } from "polished";
import { Tooltip } from "antd";
import variable from "../variable";
const Link = styled.button`
  background: none;
  border: none;
  padding: 0;

  cursor: pointer;
  outline: none;
  color: ${variable.primary};
  transition: all 0.3s;
  &:hover {
    color: ${lighten(0.1, variable.primary)};
  }
  &[disabled] {
    color: rgba(0, 0, 0, 0.25);
    cursor: ${props => (props.hasTitle ? "help" : "not-allowed")};
  }
`;

export default class ActionButton extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  render() {
    const { onClick, disabled, title, ...rest } = this.props;

    return (
      <Tooltip title={title} mouseEnterDelay={0.5}>
        {createElement(Link, {
          disabled,
          ...rest,
          hasTitle: !!title,
          onClick: disabled ? null : onClick
        })}
      </Tooltip>
    );
  }
}
