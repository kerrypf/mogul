import { NavLink as Nav, Redirect as Red } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import configuration from "../configuration";

@observer
export class NavLink extends Component {
  static propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    ]).isRequired
  };

  render() {
    const { to, ...rest } = this.props;

    return <Nav to={configuration._getUrlObject(to)} {...rest} />;
  }
}

@observer
export class Redirect extends Component {
  static propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    ]).isRequired
  };

  render() {
    const { to, ...rest } = this.props;

    return <Red to={configuration._getUrlObject(to)} {...rest} />;
  }
}
