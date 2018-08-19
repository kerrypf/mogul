import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { createProvider } from "../../../src/index";

@inject("date")
@observer
class DateSpan extends Component {
  render() {
    return <div>{this.props.date.toString()}</div>;
  }
}

@createProvider(props => ({
  date: new Date()
}))
export default class extends Component {
  render() {
    return (
      <div>
        <DateSpan />
      </div>
    );
  }
}
