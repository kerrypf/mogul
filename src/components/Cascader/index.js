import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { observable, computed, action } from "mobx";
import { Observer } from "mobx-react";
import { Input, Icon } from "antd";
import { ifProp } from "styled-tools";
import { Overlay, Flex, Item } from "../../utils";
import { Spin } from "../Indicator";

const Container = styled.div`
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  outline: 0;
  transition: color 0.3s;

  &.disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
`;

const InnerLabel = styled.span`
  position: absolute;
  left: 0;
  height: 20px;
  line-height: 20px;
  top: 50%;
  margin-top: -10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  padding: 0 12px;
`;

const StyledInput = styled(Input)`
  background-color: transparent !important;
  cursor: pointer;
  width: 100%;
  position: static;
`;

const OptionsContainer = styled(Flex)`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: auto;
`;

const OptionSubContainer = styled.div`
  width: 120px;
  border-right: 1px solid #efefef;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const OptionItem = styled(Item).attrs({
  overflow: "auto"
})`
  position: relative;
  padding-right: 24px;
  padding: 5px 12px;
  line-height: 22px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;

  &.active {
    background: #f5f5f5;
    font-weight: 600;
  }
  ${ifProp(
    "disabled",
    css`
      background-color: #efefef;
      opacity: 0.6;
      cursor: not-allowed;
    `,
    css`
      &:hover {
        background: #e6f7ff;
      }
    `
  )};
`;

const ArrowIcon = styled(Icon).attrs({
  type: "right"
})`
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 8px;
`;

const LoadingSpin = styled(Spin).attrs({
  size: 14
})`
  position: absolute;
  right: 7px;
  top: 9px;
  z-index: 2;
`;
export default class extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        children: PropTypes.array
      })
    ).isRequired,
    value: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
  };

  static defaultProps = {
    style: {},
    value: [],
    loading: false
  };

  state = {
    expandKeys: []
  };

  @observable expandKeys = [];

  @computed
  get viewOptions() {
    const { options } = this.props;

    if (this.expandKeys.length === 0) {
      return [
        {
          level: 0,
          data: options.map(opt => ({
            ...opt,
            __expand__: false
          }))
        }
      ];
    }

    const result = [];

    let currentOptions = options;

    for (let i = 0; i <= this.expandKeys.length; i++) {
      let nextOptions = [];

      let data = currentOptions.map(opt => {
        let expand = opt.value === this.expandKeys[i];

        if (expand) {
          nextOptions = opt.children ? opt.children : [];
        }

        return { ...opt, __expand__: expand };
      });

      result.push({
        level: i,
        data: data
      });

      currentOptions = nextOptions;

      if (currentOptions.length === 0) {
        //break;
        i = 9999;
      }
    }
    return result;
  }

  renderOptions = () => {
    return (
      <OptionsContainer>
        <Observer>
          {() =>
            this.viewOptions.map(group => (
              <OptionSubContainer key={group.level}>
                {group.data.map(option => (
                  <OptionItem
                    className={
                      option.children && option.children.length > 0 && option.__expand__
                        ? "active"
                        : ""
                    }
                    key={option.value}
                    onClick={() =>
                      !option.disabled ? this.setSelectedKey(group.level, option.value) : null
                    }
                    onMouseEnter={() => this.setExpandKey(group.level, option.value)}
                    disabled={option.disabled}
                    title={option.label}>
                    <span>{option.label}</span>

                    {option.children && option.children.length > 0 ? <ArrowIcon /> : null}
                  </OptionItem>
                ))}
              </OptionSubContainer>
            ))
          }
        </Observer>
      </OptionsContainer>
    );
  };

  @action.bound
  setExpandKey(level, key) {
    let keepKeys = this.expandKeys.slice(0, level);

    this.expandKeys = [...keepKeys, key];
  }

  @action.bound
  setSelectedKey(level, key) {
    let keepKeys = this.expandKeys.slice(0, level);

    this.props.onChange([...keepKeys, key]);

    this.overlay.getOverlayApi().closeOverlay();
  }

  render() {
    const { value, options, disabled, placeholder, style, loading } = this.props;
    let currentOptions = options;
    let displayLabelArr = value.map(val => {
      let selectOption = currentOptions.find(option => {
        return option.value === val;
      });

      currentOptions = [];

      if (selectOption) {
        if (selectOption.children) {
          currentOptions = selectOption.children;
        }
        return selectOption.label;
      } else {
        return " ";
      }
    });

    return (
      <Overlay
        ref={overlay => (this.overlay = overlay)}
        arrow={false}
        animation={true}
        autoClose={true}
        trigger={"click"}
        disabled={disabled}
        overlay={this.renderOptions}
        placementVariation={"start"}
        zIndex={9999}
        offset={4}>
        <Container
          className={disabled ? "disabled" : ""}
          innerRef={container => (this.container = container)}
          style={style}>
          <InnerLabel>{displayLabelArr.join(" > ")}</InnerLabel>
          <StyledInput
            disabled={disabled}
            autoComplete={"off"}
            readOnly
            placeholder={value.length === 0 ? placeholder : null}
          />
          {loading ? <LoadingSpin /> : null}
        </Container>
      </Overlay>
    );
  }
}
