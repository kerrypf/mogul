import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styled, { css } from "styled-components";
import { Flex, Item } from "../../utils";
import { getScrollbarWidth } from "../../utils/getScrollbarWidth";
import { ifProp, prop, switchProp } from "styled-tools";
import { HeaderColumn } from "./TableHeader";
import { TableRowContainer, ColumnCellContainer } from "./ComponentUI";
const FixLeftContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: box-shadow 0.3s;

  &.mogul_table_sticky_left {
    box-shadow: 7px 0 5px -3px rgba(208, 207, 207, 0.6);
  }
`;

const FixContainerInner = styled.div`
  width: calc(100% + ${getScrollbarWidth()}px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

const FixedHeader = styled(Flex)`
  background-color: #fafafa;
  color: #333;
`;

const RowCellInner = styled(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})`
  height: 100%;
  width: 100%;
`;

const RowCell = styled(Item)`
  ${switchProp(prop("size", "small"), {
    small: css`
      padding: 6px 12px;
    `,
    middle: css`
      padding: 8px 16px;
    `,
    large: css`
      padding: 12px 18px;
    `
  })};
`;

const HeaderCellOuter = styled(Item).attrs({
  shrink: 0
})`
  ${ifProp(
    "bordered",
    css`
      border-right: 1px solid #e8e8e8;
      ${ifProp(
        "index",
        css``,
        css`
          border-left: 1px solid #e8e8e8;
        `
      )};
      border-top: 1px solid #e8e8e8;
    `,
    css``
  )};
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fafafa;
`;

const HeaderCellInner = styled(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})`
  height: 100%;
  width: 100%;
`;

@inject("table")
@observer
class RowComponent extends Component {
  render() {
    const {
      table: { rowKey, fixedLeftColumns, bordered, size, rowMeasureMap },
      rowData
    } = this.props;

    const rowRect = rowMeasureMap.get(rowData[rowKey]);
    if (!rowRect) return null;

    return (
      <TableRowContainer rowHoverId={rowData[rowKey]}>
        {fixedLeftColumns.map((column, index) => {
          let cellContainerProps = column.cellContainerProps || {};

          return (
            <ColumnCellContainer
              key={column.key}
              bordered={bordered}
              flex={column.width ? undefined : column.flex ? column.flex : 1}
              style={{
                width: column.width,
                minWidth: column.minWidth,
                height: rowRect.height
              }}
              index={index}>
              <RowCellInner>
                <RowCell size={size} {...cellContainerProps}>
                  {column.render ? column.render(rowData, column) : rowData[column.key]}
                </RowCell>
              </RowCellInner>
            </ColumnCellContainer>
          );
        })}
      </TableRowContainer>
    );
  }
}

@inject("table")
@observer
class HeaderRowComponent extends Component {
  render() {
    const {
      table: { showHeader, headerMeasure, fixedLeftColumns, bordered, headerMinHeight }
    } = this.props;

    if (!showHeader || !headerMeasure) return null;

    return (
      <FixedHeader style={{ height: headerMeasure.height }}>
        {fixedLeftColumns.map((column, index) => (
          <HeaderCellOuter
            bordered={bordered}
            key={column.key}
            style={{
              width: column.width,
              minHeight: headerMinHeight
            }}
            index={index}>
            <HeaderCellInner>
              <HeaderColumn column={column} />
            </HeaderCellInner>
          </HeaderCellOuter>
        ))}
      </FixedHeader>
    );
  }
}

@inject("table")
@observer
export default class extends Component {
  constructor(props) {
    super(props);
    this.scrollBarWidth = getScrollbarWidth();
  }

  componentDidMount() {
    const {
      table: { registryContainer }
    } = this.props;

    this.container.addEventListener("scroll", this.onScroll);
    registryContainer("fixLeftContainer", this.container);
  }

  componentWillUnmount() {
    const {
      table: { registryContainer }
    } = this.props;
    this.container.removeEventListener("scroll", this.onScroll);
    registryContainer("fixLeftContainer", null);
  }

  onScroll = () => {
    const { updateScrollTopPos } = this.props.table;

    if (this.container) {
      updateScrollTopPos(this.container.scrollTop);
    }
  };

  render() {
    const {
      table: { viewData, rowKey, scrollY, fixedLeftColumnsWidth, fixHeader, scrollLeftPos }
    } = this.props;

    let maxHeight = null;

    if (!scrollY || scrollY === "auto") {
      maxHeight = null;
    } else {
      maxHeight = `calc(${scrollY}px - ${this.scrollBarWidth}px)`;
    }

    return (
      <FixLeftContainer
        className={scrollLeftPos ? "mogul_table_sticky_left" : null}
        style={{ width: fixedLeftColumnsWidth }}>
        {fixHeader ? <HeaderRowComponent /> : null}
        <FixContainerInner
          style={{ maxHeight }}
          innerRef={container => (this.container = container)}>
          {viewData.map(row => <RowComponent rowData={row} key={row[rowKey]} />)}
        </FixContainerInner>
      </FixLeftContainer>
    );
  }
}
