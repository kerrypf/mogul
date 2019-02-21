import * as React from "react";


type RenderJsxFn = () => JSX.Element

type CardProps = {
  children: JSX.Element,
  style: React.CSSProperties,
  loading: boolean,
  loadingTemplate?: "spin" | "list",
  renderLoading?: RenderJsxFn,
  keepContent: boolean,
  noCss: boolean
}

export default class Card extends React.Component<CardProps> {
  static defaultProps : {
    style: {},
    loading: false,
    keepContent: false,
    noCss: false
  };
}
