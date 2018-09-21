import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Image, Script } from "../../../src/"

storiesOf("Script", module)
  .add("加载jquery", () => <div>
    <Script
      url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
    >
      { () => <div>jquery get it</div> }
    </Script>
  </div>)
;