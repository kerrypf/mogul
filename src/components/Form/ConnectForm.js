import React, { Component } from "react";
import { inject, observer, Provider } from "mobx-react";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import { FormField, FormFieldContainer, LabelItem, FormMessage } from "./pageUI";

@inject("form")
@observer
export default class extends Component {
  static displayName = "ConnectForm";

  static propTypes = {
    fieldName: PropTypes.string,
    initialValue: PropTypes.any,
    rules: PropTypes.array.isRequired,
    label: PropTypes.any,
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

  componentDidUpdate(prevProps) {
    if (prevProps.fieldName !== this.props.fieldName) {
      console.error("不支持动态改变 fieldName", prevProps.fieldName);
    }

    if (
      prevProps.rules !== this.props.rules ||
      prevProps.labelStyle !== this.props.labelStyle ||
      prevProps.containerStyle !== this.props.containerStyle
    ) {
      this.state.form.updateFormConfig();
    }
  }

  defaultLabelRender = () => {
    return this.props.label;
  };

  render() {
    const { label, children, hint } = this.props;
    const { labelStyle, isRequired, errorMessage, containerStyle } = this.state.form;
    const component = children(this.state.form);

    //如果不存在, 那么不渲染任何组件
    if (!component) {
      return null;
    }
    let labelFn = null;
    if (typeof label === "function") {
      labelFn = label;
    } else {
      labelFn = this.defaultLabelRender;
    }
    return (
      <Provider form={this.state.form}>
        <FormFieldContainer style={containerStyle}>
          <LabelItem required={isRequired} style={labelStyle}>
            {" "}
            {labelFn(this.state.form)}
          </LabelItem>
          <FormField tabIndex={0} hasError={!!errorMessage}>
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
