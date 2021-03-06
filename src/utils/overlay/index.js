import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "mobx-react";
import OverlayStore from "./OverlayStore";
import Manage from "./Manage";

export class Overlay extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    trigger: PropTypes.oneOf(["click", "hover"]),
    overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    placement: PropTypes.oneOf(["bottom", "top", "left", "right"]),
    placementVariation: PropTypes.oneOf(["start","end"]),
    offset: PropTypes.number,
    arrow: PropTypes.bool,
    arrowSize: PropTypes.number,
    arrowColor: PropTypes.string,
    autoClose: PropTypes.bool,
    hoverDelay: PropTypes.number,
    animation: PropTypes.bool,
    zIndex: function(props, propName, componentName) {
      if (props[propName] !== "auto" && !Number.isInteger(props[propName])) {
        return new Error(
          "Invalid prop `" +
            propName +
            "` supplied to" +
            " `" +
            componentName +
            "`. Validation failed. expect `auto` or a valid integer"
        );
      }
    },
    flip: PropTypes.bool,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func
  };

  static defaultProps = {
    trigger: "click",
    placement: "bottom",
    offset: 8,
    arrow: false,
    arrowSize: 18,
    arrowColor: "#fff",
    autoClose: false,
    hoverDelay: 200,
    animation: false,
    zIndex: "auto",
    flip: true,
    disabled: false,
    onVisibleChange: () => true
  };

  constructor(props) {
    super(props);
    this.state = {
      overlay: new OverlayStore(this)
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.state.overlay.updateOverlayProps(this.props);
    }
  }

  getOverlayApi() {
    return this.state.overlay;
  }

  render() {
    return (
      <Provider overlay={this.state.overlay}>
        <Manage >
          { this.props.children }
        </Manage>
      </Provider>
    );
  }
}
