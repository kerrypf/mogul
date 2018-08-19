import React, { Component } from "react";
import { Provider } from "mobx-react";
import { decorate } from "./util";

function getDecorator(getProviderStore) {
  return Target => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = getProviderStore(this.props) || {};
      }

      render() {
        return (
          <Provider {...this.state}>
            <Target {...this.props} />
          </Provider>
        );
      }
    };
  };
}

export const createProvider = function() {
  const decorator = getDecorator(arguments[0]);
  return decorate(true, decorator, arguments);
};
