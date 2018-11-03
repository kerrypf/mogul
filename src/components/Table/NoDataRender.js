import React, { Component } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { Flex } from "../../utils/grid";

const EmptyRow = styled(Flex)`
  color: #333;
  border-bottom: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  min-height: 80px;
`;

@inject("table")
@observer
export default class NoDataRender extends Component {
  render() {
    const {
      table: { size, viewData },
      noDataRender
    } = this.props;

    if (viewData.length !== 0 || !noDataRender) return null;
    return (
      <EmptyRow justifyContent={"center"} alignItems={"center"}>
        {noDataRender({ size })}
      </EmptyRow>
    );
  }
}
