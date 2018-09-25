import React, { Component } from "react";
import { Provider } from "mobx-react";
import Store from "./Store";
import RepForm from "./RepForm";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: new Store(this.props)
    };
  }

  render() {
    const store = this.state.store;
    return (
      <Provider store={store}>
        <RepForm />
      </Provider>
    );
  }
}
