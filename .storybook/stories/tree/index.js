import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import SimpleDemo from "./SimpleDemo";

storiesOf("tree", module)
  .add("营销分类树", () => <SimpleDemo />)

;