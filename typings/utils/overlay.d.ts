import * as React from "react";

declare class OverlayStore {
  show: boolean;
  overlay: typeof React.Component;
  overlayProps: overlayProps;

  overlayContent: JSX.Element | Function;
  offset: number;

  closeOverlay(): void;
  showOverlay(): void;
  forceCloseOverlay(): void;
  forceShowOverlay(): void;
}

type overlayProps = {
  children: JSX.Element;
  trigger: "click" | "hover";
  overlay: JSX.Element | Function;
  placement: "bottom" | "top" | "left" | "right";
  placementVariation?: "start" | "end";
  offset: number;
  arrow: boolean;
  arrowSize?: number;
  arrowColor?: string;
  autoClose?: boolean;
  hoverDelay: number;
  animation?: boolean;
  zIndex: number | "auto";
  flip: boolean;
  disabled: boolean;
  visible?: boolean;
  onVisibleChange: Function;
};

type overlayState = {
  overlay: typeof OverlayStore;
};

export class Overlay extends React.Component<overlayProps, overlayState> {
  static defaultProps: {
    trigger: "click";
    placement: "bottom";
    offset: 8;
    arrow: false;
    arrowSize: 18;
    arrowColor: "#fff";
    autoClose: false;
    hoverDelay: 200;
    animation: false;
    zIndex: "auto";
    flip: true;
    disabled: false;
    onVisibleChange: () => true;
  };

  getOverlayApi(): typeof OverlayStore;
}
