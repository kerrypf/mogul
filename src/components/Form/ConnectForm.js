import React, { Component } from "react";
import { inject, observer, Provider } from "mobx-react";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import { FormField, FormFieldContainer, LabelItem } from "./pageUI";

@inject("form")
@observer
export default class extends Component {
  static propTypes = {
    fieldName: PropTypes.string,
    initialValue: PropTypes.any,
    rules: PropTypes.array.isRequired,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    children: PropTypes.func.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    rules: [],
    containerStyle: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      form: new FormStore(this.props.form, this)
    };
  }

  componentWillUnmount() {
    this.state.form.tearDownForm();
  }

  render() {
    const { label, children } = this.props;
    const { labelStyle, isRequired, errorMessage, containerStyle } = this.state.form;

    return (
      <Provider form={this.state.form}>
        <FormFieldContainer style={containerStyle}>
          <LabelItem required={isRequired} style={labelStyle}>
            {" "}
            {label}
          </LabelItem>
          <FormField hasError={!!errorMessage} message={errorMessage}>
            {children(this.state.form)}
          </FormField>
        </FormFieldContainer>
      </Provider>
    );
  }
}
