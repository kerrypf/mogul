import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Flex, Item } from "../../utils";
import { ifProp } from "styled-tools";
const HeaderRow = styled(Flex).attrs({
  alignItems: "center"
})`
  height: 40px;
  color: #333;
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
  height: 100%;
`;

const HeaderCellInner = styled(Flex).attrs({
  alignItems: "center"
})`
  height: 100%;
  width: 100%;
`;

const HeaderCell = styled.div`
  padding: 4px 8px;
`;

@inject("table")
@observer
export default class extends Component {
  render() {
    const {
      table: { columns, bordered }
    } = this.props;

    return (
      <HeaderRow>
        {columns.map((column, index) => (
          <HeaderCellOuter
            bordered={bordered}
            key={column.key}
            style={{ width: column.width }}
            index={index}>
            <HeaderCellInner>
              <HeaderCell>{column.title}</HeaderCell>
            </HeaderCellInner>
          </HeaderCellOuter>
        ))}
      </HeaderRow>
    );
  }
}
