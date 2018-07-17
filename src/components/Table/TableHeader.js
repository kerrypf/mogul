import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styled, { css } from "styled-components";
import { Flex, Item } from "../../utils";
import { ifProp } from "styled-tools";
const HeaderRow = styled(Flex)`
  color: #333;
  background-color: #fff;
  ${ifProp(
    "fixHeader",
    css`
      overflow-y: ${ifProp("needScroll", "scroll", "hidden")};
      overflow-x: hidden;
    `,
    css``
  )};
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
  border-bottom: 1px solid #e8e8e8;
`;

const HeaderCellInner = styled(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})`
  height: 100%;
  width: 100%;
`;

const HeaderCell = styled(Item)`
  padding: 4px 8px;
`;

@inject("table")
@observer
export default class extends Component {
  render() {
    const {
      table: { columns, bordered, headerHeight, scrollX, scrollY },
      fixHeader
    } = this.props;

    return (
      <HeaderRow
        innerRef={header => (this.header = header)}
        fixHeader={fixHeader}
        needScroll={scrollY && scrollY !== "auto"}
        style={{ height: headerHeight, width: scrollX }}>
        {columns.map((column, index) => {
          let headerContainerProps = column.headerContainerProps || {};

          return (
            <HeaderCellOuter
              bordered={bordered}
              key={column.key}
              flex={column.width ? undefined : 1}
              style={{ width: column.width }}
              index={index}>
              <HeaderCellInner>
                <HeaderCell {...headerContainerProps}>{column.title}</HeaderCell>
              </HeaderCellInner>
            </HeaderCellOuter>
          );
        })}
      </HeaderRow>
    );
  }
}
