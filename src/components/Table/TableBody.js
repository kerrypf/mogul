import React, { Component, Fragment, createElement } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { switchProp, prop } from "styled-tools";
import Measure from "react-measure";
import { Flex, Item } from "../../utils";
import { TableRowContainer, ColumnCellContainer } from "./ComponentUI";

const SortableRow = SortableElement(({ index, disabled, ...rowProps }) =>
  createElement(TableRowContainer, rowProps)
);

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
        size,
        updateRowMeasure
      },
      subTableRender
    } = this.props;

    return (
      // 用于 drag 组件
      <div style={{ position: "relative" }}>
        {viewData.map((row, rowIndex) => (
          <Fragment key={row[rowKey]}>
            <Measure
              bounds={true}
              onResize={contentRect => {
                updateRowMeasure(row, contentRect);
              }}>
              {({ measureRef }) => (
                <SortableRow
                  rowHoverId={row[rowKey]}
                  innerRef={measureRef}
                  index={rowIndex}
                  selected={!!row[rowSelectKey]}
                  disabled={!draggable}
                  style={{ height: rowHeight }}>
                  {columns.map((column, index) => {
                    let cellContainerProps = column.cellContainerProps || {};
                    return (
                      <ColumnCellContainer
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
                          {createElement(RowCell, {
                            size,
                            ...cellContainerProps,
                            //see https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md
                            style: cellContainerProps.style ? { ...cellContainerProps.style } : {},
                            children: column.render ? column.render(row, column) : row[column.key]
                          })}
                        </RowCellInner>
                      </ColumnCellContainer>
                    );
                  })}
                </SortableRow>
              )}
            </Measure>

            {subTableRender && typeof row[subTableKey] === "boolean" && row[subTableKey] ? (
              <SubTableRowContainer style={{ width: this.getSubTableWidth() }}>
                {subTableRender(row)}
              </SubTableRowContainer>
            ) : null}
          </Fragment>
        ))}
      </div>
    );
  }
}
