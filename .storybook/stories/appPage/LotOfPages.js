import React, { Component } from "react";
import { App, configuration } from "../../../src/index";

const page = ({ name }) => {
  return <div style={{ minHeight: 300, backgroundColor: "#fff" }}>{name}</div>;
};

let routes = [];

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 2) {
    routes.push({
      name: `页面${i}`,
      icon: "gift",
      children: [
        {
          path: `/${i}/0`,
          render: () =>
            page({
              name: `/${i}/0`
            }),
          name: `页面${i}/0`,
          icon: "gift"
        },
        {
          path: `/${i}/1`,
          render: () =>
            page({
              name: `/${i}/1`
            }),
          name: `页面${i}/1`,
          icon: "gift"
        }
      ]
    });
  } else {
    routes.push({
      path: `/${i}`,
      render: () =>
        page({
          name: i
        }),
      name: `页面${i}`,
      icon: "gift"
    });
  }
}
export default class extends Component {
  render() {
    return (
      <div>
        <App>{() => routes}</App>
      </div>
    );
  }
}
