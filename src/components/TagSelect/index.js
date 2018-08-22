import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Overlay, Flex } from "../../utils";
import { Tag } from "antd";

const Container = styled.div`
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 4px 8px;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  outline: 0;
  transition: color 0.3s;
  border: 1px solid #d9d9d9;
  min-height: 32px;
  overflow: hidden;

  &.disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
`;

const StyledInput = styled.input`
  background-color: transparent !important;
  cursor: pointer;
  width: 3px;
  position: relative;
  top: 2px;
  border-width: 0;
  font-size: 100%;
  height: 100%;
  outline: 0;
  border-radius: 4px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
`;

const InputTag = styled(Tag)`
  padding-right: 2px !important;
  margin-right: 2px !important;
  border-right: none !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

const PopupContainer = styled(Flex)`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: auto;
  padding: 8px 16px;
`;

export default class extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired
      })
    ),
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.func]).isRequired
  };

  static defaultProps = {
    value: []
  };

  state = {
    inputValue: ""
  };

  handleVisibleChange = visible => {
    if (visible) {
      this.input.focus();
    } else {
      this.setState({
        inputValue: ""
      });
    }
  };

  changeInputValue = ({ target: { value } }) => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { value, disabled, style, children, onChange } = this.props;
    const { inputValue } = this.state;
    return (
      <Overlay
        ref={overlay => (this.overlay = overlay)}
        arrow={false}
        animation={true}
        autoClose={true}
        trigger={"click"}
        disabled={disabled}
        overlay={() => <PopupContainer>{children(inputValue, this.props)}</PopupContainer>}
        placementVariation={"start"}
        zIndex={9999}
        offset={4}
        onVisibleChange={this.handleVisibleChange}>
        <Container
          className={disabled ? "disabled" : ""}
          innerRef={container => (this.container = container)}
          style={style}>
          {value.map(option => (
            <Tag
              closable={!disabled}
              key={option.value}
              onClose={() => {
                onChange(value.filter(val => val.value !== option.value));
              }}>
              {option.label}
            </Tag>
          ))}

          {inputValue ? <InputTag>{inputValue}</InputTag> : null}
          <StyledInput
            innerRef={input => (this.input = input)}
            disabled={disabled}
            autoComplete={"off"}
            onChange={this.changeInputValue}
            value={inputValue}
          />
        </Container>
      </Overlay>
    );
  }
}
