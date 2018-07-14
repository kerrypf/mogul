import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import SimpleTable from "./SimpleTable";

// sandbox https://codesandbox.io/s/l96rjj4z07
storiesOf("Table", module)
  .add("简单表格", () => <SimpleTable />);
