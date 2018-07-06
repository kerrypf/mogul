import styled, { css, keyframes } from "styled-components";
import { Item, Flex } from "../../utils";

const fadeIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const LabelItem = styled(Item)`
  text-align: right;

  ${props =>
    props.required
      ? css`
          &:before {
            display: inline-block;
            margin-right: 1px;
            content: "*";
            line-height: 1;
            font-size: 14px;
            color: #f5222d;
          }
        `
      : ""};
`;

export const FormFieldContainer = styled(Flex).attrs({
  alignItems: props => (props.alignItems ? props.alignItems : "center")
})`
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FormField = styled(Item).attrs({
  flex: props => (props.flex ? props.flex : "1"),
  hasError: props => !!props.hasError
})`
  position: relative;
  ${props =>
    props.hasError
      ? css`
.ant-input {
    border-color: red !important;
}
&::after {
    content: '${props => props.message}';
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: -20px;
    left: 0;
    z-index: 2;
    animation: ${fadeIn} .3s;
  }
`
      : ""};
`;
