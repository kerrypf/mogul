import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import { ifProp } from "styled-tools";
import { config, Spring } from "react-spring";
import variable from "../variable";

const Rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const Dash = keyframes`
    0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -120px;
  }
`;

const Container = styled.div`
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  ${ifProp(
    "pause",
    css`
      transform: rotate(-90deg);
    `,
    css`
      animation: ${Rotate} 1.4s linear infinite;
    `
  )};
`;

const Spinner = styled.circle`
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0;
  transform-origin: center;
  fill: none;
  stroke-linecap: round;
  ${ifProp(
    "pause",
    css`
      stroke-dasharray: 0, 126px;
      //transition: stroke-dasharray 0.3s ease-in-out;
    `,
    css`
      animation: ${Dash} 1.4s ease-in-out infinite;
    `
  )};
`;
export default class extends Component {
  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.number
  };

  static defaultProps = {
    size: 24,
    color: variable.primary,
    style: {}
  };

  render() {
    const { size, color, style, immediate, value, className } = this.props;
    let children = null;
    let hasValue = typeof value === "number";
    if (hasValue) {
      children = (
        <Spring
          immediate={immediate}
          config={config.wobbly}
          from={{ value: 0 }}
          to={{ value: Math.max(0, Math.min(100, value)) }}>
          {({ value }) => (
            <Spinner
              pause={true}
              cx={44}
              cy={44}
              r={20.2}
              fill={"none"}
              strokeWidth={"3.6"}
              stroke={color}
              style={{
                strokeDasharray: `${1.26 * value}px, ${126 - 1.26 * value}px `
              }}
            />
          )}
        </Spring>
      );
    } else {
      children = (
        <Spinner
          pause={false}
          cx={44}
          cy={44}
          r={20.2}
          fill={"none"}
          strokeWidth={"3.6"}
          stroke={color}
        />
      );
    }
    return (
      <Container
        className={className}
        pause={hasValue}
        style={{ style, width: size, height: size }}>
        <svg viewBox={"22 22 44 44"} style={{ width: size, height: size }}>
          {children}
        </svg>
      </Container>
    );
  }
}
