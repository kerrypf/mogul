import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import SimpleDemo from "./SimpleDemo";
import DynamicDemo from "./DynamicDemo";

storiesOf("表单", module)
  .add("简单例子", () => <SimpleDemo />)
  .add("表单的添加和删除", () => <DynamicDemo/>);