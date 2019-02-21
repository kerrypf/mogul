import React, { Component, Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Spin, Flex, Item, Card, onlyOneReq, ActionButton } from "../../../src";
import MemorizeDemo from "./memorize";
import CreateModal from "./createModal";
import CreateProvider from "./createProvider";
import LastReqPage from "./lastReq";
import OnlyOneReqPage from "./onlyOneReq";
import SpinDemo from "./SpinDemo";
import CustomSpinDemo from "./CustomSpin";
import styled from "styled-components";

const StyledActionButton = styled(ActionButton)`
  margin: 10px 10px;
`;

function handleOnClick(event) {
  console.log(event.target.innerHTML);
}

storiesOf("工具", module)
  .add("加载", () => (
    <div>
      <Spin size={50} immediate={true} value={50} />
      <Spin size={40} />
      <Spin size={30} />
      <Spin size={20} />

      <div>内容加载</div>
      {/*<ContentLoader width={ 800 } height={ 400 }/>*/}

      <Card
        noCss={false}
        loadingTemplate={"list"}
        loading={true}
        style={{ height: 300, margin: 15 }}>
        <div style={{ height: 300, width: 600 }}>2222</div>
      </Card>

      <Flex style={{ width: 400, height: 400 }} alignItems={"center"} justifyContent={"center"}>
        <Item shrink={0} style={{ backgroundColor: "#efefef", width: 1000, height: 600 }} />
      </Flex>
    </div>
  ))
  .add("spin", () => <SpinDemo />)
  .add("actionButton", () => {
    return (
      <Fragment>
        <StyledActionButton onClick={handleOnClick}>链接按钮</StyledActionButton>

        <StyledActionButton onClick={handleOnClick} disabled={true}>
          链接按钮(禁用)
        </StyledActionButton>

        <StyledActionButton onClick={handleOnClick} title={"因为我调皮所以禁用了"} disabled={true}>
          禁用,有提示
        </StyledActionButton>
      </Fragment>
    );
  })
  .add("memorize", () => <MemorizeDemo />)
  .add("createModal", () => <CreateModal />)
  .add("createProvider", () => <CreateProvider />)
  .add("lastReq", () => <LastReqPage />)
  .add("onlyOneReq", () => <OnlyOneReqPage />)
  .add("自定义spin", () => <CustomSpinDemo />);
