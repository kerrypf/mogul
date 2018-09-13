import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import SimpleDemo from "./SimpleDemo";
import DynamicDemo from "./DynamicDemo";
import AssoDemo from "./AssoDemo";
import FormClearUsage from "./FormClearUsage";
import TabIndex from "./TabIndex"
storiesOf("表单", module)
  .add("简单例子", () => <SimpleDemo />)
  .add("表单的添加和删除", () => <DynamicDemo/>)
  .add("表单的联动", () => <AssoDemo/>)
  .add("清空组件", () => <FormClearUsage/>)
  .add("组件focus", () => <TabIndex/>)
;