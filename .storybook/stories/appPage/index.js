import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import LotOfPages from "./LotOfPages";
import SimpleApp from "./SimpleApp"
import LoadingOverlay from "./LoadingOverlay"
storiesOf("App", module)
  .add("简单例子", () => <SimpleApp />)
  .add("全屏加载", () => <LoadingOverlay/>)
  .add("非常多的页面", () => <LotOfPages/>)
