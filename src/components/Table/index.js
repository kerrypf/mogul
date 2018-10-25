import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { Provider, PropTypes as MobxPropTypes } from "mobx-react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp, prop, switchProp } from "styled-tools";
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
    size: PropTypes.oneOf(["small", "middle", "large"])
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
    noDataRender: ({ size }) => <NoDataSpan size={size}>暂无数据</NoDataSpan>
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
    this.onScroll();
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
      showHeader,
      fluid
    } = this.props;

    const draggableProps = draggable
      ? {
          pressDelay: 200,
          ...draggable
        }
      : {};

    return (
      <Provider table={this.state.store}>
        <TableContainer fluid={fluid} style={style}>
          {fixHeader && showHeader ? (
            <TableHeader fixHeader={true} ref={this.bindHeaderComponent} />
          ) : null}
          <TableInner
            innerRef={contianer => (this.container = contianer)}
            needScrollY={scrollY && scrollY !== "auto"}
            style={{ maxHeight: scrollY, width: scrollX }}>
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
