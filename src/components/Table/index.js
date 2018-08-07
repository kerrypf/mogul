import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { Provider, PropTypes as MobxPropTypes } from "mobx-react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import TableStore from "./TableStore";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import { Spin } from "../Indicator";
import { Flex } from "../../utils";
const TableContainer = styled.div`
  display: inline-block;
  position: relative;
  background-color: #fff;
  max-width: 100%;
`;

const TableInner = styled.div`
  position: relative;
  overflow-x: auto;
  ${ifProp(
    "needScrollY",
    css`
      overflow-y: scroll;
    `,
    css`
      overflow-y: auto;
    `
  )};
`;

const LoadingOverlay = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  filter: blur(0.5px);
  user-select: none;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.6);
`;

class Table extends Component {
  static propTypes = {
    style: PropTypes.object,
    data: MobxPropTypes.arrayOrObservableArray.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.any,
        key: PropTypes.string.isRequired,
        render: PropTypes.func,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sort: PropTypes.bool,
        cellContainerProps: PropTypes.object,
        headerContainerProps: PropTypes.object,
        headerMode: PropTypes.shape({
          type: PropTypes.oneOf(["sort"])
        }),
        visible: PropTypes.bool
      })
    ),
    bordered: PropTypes.bool,
    rowKey: PropTypes.string.isRequired,
    fixHeader: PropTypes.bool,
    headerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    scrollY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    scrollX: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    loading: PropTypes.bool,
    subTableKey: PropTypes.string,
    subTableRender: PropTypes.func,
    rowSelectKey: PropTypes.string,
    noDataRender: PropTypes.func,
    draggable: PropTypes.oneOfType([
      PropTypes.oneOf([false]),
      PropTypes.shape({
        onSortEnd: PropTypes.func.isRequired
      })
    ]),
    showHeader: PropTypes.bool
  };

  static defaultProps = {
    bordered: true,
    scrollY: "auto",
    scrollX: "auto",
    rowHeight: "auto",
    headerHeight: "auto",
    fixHeader: true,
    pagination: true,
    loading: false,
    draggable: false,
    showHeader: true,
    noDataRender: () => (
      <span style={{ textAlign: "center", lineHeight: "30px", color: "rgb(189, 189, 189)" }}>暂无数据</span>
    )
  };

  state = {};

  static getDerivedStateFromProps(props, state) {
    if (!state.store) {
      return {
        store: new TableStore(props)
      };
    } else {
      state.store.updateProps(props);
    }

    return null;
  }

  componentDidMount() {
    this.container.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    this.container.removeEventListener("scroll", this.onScroll);
  }

  bindHeaderComponent = header => {
    this.headerDom = findDOMNode(header);
  };

  onScroll = () => {
    if (this.headerDom && this.props.showHeader) {
      this.headerDom.scrollLeft = this.container.scrollLeft;
    }
  };

  render() {
    const {
      scrollY,
      style,
      fixHeader,
      scrollX,
      pagination,
      loading,
      noDataRender,
      subTableRender,
      draggable,
      showHeader
    } = this.props;

    const draggableProps = draggable
      ? {
          pressDelay: 200,
          ...draggable
        }
      : {};

    return (
      <Provider table={this.state.store}>
        <TableContainer style={style}>
          {fixHeader && showHeader ? (
            <TableHeader fixHeader={true} ref={this.bindHeaderComponent} />
          ) : null}
          <TableInner
            innerRef={contianer => (this.container = contianer)}
            needScrollY={scrollY && scrollY !== "auto"}
            style={{ height: scrollY, width: scrollX }}>
            {showHeader ? fixHeader ? null : <TableHeader /> : null}
            <TableBody
              {...draggableProps}
              noDataRender={noDataRender}
              subTableRender={subTableRender}
            />
          </TableInner>

          {pagination ? <Pagination /> : null}
          {loading ? (
            <LoadingOverlay>
              <Spin size={50} />
            </LoadingOverlay>
          ) : null}
        </TableContainer>
      </Provider>
    );
  }
}

export default Table;
