import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { App, configuration, Card, NavLink } from "../../../src/index";

const keepParamsVisit = url => {
  configuration.push(url);
};

@withRouter
class ShowRouteParamsInfo extends Component {
  render() {
    return <span>{this.props.location.search} </span>;
  }
}
const routes = [
  {
    path: "/A",
    render: () => {
      return (
        <Card>
          <button
            onClick={() => {
              keepParamsVisit("/B");
            }}>
            到Page B
          </button>

          <NavLink to={"/B"}>到页面B</NavLink>
          <ShowRouteParamsInfo />
        </Card>
      );
    },
    name: "页面A",
    icon: "gift"
  },
  {
    path: "/B",
    render: () => {
      return (
        <Card>
          <button
            onClick={() => {
              keepParamsVisit({
                pathname: "/A",
                state: {}
              });
            }}>
            到Page A
          </button>

          <button
            onClick={() => {
              keepParamsVisit({
                pathname: "/c",
                state: {}
              });
            }}>
            去不存在的页面
          </button>
          <ShowRouteParamsInfo />
        </Card>
      );
    },
    name: "页面B",
    icon: "gift"
  },
  {
    type: "redirect",
    to: "/A"
  }
];

export default class extends Component {
  componentDidMount() {
    configuration.config({
      fixQueryParams: {
        page: 1,
        size: 20
      }
    });
  }

  componentWillUnmount() {
    configuration.config({
      fixQueryParams: null
    });
  }

  render() {
    return (
      <div>
        <App routes={routes} />
      </div>
    );
  }
}
