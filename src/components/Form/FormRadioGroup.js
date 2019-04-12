import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import withForm from "./withForm";
import { Radio } from "antd";
import { Item, Flex } from "../../utils";

@withForm
@observer
export default class extends Component {
  static displayName = "FormRadioGroup";

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
      form.changeValue(value);
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
            <Radio
              checked={value === option.value}
              onChange={this.handleOptionOnChange(option)}
              disabled={option.disabled}>
              {option.label}
            </Radio>
          </Item>
        ))}
      </Flex>
    );
  }
}
