import * as React from "react";

type RouteLinkProps = {
  to: string | Object;
};

export class NavLink extends React.Component<RouteLinkProps> {}

export class Redirect extends React.Component<RouteLinkProps> {}
