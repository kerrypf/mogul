import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import withForm from "./withForm";
import { Checkbox } from "antd";
import { Item, Flex } from "../../utils";

@withForm({
  initialValue: []
})
@observer
export default class FormCheckGroup extends Component {
  static displayName = "FormCheckGroup";

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.any,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        disabled: PropTypes.bool
      })
    ).isRequired
  };

  handleOptionOnChange({ value }) {
    const { form } = this.props;
    return event => {
      const isChecked = event.target.checked;
      const currentValue = form.value;
      form.changeValue(
        isChecked ? [...currentValue, value] : currentValue.filter(val => val !== value)
      );
    };
  }

  render() {
    const {
      form: { value },
      options
    } = this.props;
    return (
      <Flex wrap={"wrap"}>
        {options.map(option => (
          <Item key={option.value}>
            <Checkbox
              checked={value.includes(option.value)}
              onChange={this.handleOptionOnChange(option)}
              disabled={option.disabled}>
              {option.label}
            </Checkbox>
          </Item>
        ))}
      </Flex>
    );
  }
}
