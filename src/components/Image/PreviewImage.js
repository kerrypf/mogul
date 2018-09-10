import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { Spring, animated } from "react-spring";
import { fullScreen, portal, Flex } from "../../utils";
import variable from "../variable";
import { Spin } from "../Indicator"
import { Close, Small, Big, RotateIcon, FitScreen, PresentMode } from "./Icons";
const PreviewActionWrap = styled.div`
  position: fixed;
  bottom: 48px;
  transform: translate(-50%, 0);
  left: 50%;
  display: inline-block;
  background-color: #1f2532;
  padding: 0px 10px;
  border-radius: 5px;
`;

const PreviewActionBtn = styled.button`
  color: #576175;
  fill: #576175;
  width: 40px;
  height: 45px;
  outline: none;
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: ${variable.primary};
    fill: ${variable.primary};
    border-top-color: ${variable.primary};
  }
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #6e7079;
  background-color: rgba(110, 112, 121, 0.9);
  height: 100%;
  z-index: 500;
`;
export const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    
    to{
        opacity: 0;
    }
`;
const Wrap = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 500;
  overflow: auto;
`;

const ImgWrap = styled.div`
  transition: transform, height, width 0.3s, 0.3s, 0.3s;
  text-align: center;
  user-select: none;
`;

export const ImgUnavaible = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 200px;
  color: #fff;
  text-align: center;
  z-index: 10;
  font-size: 20px;
  line-height: 200px;

  .download {
    color: #ff2c66;
  }
`;
export const ScaleNumber = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-size: 40px;
  color: #fff;
  background-color: rgba(181, 181, 181, 0.4);
  padding: 15px 30px;
  letter-spacing: 5px;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-name: ${props => (props.fadeOut ? fadeOut : null)};
  animation-duration: 0.5s;
  user-select: none;
  pointer-events: none;
`;

@portal
export default class PreviewImage extends Component {
  static propTypes = {
    src: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    zIndex: PropTypes.number
  };

  state = {
    scale: 1,
    rotate: 0,
    loaded: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleShortcut);
    document.addEventListener("mousewheel", this.handleZoomWheel);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleShortcut);
    document.removeEventListener("mousewheel", this.handleZoomWheel);
  }

  handleShortcut = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    } else if (e.keyCode === 122) {
      fullScreen();
    } else if (e.ctrlKey) {
      switch (e.keyCode) {
        case 187:
          this.zoomOut();
          break;
        case 189:
          this.zoomIn();
          break;
        default:
      }
    }
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  handleZoomWheel = e => {
    const isZoomout = e.wheelDelta ? e.wheelDelta > 0 : e.detail > 0;
    isZoomout ? this.zoomOut() : this.zoomIn();
  };

  checkImgAvaiable() {
    return this.state.loaded && !this.state.error;
  }

  imgLoaded = () => {
    this.setState(
      {
        error: false,
        loaded: true
      },
      () => {
        this.fixImgToScreen({
          maxScale: 1
        });
      }
    );
  };

  fixImgToScreen = ({ rotate = this.state.rotate, maxScale, minScale = 0.1 } = {}) => {
    const width = this.img && this.img.naturalWidth ? this.img.naturalWidth : 1200,
      height = this.img && this.img.naturalHeight ? this.img.naturalHeight : 600;
    const swapWidthHeight = rotate % 2 === 1;

    let ratioH = (window.innerHeight - 250) / (swapWidthHeight ? width : height),
      ratioW = (window.innerWidth - 150) / (swapWidthHeight ? height : width);

    let scale = ratioH > ratioW ? ratioW : ratioH;
    if (maxScale) {
      scale = Math.min(scale, maxScale);
    }
    if (minScale) {
      scale = Math.max(scale, minScale);
    }
    this.setState({
      rotate,
      scale
    });
  };

  zoomIn = () => {
    if (this.checkImgAvaiable()) {
      this.setState({
        scale: Math.max(0.1, this.state.scale / 1.2)
      });
    }
  };

  zoomOut = () => {
    if (this.checkImgAvaiable()) {
      this.setState({
        scale: Math.min(20, this.state.scale * 1.2)
      });
    }
  };

  rotate = () => {
    if (this.checkImgAvaiable()) {
      this.fixImgToScreen({
        rotate: this.state.rotate + 1,
        maxScale: 1
      });
    }
  };

  render() {
    const { scale, loaded, rotate, error } = this.state;
    const imgAvaiable = this.checkImgAvaiable();
    const { zIndex } = this.props;
    const width = imgAvaiable ? this.img.naturalWidth : 600,
      height = imgAvaiable ? this.img.naturalHeight : 300;

    return (
      <div>
        <Mask style={ { zIndex } }/>
        <Wrap style={ { zIndex } }>
          <ImgWrap
            style={{
              width: scale * width,
              height: scale * height,
              transform: `rotate(${(loaded ? rotate : 0) * 90}deg)`
            }}>
            <img
              alt={ "预览图片" }
              draggable={false}
              ref={img => (this.img = img)}
              src={this.props.src}
              style={{
                width: "100%",
                height: "100%",
                display: imgAvaiable ? "inline-block" : "none"
              }}
              onLoad={this.imgLoaded}
              onError={() => {
                this.setState({
                  error: true,
                  loaded: true
                });
              }}
            />
          </ImgWrap>

          {imgAvaiable ? (
            <Spring from={{ scale: 1 }} to={{ scale: scale }}>
              {style => (
                <ScaleNumber fadeOut={scale === style.scale}>
                  {Number(style.scale * 100).toFixed(0)}%
                </ScaleNumber>
              )}
            </Spring>
          ) : (
            <ImgUnavaible>
              {error ? (
                <span>
                  无法预览，请<a href={this.props.src} download className="download">
                    下载
                  </a>查看
                </span>
              ) : loaded ? (
                ""
              ) : (
                <Spin size={ 30 }/>
              )}
            </ImgUnavaible>
          )}

          <Close
            onClick={this.props.onClose}
          />

          <Spring form={{ opacity: 0 }} to={{ opacity: imgAvaiable ? 1 : 0 }}>
            {style => (
              <animated.div style={{ opacity: style.opacity, position: "fixed" }}>
                <PreviewActionWrap>
                  <Tooltip title={"缩小"}>
                    <PreviewActionBtn onClick={this.zoomIn}>
                      <Small/>
                    </PreviewActionBtn>
                  </Tooltip>
                  <Tooltip title={"放大"}>
                    <PreviewActionBtn onClick={this.zoomOut}>
                      <Big/>
                    </PreviewActionBtn>
                  </Tooltip>
                  <Tooltip title={"适配屏幕"}>
                    <PreviewActionBtn onClick={this.fixImgToScreen}>
                      <FitScreen/>
                    </PreviewActionBtn>
                  </Tooltip>

                  <Tooltip title={"旋转"}>
                    <PreviewActionBtn onClick={this.rotate}>
                      <RotateIcon/>
                    </PreviewActionBtn>
                  </Tooltip>

                  <Tooltip title={"演示"}>
                    <PreviewActionBtn onClick={fullScreen}>
                      <PresentMode/>
                    </PreviewActionBtn>
                  </Tooltip>
                </PreviewActionWrap>
              </animated.div>
            )}
          </Spring>
        </Wrap>
      </div>
    );
  }
}
