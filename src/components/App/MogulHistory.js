import { Component } from "react";
import { withRouter } from "react-router-dom";
import configuration from "../configuration"

@withRouter
export default class extends Component{

  componentDidMount(){
    configuration.__connectHistory(this);
  }

  componentWillUnmount(){
    configuration.__connectHistory(null);
  }

  render(){
    return null
  }
}