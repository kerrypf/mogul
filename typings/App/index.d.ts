import * as React from "react";

type renderToJsxFn = () => JSX.Element

type RouteInfo = {
  name: string;
  children?: Array<RouteInfo>;
  path?: string;
  render?: renderToJsxFn
  icon: string | JSX.Element
}

type AppProps = {
  children?: renderToJsxFn,
  footer: any;
  header: any;

  routes: Array<RouteInfo>
}

export default class App extends React.Component<AppProps> {

}