import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import SimpleDemo from "./SimpleDemo";


storiesOf("TagSelect", module)
  .add("简单例子", () => <SimpleDemo />)

;