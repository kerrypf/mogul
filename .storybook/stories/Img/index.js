import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "../../../src/";
import ImgWithLazyLoad from "./ImgWithLazyLoad";

storiesOf("Image", module)
  .add("simple", () => (
    <div>
      <Image
        preview={true}
        width={200}
        height={"auto"}
        src={
          "http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg"
        }
      />
    </div>
  ))
  .add("lazy load", () => <ImgWithLazyLoad />);
