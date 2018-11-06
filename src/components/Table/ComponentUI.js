import React, { Component, PureComponent } from "react";
import { inject, observer } from "mobx-react";
import styled, { css } from "styled-components";
import { SortableHandle } from "react-sortable-hoc";
import { ifProp } from "styled-tools";
import { Transition } from "react-spring";

import { Flex, Item } from "../../utils/grid";
import variable from "../variable";
import { Spin } from "../Indicator";
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

  &.__mogul_table_dragging {
    cursor: grabbing;
  }
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

const StyledDragIcon = styled.svg`
  transition: fill 0.3s;
  cursor: move;
  width: 28px;
  height: 28px;
  display: inline-block;
  &:hover {
    fill: ${variable.primary};
  }
`;

const DragElement = (props = {}) => (
  <StyledDragIcon viewBox="0 0 1024 1024" version="1.1" {...props}>
    <path
      d={
        "M298.666667 810.666667v-85.333334h85.333333v85.333334H298.666667m170.666666 0v-85.333334h85.333334v85.333334h-85.333334m170.666667 0v-85.333334h85.333333v85.333334h-85.333333m-341.333333-170.666667v-85.333333h85.333333v85.333333H298.666667m170.666666 0v-85.333333h85.333334v85.333333h-85.333334m170.666667 0v-85.333333h85.333333v85.333333h-85.333333m-341.333333-170.666667V384h85.333333v85.333333H298.666667m170.666666 0V384h85.333334v85.333333h-85.333334m170.666667 0V384h85.333333v85.333333h-85.333333M298.666667 298.666667V213.333333h85.333333v85.333334H298.666667m170.666666 0V213.333333h85.333334v85.333334h-85.333334m170.666667 0V213.333333h85.333333v85.333334h-85.333333z"
      }
    />
  </StyledDragIcon>
);

export const DragHandle = SortableHandle(DragElement);

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

export class Loader extends PureComponent {
  render() {
    const { loading, loadingDelay } = this.props;
    return (
      <Transition
        items={loading}
        from={{ showSpin: 0 }}
        enter={{ showSpin: 1 }}
        leave={{ showSpin: 0 }}
        delay={loadingDelay}>
        {show =>
          show &&
          (({ showSpin }) => {
            let result = loading && showSpin > 0;

            return result ? (
              <LoadingOverlay>
                <Spin size={50} />
              </LoadingOverlay>
            ) : null;
          })
        }
      </Transition>
    );
  }
}
