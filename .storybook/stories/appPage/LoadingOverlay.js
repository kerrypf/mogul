import React, { Component } from "react";
import { App, configuration } from "../../../src/index";

import routes from "./routes";



export default class  extends Component{

  componentDidMount(){
    configuration.showFullPageLoading();


    setTimeout( () => configuration.hideFullPageLoading() , 2000 )
  }


  componentWillUnmount(){
    configuration.hideFullPageLoading();
  }
  render(){
    return <div>
      <App >
        { () => routes }
      </App>
    </div>
  }
}