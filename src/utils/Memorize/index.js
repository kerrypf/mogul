import { Component } from "react";
import PropTypes from "prop-types";
import configuration from "../../components/configuration";

let warned = false;

export default class extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    defaultValue: PropTypes.object,
    id: PropTypes.string.isRequired,
    version: PropTypes.number
  };

  static defaultProps = {
    defaultValue: {},
    version: 0
  };

  static displayName = "Memorize";

  constructor(props) {
    super(props);

    const { defaultValue, id, version } = this.props;
    const key = configuration.localStorageKeyPrefix + this.props.id + "_"  + version;
    let result = localStorage.getItem(key);

    if (result) {
      try {
        result = JSON.parse(result);
      } catch (e) {
        result = {};
      }
    }
    this.state = {
      value: {
        ...defaultValue,
        ...result
      },
      key,
      id,
      version
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state) {
      if (!warned) {
        if (props.id !== state.id || props.version !== state.version) {
          console.warn(
            `Memorize不支持controlled id 或者 version, 请检查Memorized：id为${state.id}`
          );
          warned = true;
        }
      }
    }

    return null;
  }

  sync = (data = {}) => {
    this.setState(
      {
        value: {
          ...this.state.value,
          ...data
        }
      },
      () => {
        localStorage.setItem(this.state.key, JSON.stringify(this.state.value));
      }
    );
  };

  render() {
    const { value } = this.state;
    return this.props.children(value, this.sync);
  }
}
