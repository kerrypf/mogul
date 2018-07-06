import React, { Component } from "react";
import { App, configuration } from "../../../src/index";
import Logo from "../image/logo.png";
import routes from "./routes";

configuration.config({
  sider: {
    logo: Logo
  }
});

export default class  extends Component{
  render(){
    return <div>
      <App
        footer={ <div><a>@Mogul/components</a></div> }
      >
        { () => routes }
      </App>
    </div>
  }
}