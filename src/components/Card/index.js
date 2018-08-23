import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { config, Transition } from "react-spring";
import { ifProp } from "styled-tools";
import { Spin, ContentLoader } from "../Indicator";
const Container = styled.div`
  position: relative;
  ${ifProp(
    "noCss",
    css``,
    css`
      background-color: #fff;
      border-radius: 2px;
      transition: all 0.3s;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.12);
      padding: 30px 18px;
      &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }
    `
  )};
`;

const CenterEl = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 666;
  user-select: none;
  pointer-events: none;
`;

export default class extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    loading: PropTypes.bool,
    loadingTemplate: PropTypes.oneOf(["spin", "list"]),
    renderLoading: PropTypes.func,
    keepContent: PropTypes.bool,
    noCss: PropTypes.bool
  };

  static defaultProps = {
    style: {},
    loading: false,
    loadingTemplate: "spin",
    keepContent: false,
    noCss: false
  };

  renderLoadingContent = () => {
    const { loadingTemplate, renderLoading } = this.props;
    if (!this.container) {
      return null;
    }
    const { width, height } = this.container.getBoundingClientRect();
    if (renderLoading) {
      return renderLoading();
    }
    switch (loadingTemplate) {
      case "list":
        return <ContentLoader width={width - 80} height={height - 80} />;
      case "spin":
      default:
        return <Spin size={40} />;
    }
  };

  render() {
    const { className, style, children, loading, keepContent, noCss } = this.props;

    return (
      <Container
        noCss={ noCss }
        innerRef={container => (this.container = container)}
        className={className}
        style={style}>
        {loading && !keepContent ? null : children}
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={config.slow}>
          {loading
            ? ({ opacity }) => (
                <CenterEl style={{ opacity }}>{this.renderLoadingContent()}</CenterEl>
              )
            : () => null}
        </Transition>
      </Container>
    );
  }
}
