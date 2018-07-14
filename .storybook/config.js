import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withConsole } from '@storybook/addon-console';

const ThemeProviderWrap = (storyFn, context) => <div>{withConsole()(storyFn)(context)}</div>;

addDecorator(ThemeProviderWrap);

function loadStories() {
  require("./stories/form/index");
  require("./stories/appPage/index");
  require("./stories/table/index");
}

configure(loadStories, module);
