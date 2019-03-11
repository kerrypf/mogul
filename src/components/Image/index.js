import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import lozad, { markAsUnLoaded } from "../../utils/lazyLoad";
import styled from "styled-components";
import PreviewImage from "./PreviewImage";
import { View } from "./Icons";
import { Flex } from "../../utils";
import { isIE } from "../../utils/checkBrowser";
const Wrap = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: transparent;
`;

const Mask = styled(Flex).attrs({ alignItems: "center", justifyContent: "center" })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: transparent;
  transition: background-color 0.3s;
  pointer-events: ${props => (props.disabled ? "none" : "initial")};
  & .view-icon {
    opacity: 0;
  }

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
    & .view-icon {
      opacity: 1;
    }
  }
`;
export default class extends Component {
  img = createRef();

  state = {
    avai: false,
    inPreview: false
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    preview: PropTypes.bool,
    previewSrc: PropTypes.string,
    zIndex: PropTypes.number,
    lazyLoad: PropTypes.bool
  };

  static defaultProps = {
    preview: false,
    zIndex: 1000,
    lazyLoad: false
  };

  componentDidMount() {
    this.lazyLoadImg();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.src !== this.props.src) {
      markAsUnLoaded(this.img.current);
      this.lazyLoadImg();
    }
  }

  lazyLoadImg() {
    if (!isIE) {
      if (this.props.lazyLoad) {
        this.lazyLoadObserver = lozad(this.img.current, {});

        this.lazyLoadObserver.observe();
      }
    }
  }

  handleOnLoad = () => {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    this.setState({
      avai: true
    });
  };

  handleOnError = e => {
    const { onError } = this.props;

    if (onError) {
      onError.apply(this, [e]);
    }

    this.setState({
      avai: false
    });
  };

  handleOnClick = e => {
    const { onClick, preview } = this.props;

    if (onClick) {
      onClick.apply(this, [e]);
    }
    if (preview) {
      this.showPreview();
    }
  };

  hidePreview = () => {
    this.setState({
      inPreview: false
    });
  };

  showPreview = () => {
    this.setState({
      inPreview: true
    });
  };

  getIconSize = () => {
    if (!this.container) return 0;
    const { width, height } = this.container.getBoundingClientRect();
    return Math.max(16, Math.min(30, Math.min(width, height) * 0.2));
  };

  render() {
    const {
      src,
      onClick,
      preview,
      zIndex,
      previewSrc,
      onError,
      onLoad,
      style,
      lazyLoad,
      ...imgProps
    } = this.props;
    const { avai, inPreview } = this.state;
    const hasCursor = preview || !!onClick;
    const showPreview = preview && avai && src && inPreview;
    // 如果启用了lazyLoad, 那么自动将
    let lazyLoadProps = null;

    if (lazyLoad) {
      if (isIE) {
        lazyLoadProps = { src };
      } else {
        lazyLoadProps = { "data-src": src };
      }
    } else {
      lazyLoadProps = { src };
    }

    return (
      <Wrap innerRef={container => (this.container = container)}>
        <img
          ref={this.img}
          alt={"图片"}
          {...imgProps}
          {...lazyLoadProps}
          style={{ cursor: hasCursor ? "pointer" : null, ...style }}
          onClick={this.handleOnClick}
          onLoad={this.handleOnLoad}
          onError={this.handleOnError}
        />
        {preview && avai && src ? (
          <Mask>
            <View size={this.getIconSize()} onClick={this.showPreview} />
          </Mask>
        ) : null}

        {showPreview ? (
          <PreviewImage
            zIndex={zIndex}
            src={previewSrc ? previewSrc : src}
            onClose={this.hidePreview}
          />
        ) : null}
      </Wrap>
    );
  }
}
