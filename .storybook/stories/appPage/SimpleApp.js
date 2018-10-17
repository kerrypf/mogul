import React, { Component } from "react";
import { App, configuration } from "../../../src/index";
import Logo from "../image/logo.png";
import routes from "./routes";
import AppHeader from "./AppHeader";

configuration.config({
  sider: {
    logo: Logo
  },
//  fullScreen: true
});

export default class  extends Component{

  componentDidCatch(error, info){
    console.log(error , info);
  }

  render(){
    return <div>
      <App
        fixHeader={ true }
        header={ <AppHeader routes={ {
          pages: routes.filter( route => route.type !== "redirect" )
        } }>hhh</AppHeader> }
        footer={ <div><a>@Mogul/components</a></div> }
        routes={ routes }
      />
    </div>
  }
}