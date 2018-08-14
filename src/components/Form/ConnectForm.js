import React, { Component } from "react";
import { inject, observer, Provider } from "mobx-react";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import { FormField, FormFieldContainer, LabelItem, FormMessage } from "./pageUI";

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
    onChange: PropTypes.func,
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
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
    const { label, children, hint } = this.props;
    const { labelStyle, isRequired, errorMessage, containerStyle } = this.state.form;
    const component = children(this.state.form);

    //如果不存在, 那么不渲染任何组件
    if (!component) {
      return null;
    }
    return (
      <Provider form={this.state.form}>
        <FormFieldContainer style={containerStyle}>
          <LabelItem required={isRequired} style={labelStyle}>
            {" "}
            {label}
          </LabelItem>
          <FormField hasError={!!errorMessage}>
            {component}
            <FormMessage hasError={!!errorMessage}>
              {errorMessage ? errorMessage : hint}
            </FormMessage>
          </FormField>
        </FormFieldContainer>
      </Provider>
    );
  }
}
