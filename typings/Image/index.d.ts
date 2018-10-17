import * as React from "react";

type ImageProps = {
  src: string;
  preview: boolean;
  previewSrc?: string;
  zIndex: number;
};

type ImageState = {
  avai: false;
  inPreview: false;
};

export default class Image extends React.Component<ImageProps, ImageState> {
  static defaultProps: {
    preview: false;
    zIndex: 1000;
  };

  state: {
    avai: false;
    inPreview: false;
  };
}
