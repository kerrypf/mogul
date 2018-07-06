import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import { Input } from "antd";
import withForm from "./withForm";

@withForm
@observer
export default class FormInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  };

  handleOnChange = e => {
    this.props.form.changeValue(e.target.value);
  };

  handleBlur = () => {
    this.props.form.validate();
  };

  render() {
    const {
      form: { value },
      placeholder
    } = this.props;
    return (
      <Input
        value={value}
        onChange={this.handleOnChange}
        onBlur={this.handleBlur}
        placeholder={placeholder}
      />
    );
  }
}
