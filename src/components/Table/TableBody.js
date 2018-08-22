import React, { Component, Fragment, createElement } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { ifProp, switchProp, prop } from "styled-tools";
import { Flex, Item } from "../../utils";
const RowCellOuter = styled(Item).attrs({
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
    `,
    css``
  )};
  border-bottom: 1px solid #e8e8e8;
  height: 100%;
  overflow: auto;
  transition: background-color 0.3s;
  will-change: background-color;
`;

const Row = styled(Flex)`
  color: #333;

  will-change: transform;
  transform: translate3d(0, 0, 0);

  ${ifProp(
    "selected",
    css`
      box-shadow: 0px 1px 1px 0px #a2a2a2, 0px -1px 1px 0px #a2a2a2;
      & {
        ${RowCellOuter} {
          background-color: #e6f7ff;
        }
      }
    `,
    css`
      ${RowCellOuter} {
        background-color: #fff;
      }
    `
  )};

  &:hover {
    ${RowCellOuter} {
      background-color: #e6f7ff;
    }
  }
`;

const SortableRow = SortableElement(({ index, disabled, ...rowProps }) =>
  createElement(Row, rowProps)
);

const EmptyRow = styled(Flex)`
  color: #333;
  border-bottom: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
`;

const RowCellInner = styled(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})`
  height: 100%;
  width: 100%;
`;

const RowCell = styled(Item)`
  ${switchProp(prop("size","small"),{
    small: css`
      padding: 4px 8px;
    `,
    middle: css`
      padding: 6px 12px;
    `,
    large: css`
      padding: 8px 16px;
    `
  })};
`;

const SubTableRowContainer = styled(Flex)`
  background-color: #e8e8e8;
  padding: 4px 8px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 1px 1px 0px #a2a2a2;
  }
`;

@inject("table")
@SortableContainer
@observer
export default class extends Component {
  warned = false;

  getColumnWidth(column) {
    const { scrollX } = this.props.table;
    if (!this.warned && scrollX && scrollX !== "auto" && !column.width) {
      this.warned = true;
      console.warn(
        `when scrollX set to ${scrollX}, column.width is required, check your column.key="${
          column.key
        }"`
      );
    }

    return column.width;
  }

  getSubTableWidth() {
    const { columns } = this.props.table;
    let widths = columns.map(column => {
      let width = this.getColumnWidth(column);
      if (!width) return "0px";
      if (Number(width)) return Number(width) + "px";
      return width;
    });

    return `calc( ${widths.join(" + ")} )`;
  }

  render() {
    const {
      table: {
        viewData,
        rowKey,
        columns,
        bordered,
        rowHeight,
        subTableKey,
        rowSelectKey,
        draggable,
        size
      },
      noDataRender,
      subTableRender
    } = this.props;

    return (
      <div style={{ position: "relative" }}>
        {viewData.map((row, rowIndex) => (
          <Fragment key={row[rowKey]}>
            <SortableRow
              index={rowIndex}
              selected={!!row[rowSelectKey]}
              disabled={!draggable}
              style={{ height: rowHeight }}>
              {columns.map((column, index) => {
                let cellContainerProps = column.cellContainerProps || {};
                return (
                  <RowCellOuter
                    key={column.key}
                    bordered={bordered}
                    flex={column.width ? undefined : column.flex ? column.flex : 1}
                    style={{
                      width: this.getColumnWidth(column),
                      minWidth: column.minWidth,
                      height: rowHeight
                    }}
                    index={index}>
                    <RowCellInner>
                      <RowCell size={size} {...cellContainerProps}>
                        {column.render ? column.render(row, column) : row[column.key]}
                      </RowCell>
                    </RowCellInner>
                  </RowCellOuter>
                );
              })}
            </SortableRow>

            {subTableRender && typeof row[subTableKey] === "boolean" && row[subTableKey] ? (
              <SubTableRowContainer style={{ width: this.getSubTableWidth() }}>
                {subTableRender(row)}
              </SubTableRowContainer>
            ) : null}
          </Fragment>
        ))}

        {viewData.length === 0 ? (
          <EmptyRow justifyContent={"center"} alignItems={"center"} style={{ height: rowHeight }}>
            {noDataRender()}
          </EmptyRow>
        ) : null}
      </div>
    );
  }
}
