import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Tag as AntTag } from "antd";
import SimpleDemo from "./SimpleDemo";
import { Tag } from "../../../src/"

storiesOf("tag", module)
  .add("tag", () => <div>
    <Tag>这是标签</Tag>
    <Tag theme={ "primary" } onClick={ () => {} }>这是标签</Tag>

    <Tag closable={ true } size={ "small" }>这是标签</Tag>
    <Tag closable={ true } size={ "middle" }>这是标签</Tag>
    <Tag closable={ true } size={ "large" }>这是标签</Tag>

  </div>)
  .add("TagSelect", () => <SimpleDemo />)

;