import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styled, { css } from "styled-components";
import { Flex, Item } from "../../utils/grid";
import { ifProp } from "styled-tools";

export const ColumnCellContainer = styled(Item).attrs({
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
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  height: 100%;
  overflow: auto;
  transition: background-color 0.3s;
  will-change: background-color;
`;

const RowContainer = styled(Flex)`
  color: #333;

  will-change: transform;
  transform: translate3d(0, 0, 0);

  ${ifProp(
    "hover",
    css`
      ${ColumnCellContainer} {
        background-color: #e6f7ff;
      }
    `,
    css`
      ${ColumnCellContainer} {
        background-color: #fff;
      }
    `
  )};
`;

export function rowHover(Comp) {
  return inject("table")(
    class extends Component {
      onMouseEnter = () => {
        const {
          table: { setHighlightRowId },
          rowHoverId
        } = this.props;
        setHighlightRowId(rowHoverId);
      };

      onMouseLeave = () => {
        const {
          table: { setHighlightRowId }
        } = this.props;
        setHighlightRowId(null);
      };

      render() {
        return (
          <Comp {...this.props} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />
        );
      }
    }
  );
}

@rowHover
@inject("table")
@observer
export class TableRowContainer extends Component {
  render() {
    const {
      table: { highlightRowId },
      onMouseEnter,
      onMouseLeave,
      rowHoverId,
      ...rest
    } = this.props;
    return (
      <RowContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hover={highlightRowId === rowHoverId}
        {...rest}
      />
    );
  }
}
