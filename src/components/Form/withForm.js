import React, { Component } from "react";
import { inject, observer, Provider } from "mobx-react";
import PropTypes from "prop-types";
import { decorate } from "../../utils/decorators/util";
import FormStore from "./FormStore";
import { FormField, FormFieldContainer, LabelItem, FormMessage } from "./pageUI";

function getDecorator(withArgs, defaultProps) {
  return Comp => {
    return inject("form")(
      observer(
        class extends Component {
          static propTypes = {
            fieldName: PropTypes.string,
            initialValue: PropTypes.any,
            rules: PropTypes.array.isRequired,
            label: PropTypes.any,
            labelStyle: PropTypes.object,
            containerStyle: PropTypes.object,
            onChange: PropTypes.func,
            hint: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
          };

          static defaultProps = {
            rules: [],
            containerStyle: {},
            ...defaultProps
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

          removeBlackListProps() {
            //移除黑名单的字段;
            const blackList = [
              "form",
              "label",
              "initialValue",
              "rules",
              "labelStyle",
              "containerStyle",
              "onChange",
              "hint"
            ];
            let newProps = {};

            Object.keys(this.props).forEach(key => {
              if (blackList.includes(key)) return;
              newProps[key] = this.props[key];
            });

            return newProps;
          }

          render() {
            const { label, hint } = this.props;
            const { labelStyle, isRequired, errorMessage, containerStyle } = this.state.form;

            return (
              <Provider form={this.state.form}>
                <FormFieldContainer style={containerStyle}>
                  <LabelItem required={isRequired} style={labelStyle}>
                    {" "}
                    {label}
                  </LabelItem>
                  <FormField hasError={!!errorMessage}>
                    <Comp {...this.removeBlackListProps()} form={this.state.form} />
                    <FormMessage hasError={!!errorMessage}>
                      {errorMessage ? errorMessage : hint}
                    </FormMessage>
                  </FormField>
                </FormFieldContainer>
              </Provider>
            );
          }
        }
      )
    );
  };
}

export default function(defaultProps = {}) {
  const isReactElement = typeof arguments[0] === "function";
  const decorator = getDecorator(!isReactElement, defaultProps);
  return decorate(!isReactElement, decorator, arguments);
}
