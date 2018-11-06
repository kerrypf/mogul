import React, { Component, Fragment } from "react";
import { findDOMNode } from "react-dom";
import { Provider, PropTypes as MobxPropTypes, inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Transition, interpolate } from "react-spring";
import { ifProp, prop, switchProp } from "styled-tools";
import TableStore from "./TableStore";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
//import { Spin } from "../Indicator";
import { Flex } from "../../utils";
import FixLeftColumns from "./FixLeftColumns";
import FixRightColumns from "./FixRightColumns";
import NoDataRender from "./NoDataRender";
import { DragHandle, Loader } from "./ComponentUI";

const TableContainer = styled.div`
  display: inline-block;
  position: relative;
  background-color: #fff;

  ${ifProp(
    "fluid",
    css`
      width: 100%;
    `,
    css`
      max-width: 100%;
    `
  )};
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

const NoDataSpan = styled.span`
  text-align: center;
  color: rgb(189, 189, 189);
  ${switchProp(prop("size", "small"), {
    small: css`
      line-height: 30px;
    `,
    middle: css`
      line-height: 40px;
    `,
    large: css`
      line-height: 50px;
    `
  })};
`;

@inject("table")
@observer
class RenderPlugins extends Component {
  render() {
    const { fixedLeftColumns, fixedRightColumns } = this.props.table;
    return (
      <Fragment>
        {fixedLeftColumns.length === 0 ? null : <FixLeftColumns />}

        {fixedRightColumns.length === 0 ? null : <FixRightColumns />}
      </Fragment>
    );
  }
}

class Table extends Component {
  static propTypes = {
    style: PropTypes.object,
    data: MobxPropTypes.arrayOrObservableArray.isRequired,
    fluid: PropTypes.bool,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.any,
        key: PropTypes.string.isRequired,
        render: PropTypes.func,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        minWidth: PropTypes.number,
        sort: PropTypes.bool,
        cellContainerProps: PropTypes.object,
        headerContainerProps: PropTypes.object,
        headerMode: PropTypes.shape({
          type: PropTypes.oneOf(["sort"])
        }),
        visible: PropTypes.bool,
        fixed: PropTypes.oneOf(["left", "right"])
      })
    ),
    bordered: PropTypes.bool,
    rowKey: PropTypes.string.isRequired,
    fixHeader: PropTypes.bool,
    headerMinHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    showHeader: PropTypes.bool,
    size: PropTypes.oneOf(["small", "middle", "large"]),
    loadingDelay: PropTypes.number.isRequired
  };

  static defaultProps = {
    fluid: false,
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
    noDataRender: ({ size }) => <NoDataSpan size={size}>暂无数据</NoDataSpan>,
    loadingDelay: 300
  };

  static DragHandle = DragHandle;

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

    this.state.store.registryContainer("mainScrollContainer", this.container);

    this.onScroll();
  }

  componentWillUnmount() {
    this.container.removeEventListener("scroll", this.onScroll);

    this.state.store.registryContainer("mainScrollContainer", null);
  }

  bindHeaderComponent = header => {
    this.headerDom = findDOMNode(header);
  };

  onScroll = () => {
    const { updateScrollLeftPos, updateScrollTopPos } = this.state.store;

    if (this.headerDom && this.props.showHeader) {
      this.headerDom.scrollLeft = this.container.scrollLeft;
    }
    updateScrollLeftPos(this.container.scrollLeft);
    updateScrollTopPos(this.container.scrollTop);
  };

  getTableApi = () => {
    return this.state.store;
  };

  getDraggableContainer = () => {
    return findDOMNode(this).querySelector(".__mogul_table_scroll_container");
  };

  bindContainerRef = contianer => {
    this.container = contianer;
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
      showHeader,
      fluid,
      loadingDelay
    } = this.props;

    const draggableProps = draggable
      ? {
          pressDelay: 200,

          ...draggable,
          getContainer: this.getDraggableContainer,
          helperClass:
            "__mogul_table_dragging" + (draggable.helperClass ? draggable.helperClass : "")
        }
      : {};

    return (
      <Provider table={this.state.store}>
        <TableContainer fluid={fluid} style={style}>
          {fixHeader && showHeader ? (
            <TableHeader fixHeader={true} ref={this.bindHeaderComponent} />
          ) : null}

          <TableInner
            className={"__mogul_table_scroll_container"}
            innerRef={this.bindContainerRef}
            needScrollY={scrollY && scrollY !== "auto"}
            style={{ maxHeight: scrollY, width: scrollX }}>
            {showHeader ? fixHeader ? null : <TableHeader /> : null}
            <TableBody {...draggableProps} subTableRender={subTableRender} />

            <NoDataRender noDataRender={noDataRender} />
          </TableInner>

          <RenderPlugins />

          {pagination ? <Pagination /> : null}

          <Loader loading={loading} loadingDelay={loadingDelay} />
        </TableContainer>
      </Provider>
    );
  }
}

export default Table;
