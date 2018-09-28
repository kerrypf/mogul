import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes, Provider } from "mobx-react";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import { Flex } from "../../utils";
@inject("form")
@observer
export default class FormBox extends Component {
  static propTypes = {
    fieldName: PropTypes.string,
    form: MobxPropTypes.objectOrObservableObject.isRequired,
    style: PropTypes.object,
    containerStyle: PropTypes.object
  };

  static defaultProps = {
    style: {},
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
    const { form, children, ...rest } = this.props;
    return (
      <Provider form={this.state.form}>
        <Flex {...rest}>
          {typeof children === "function" ? children(this.state.form) : children}
        </Flex>
      </Provider>
    );
  }
}
