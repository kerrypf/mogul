import React, { Component } from "react";
import { Pagination } from "antd";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import configuration from "../configuration";
import { Flex } from "../../utils";
const Container = styled(Flex).attrs({
  justifyContent: "flex-end"
})`
  padding: 15px 0;
  width: 100%;
`;

@inject("table")
@observer
export default class extends Component {
  render() {
    const { size, showSizeChanger, showQuickJumper } = configuration.pagination;
    const {
      table: { unControlTotal, pagination }
    } = this.props;
    return (
      <Container>
        <Pagination
          size={size}
          showQuickJumper={showQuickJumper}
          showSizeChanger={showSizeChanger}
          total={unControlTotal}
          {...pagination}
        />
      </Container>
    );
  }
}
