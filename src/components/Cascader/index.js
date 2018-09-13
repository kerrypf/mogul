import React, { Component, Fragment } from "react";
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
  overflow: auto;
`;

const OverlayContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const SearchContainer = styled.div`
  padding: 10px 5px;
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
  height: 33px;
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

const SearchOptionsContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;

  ${OptionItem} {
    border-top: 1px solid #efefef;
  }
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
    searchOptions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ),
    value: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    showSearch: PropTypes.bool,
    onSearch: PropTypes.func,
    onSearchSet: PropTypes.func
  };

  static defaultProps = {
    style: {},
    value: [],
    loading: false,
    showSearch: false,
    searchOptions: []
  };

  state = {
    expandKeys: [],
    searchStr: ""
  };

  @observable expandKeys = [];

  @observable searchStr = "";

  @observable searchOptions = [];

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

  @action.bound
  onSearchChange({ target: { value } }) {
    this.searchStr = value;
    let result = this.props.onSearch(value);
    if (result instanceof Promise) {
      result.then(
        action("get-options", options => {
          this.searchOptions = options;
        })
      );
    } else {
      this.searchOptions = result;
    }
  }

  getContainerWidth() {
    return this.container.getBoundingClientRect().width;
  }

  @action.bound
  hideSearchMode() {
    setTimeout(
      action("hide-search-mode", () => {
        this.searchStr = "";
        this.searchOptions = [];
      }),
      100
    );
  }

  renderOptions = () => {
    const { showSearch } = this.props;

    return (
      <OverlayContainer>
        {showSearch ? (
          <Fragment>
            <SearchContainer style={{ minWidth: this.getContainerWidth() }}>
              <Observer>
                {() => (
                  <Input.Search
                    onChange={this.onSearchChange}
                    value={this.searchStr}
                    style={{ width: "100%" }}
                  />
                )}
              </Observer>
            </SearchContainer>
            {this.searchStr ? (
              <SearchOptionsContainer style={{ maxWidth: this.getContainerWidth() }}>
                <div
                  style={{
                    color: "#333",
                    position: "relative",
                    height: 30,
                    padding: 5
                  }}>
                  搜索结果: 共{this.searchOptions.length}个
                  <Icon
                    type="close-circle"
                    onClick={this.hideSearchMode}
                    style={{ position: "absolute", right: 10, cursor: "pointer", top: 9 }}
                  />
                </div>
                {this.searchOptions.map(option => (
                  <OptionItem
                    onClick={ () => {
                      this.setSearchResult(option.value, option)
                    } }
                    key={option.value}
                    title={option.label}>
                    {option.label}
                  </OptionItem>
                ))}
              </SearchOptionsContainer>
            ) : null}
          </Fragment>
        ) : null}
        {showSearch && this.searchStr ? null : (
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
        )}
      </OverlayContainer>
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

    this.container.focus();
  }


  @action.bound
  setSearchResult(key, option) {

    this.props.onSearchSet(key, option);

    this.overlay.getOverlayApi().closeOverlay();

    this.container.focus();
  }


  @action.bound
  onOverlayVisible(visible) {
    if (!visible && this.props.showSearch) {
      this.searchOptions = [];
      this.searchStr = "";
    }
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
        onVisibleChange={this.onOverlayVisible}
        offset={4}>
        <Container
          tabIndex={ -1 }
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
