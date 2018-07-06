import React, { Component } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import withForm from "./withForm";
import { Cascader } from "antd";

@withForm({
  initialValue: []
})
@observer
export default class extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.any,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        disabled: PropTypes.bool,
        children: PropTypes.array
      })
    ).isRequired
  };

  handleOnChange = value => {
    this.props.form.changeValue(value);
  };

  render() {
    const {
      form: { value },
      options
    } = this.props;
    return (
      <Cascader
        onChange={this.handleOnChange}
        value={toJS(value)}
        style={{ width: "100%" }}
        options={options}
        expandTrigger={"hover"}
      />
    );
  }
}
