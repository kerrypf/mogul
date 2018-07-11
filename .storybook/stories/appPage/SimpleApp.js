import React, { Component } from "react";
import { App, configuration } from "../../../src/index";
import Logo from "../image/logo.png";
import routes from "./routes";

configuration.config({
  sider: {
    logo: Logo
  }
});
//
export default class  extends Component{

  componentDidCatch(error, info){
    console.log(error , info);
  }

  render(){
    return <div>
      <App
        header={ <div>hhh</div> }
        footer={ <div><a>@Mogul/components</a></div> }
      >
        { () => routes }
      </App>
    </div>
  }
}