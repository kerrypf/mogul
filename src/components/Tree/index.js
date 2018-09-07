import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider, inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import { List } from "react-virtualized";
import { Icon, Checkbox } from "antd";
import { Item, Flex } from "../../utils/grid";
import TreeStore from "./TreeStore";
import NodeLabel from "./NodeLabel";

@inject("tree")
@observer
class RootNode extends Component {
  renderHighlightSpan = (text, regExp) => {
    const { searchString } = this.props.tree;

    let arr = text.split(regExp);
    let labelArr = [];
    for (let i = 0; i < arr.length; i++) {
      labelArr.push(<span key={`${searchString}_${i}_${arr[i]}`}>{arr[i]}</span>);
      if (i !== arr.length - 1) {
        labelArr.push(
          <span key={`${searchString}_${i}_${searchString}`} style={{ color: "red" }}>
            {searchString}
          </span>
        );
      }
    }

    return labelArr;
  };

  render() {
    const {
      flattenOptions,
      height,
      width,
      selectedKeys,
      expandKeys,
      toggleExpandTree,
      selectNode,
      searchRegExp,
      inSearchMode,
      checkedKeys,
      checked,
      props: { onChecked, isChecked }
    } = this.props.tree;

    if (inSearchMode && flattenOptions.length === 0)
      return <div style={{ textAlign: "center" }}>找不到结果</div>;

    return (
      <List
        height={height}
        width={width}
        rowCount={flattenOptions.length}
        rowHeight={30}
        style={{ outline: "none" }}
        rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
          let option = flattenOptions[index];
          let selected = selectedKeys.includes(option.value);
          let disabled = false;
          let expand = expandKeys.includes(option.value);
          if (option.__level__) {
            //            disabled = selectedKeys.includes(option.parent.value);
            expand = false;
          } else {
            expand = expandKeys.includes(option.value);
          }
          return (
            <Flex
              key={key}
              alignItems={"center"}
              style={{
                ...style,
                paddingLeft: (option.__level__ ? option.__level__ * 22 : 0) + 5,
                paddingRight: 5
              }}>
              <Item>
                {option.children ? (
                  <Icon
                    onClick={() => toggleExpandTree(option.value)}
                    type={expand ? "minus-square-o" : "plus-square-o"}
                    style={{ cursor: "pointer" }}
                  />
                ) : null}
              </Item>
              <Item>
                {checked ? (
                  <Checkbox
                    onChange={({ target: { checked } }) => {
                      onChecked(checked, option);
                    }}
                    checked={
                      isChecked(checkedKeys, option)
                    }
                    style={{ marginLeft: 5 }}
                  />
                ) : null}
              </Item>
              <NodeLabel
                disabled={disabled}
                onClick={disabled ? null : () => selectNode(option, !selected)}
                selected={selected}>
                {inSearchMode ? this.renderHighlightSpan(option.label, searchRegExp) : option.label}
              </NodeLabel>
            </Flex>
          );
        }}
      />
    );
  }
}

export default class extends Component {
  static propTypes = {
    search: PropTypes.string,
    options: MobxPropTypes.arrayOrObservableArray.isRequired,
    value: MobxPropTypes.arrayOrObservableArray.isRequired,
    style: PropTypes.object,
    onSelect: PropTypes.func,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    onChecked: PropTypes.func,
    checkedKeys: PropTypes.array,
    checked: PropTypes.bool,
    formatter: PropTypes.func,
    isChecked: PropTypes.func
  };

  static defaultProps = {
    checkedKeys: [],
    checked: false,
    formatter: option => option,
    onChecked: () => {},
    isChecked: (checkedKeys, option) => checkedKeys.includes(option.value)
  };

  constructor(props) {
    super(props);
    this.state = {
      treeStore: new TreeStore(this.props)
    };
    if (this.props.search && this.props.search.length > 0) {
      this.state.treeStore.expandAllNodes();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.state.treeStore.updateProps(nextProps);
    if (nextProps.search !== this.props.search) {
      if (!this.props.search && nextProps.search) {
        //用户开始搜索, 展开所有的节点
        this.state.treeStore.expandAllNodes();
      }
    }
  }

  render() {
    const { style } = this.props;
    return (
      <Provider tree={this.state.treeStore}>
        <div style={style}>
          <RootNode />
        </div>
      </Provider>
    );
  }
}
