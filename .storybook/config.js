import React from "react";
import "babel-polyfill";
import { configure, addDecorator } from "@storybook/react";
import { configure as MobxConfig } from "mobx";

MobxConfig({
  enforceActions: "observed"
});

const ThemeProviderWrap = (storyFn, context) => <div>{storyFn(context)}</div>;

addDecorator(ThemeProviderWrap);

function loadStories() {
  require("./stories/form/index");
  require("./stories/appPage/index");
  require("./stories/table/index");
  require("./stories/util/index");
  require("./stories/cascader/index");
  require("./stories/Query/index");
  require("./stories/tagSelect");
  require("./stories/tree");
  require("./stories/Img");
  require("./stories/ASyncScript");
}

configure(loadStories, module);
