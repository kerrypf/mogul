import * as React from "react";

type TagProps = {
  theme: "primary" | "default",
  size: "small" | "middle" | "large",
  closable: boolean,
  onClose: Function,
}

export default class Tag extends React.Component<TagProps> {
  static defaultProps : {
    flex: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    theme: "default",
    size: "middle",
    closable: false,
    overflow: "auto"
  };
}