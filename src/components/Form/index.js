import React, { Component, Fragment } from "react";
import { Provider } from "mobx-react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import FormBox from "./FormBox";
import FormInput from "./FormInput";
import FormCheckGroup from "./FormCheckGroup";
import FormRadioGroup from "./FormRadioGroup";
import FormSelect from "./FormSelect";
import FormCascader from "./FormCascader";
import ConnectForm from "./ConnectForm";
import { FormClear } from "./pageUI";

class Form extends Component {
  static propTypes = {
    labelStyle: PropTypes.object,
    onPressEnter: PropTypes.func
  };

  static defaultProps = {
    labelStyle: {
      width: "30%",
      paddingRight: 10
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      form: new FormStore(null, this)
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.checkIsKeyEnterPress);
  }

  componentWillUnmount() {
    this.state.form.tearDownForm();
    document.removeEventListener("keydown", this.checkIsKeyEnterPress);
  }

  checkIsKeyEnterPress = ({ keyCode, target }) => {
    if (keyCode === 13 && this.props.onPressEnter) {
      let domTarget = findDOMNode(this);
      if (domTarget === target || domTarget.contains(target)) {
        debugger;
        this.props.onPressEnter(target);
      }
    }
  };

  getForm() {
    return this.state.form;
  }

  render() {
    return (
      <Provider form={this.state.form}>
        <Fragment>{this.props.children}</Fragment>
      </Provider>
    );
  }
}

Form.FormCascader = FormCascader;
Form.FormSelect = FormSelect;
Form.FormRadioGroup = FormRadioGroup;
Form.CheckGroup = FormCheckGroup;
Form.Input = FormInput;
Form.Box = FormBox;
Form.Connect = ConnectForm;
Form.Clear = FormClear;

export default Form;
export { default as withForm } from "./withForm";
