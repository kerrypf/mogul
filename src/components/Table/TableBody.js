import React, { Component } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";
import { Flex, Item } from "../../utils";
import { ifProp } from "styled-tools";
const Body = styled.div`
  position: relative;
`;

const Row = styled(Flex).attrs({
  //  alignItems: "center"
})`
  //height: 40px;
  color: #333;
`;

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
`;

const RowCellInner = styled(Flex).attrs({
  alignItems: "center"
})`
  height: 100%;
  width: 100%;
`;

const RowCell = styled.div`
  padding: 4px 8px;
`;

@inject("table")
@observer
export default class extends Component {
  renderCell(column, row) {
    console.log(column.render(row));

    return column.render(row);
  }

  render() {
    const { viewData, rowKey, columns, bordered } = this.props.table;

    return (
      <Body>
        {viewData.map(row => (
          <Row key={row[rowKey]}>
            {columns.map((column, index) => (
              <RowCellOuter
                key={column.key}
                bordered={bordered}
                style={{ width: column.width, height: index === 0 ? 100 : "auto" }}
                index={index}>
                <RowCellInner>
                  <RowCell>{this.renderCell(column, row)}</RowCell>
                </RowCellInner>
              </RowCellOuter>
            ))}
          </Row>
        ))}
      </Body>
    );
  }
}
