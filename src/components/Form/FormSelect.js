import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import withForm from "./withForm";
import { Select } from "antd";

@withForm
@observer
export default class extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.any,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        disabled: PropTypes.bool
      })
    ).isRequired
  };

  handleOnChange = value => {
    this.props.form.changeValue(value);
  };

  render() {
    const {
      form: { value },
      options,
      ...rest
    } = this.props;
    return (
      <Select {...rest} onChange={this.handleOnChange} value={value} style={{ width: "100%" }}>
        {options.map(option => (
          <Select.Option value={option.value} key={option.value} disabled={option.disabled}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
