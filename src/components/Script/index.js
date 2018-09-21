import React from "react";
import PropTypes from "prop-types";

export default class Script extends React.Component {
  static propTypes = {
    attributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    onCreate: PropTypes.func,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    url: PropTypes.string.isRequired,
    children: PropTypes.func
  };

  static defaultProps = {
    attributes: {},
    onCreate: () => {},
    onError: () => {},
    onLoad: () => {}
  };

  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  static scriptObservers = {};

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.
  static loadedScripts = {};

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.
  static erroredScripts = {};

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.
  static idCount = 0;

  constructor(props) {
    super(props);
    this.scriptLoaderId = `id${this.constructor.idCount++}`; // eslint-disable-line space-unary-ops, no-plusplus
    this.state = {
      load: this.constructor.loadedScripts[this.props.url],
      hasError: !!this.constructor.erroredScripts[this.props.url]
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const { load, hasError } = this.state;

    if (load || hasError) return;

    // If the script is loading, add the component to the script's observers
    // and return. Otherwise, initialize the script's observers with the component
    // and start loading the script.
    if (this.constructor.scriptObservers[url]) {
      this.constructor.scriptObservers[url][this.scriptLoaderId] = this;
      return;
    }

    this.constructor.scriptObservers[url] = { [this.scriptLoaderId]: this };

    this.createScript();
  }

  componentWillUnmount() {
    const { url } = this.props;
    const observers = this.constructor.scriptObservers[url];

    // If the component is waiting for the script to load, remove the
    // component from the script's observers before unmounting the component.
    if (observers) {
      delete observers[this.scriptLoaderId];
    }
  }

  handleOnLoad() {
    this.props.onLoad();
    this.setState({
      load: true,
      hasError: false
    });
  }

  handleOnError() {
    this.props.onError();
    this.setState({
      load: true,
      hasError: true
    });
  }

  createScript() {
    const { onCreate, url, attributes } = this.props;
    const script = document.createElement("script");

    onCreate();

    // add 'data-' or non standard attributes to the script tag
    if (attributes) {
      Object.keys(attributes).forEach(prop => script.setAttribute(prop, attributes[prop]));
    }

    script.src = url;

    // default async to true if not set with custom attributes
    if (!script.hasAttribute("async")) {
      script.async = 1;
    }

    const callObserverFuncAndRemoveObserver = shouldRemoveObserver => {
      const observers = this.constructor.scriptObservers[url];
      Object.keys(observers).forEach(key => {
        if (shouldRemoveObserver(observers[key])) {
          delete this.constructor.scriptObservers[url][this.scriptLoaderId];
        }
      });
    };
    script.onload = () => {
      this.constructor.loadedScripts[url] = true;
      callObserverFuncAndRemoveObserver(observer => {
        observer.handleOnLoad();
        return true;
      });
    };

    script.onerror = () => {
      this.constructor.erroredScripts[url] = true;
      callObserverFuncAndRemoveObserver(observer => {
        observer.handleOnError();
        return true;
      });
    };

    document.body.appendChild(script);
  }

  render() {
    const { children } = this.props;
    const { load } = this.state;
    return load && children ? children() : null;
  }
}
