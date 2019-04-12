import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import { Input } from "antd";
import withForm from "./withForm";

@withForm
@observer
export default class FormInput extends Component {
  static displayName = "FormInput";

  static propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
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
      ...rest
    } = this.props;

    return (
      <Input value={value} onChange={this.handleOnChange} onBlur={this.handleBlur} {...rest} />
    );
  }
}
