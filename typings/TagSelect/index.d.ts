import * as React from "react";

type TagOption = {
  value: any;
  label: boolean | number | string;
};

type TagSelectProps = {
  value: Array<TagOption>;
  onChange: Function;
  children: () => JSX.Element;
};

export default class extends React.Component<TagSelectProps> {
  static defaultProps: {
    value: [];
  };
}
