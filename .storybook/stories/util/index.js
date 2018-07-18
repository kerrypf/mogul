import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Spin, ContentLoader } from "../../../src";
// sandbox https://codesandbox.io/s/l96rjj4z07
storiesOf("工具", module)
  .add("加载", () => <div >
    <Spin size={ 50 }/><Spin size={ 40 }/><Spin size={ 30 }/><Spin size={ 20 }/>

    <div>内容加载</div>
    <ContentLoader width={ 800 } height={ 400 }/>
  </div>)
//  .add("从服务器获取数据", () => <GetDataFromRemote/>)
//  .add("子表", () => <WithSubTable/>)
//  .add("拖拽表格行", () => <DraggableTable/>)
;
