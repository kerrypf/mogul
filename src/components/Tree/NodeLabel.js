import styled, { css } from "styled-components";
import { Item } from "../../utils/grid";

export default styled(Item)`
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0 8px;
  transition: background-color 0.3s;

  ${props =>
    props.selected
      ? css`
          background-color: #1890ff;
          color: #efefef;
        `
      : css`
          &:hover {
            background-color: #efefef;
          }
        `};
`;
