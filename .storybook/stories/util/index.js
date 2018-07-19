import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Spin, ContentLoader, Card, onlyOneReq } from "../../../src";

storiesOf("工具", module).add("加载", () => (
  <div>
    <Spin size={ 50 }/><Spin size={ 40 }/><Spin size={ 30 }/><Spin size={ 20 }/>

    <div>内容加载</div>
    {/*<ContentLoader width={ 800 } height={ 400 }/>*/}

    <Card loadingTemplate={ "list" } loading={ true } style={ { height: 300, margin: 15 } }>
    <div style={ { height:300,width: 600 } }>
    2222
    </div>
    </Card>
  </div>
));
//  .add("从服务器获取数据", () => <GetDataFromRemote/>)
//  .add("子表", () => <WithSubTable/>)
//  .add("拖拽表格行", () => <DraggableTable/>)
