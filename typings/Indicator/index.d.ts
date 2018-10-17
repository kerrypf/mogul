import * as React from "react";

type SpinProps = {
  size: number;
  color: string;
  style: React.CSSProperties;
  pause: boolean;
  value: number;
};

export class Spin extends React.Component<SpinProps> {
  static defaultProps: {
    size: 24;
    color: "#1890ff";
    style: {};
    pause: false;
    value: 0;
  };
}

type ContentProps = {
  rectUnitHeight: number;
  loopOffset: Array<number>;
  verticalGap: number;
};

export class ContentLoader extends React.Component<ContentProps> {
  static defaultProps: {
    rectUnitHeight: 15;
    loopOffset: [10, 75, 75, 45];
    verticalGap: 10;
  };
}
