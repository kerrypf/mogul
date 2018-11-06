import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Spin, Flex, Item, Card, onlyOneReq } from "../../../src";
import MemorizeDemo from "./memorize";
import CreateModal from "./createModal";
import CreateProvider from "./createProvider";
import LastReqPage from "./lastReq";
import OnlyOneReqPage from "./onlyOneReq";
import SpinDemo from "./SpinDemo";

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
  .add("memorize", () => <MemorizeDemo />)
  .add("createModal", () => <CreateModal />)
  .add("createProvider", () => <CreateProvider />)
  .add("lastReq", () => <LastReqPage />)
  .add("onlyOneReq", () => <OnlyOneReqPage />);
