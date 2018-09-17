import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import LotOfPages from "./LotOfPages";
import SimpleApp from "./SimpleApp"
import LoadingOverlay from "./LoadingOverlay"
import KeepParamsDemo from "./KeepParams";
// sandbox https://codesandbox.io/s/l96rjj4z07
storiesOf("App", module)
  .add("简单例子", () => <SimpleApp />)
  .add("全屏加载", () => <LoadingOverlay/>)
  .add("非常多的页面", () => <LotOfPages/>)
  .add("保持路由query参数", () => <KeepParamsDemo/>)
