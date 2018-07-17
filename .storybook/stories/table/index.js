import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import SimpleTable from "./SimpleTable";
import GetDataFromRemote from "./GetDataFromRemote";
import WithSubTable from "./WithSubTable";
import DraggableTable from "./DraggableTable";
// sandbox https://codesandbox.io/s/l96rjj4z07
storiesOf("Table", module)
  .add("简单表格", () => <SimpleTable />)
  .add("从服务器获取数据", () => <GetDataFromRemote/>)
  .add("子表", () => <WithSubTable/>)
  .add("拖拽表格行", () => <DraggableTable/>)
;
