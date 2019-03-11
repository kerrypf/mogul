import { Image } from "../../../src";
import React from "react";

export default class extends React.Component {
  state = {
    src: "http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg"
  };

  toggleImg = () => {
    this.setState({
      src:
        this.state.src === "http://img0.ph.126.net/rCDLXbkA-qpz5-hn1LRa-Q==/6631979260838506065.jpg"
          ? "http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg"
          : "http://img0.ph.126.net/rCDLXbkA-qpz5-hn1LRa-Q==/6631979260838506065.jpg"
    });
  };

  render() {
    return (
      <div style={{ paddingTop: 1200 }}>
        <Image preview={true} width={200} height={"auto"} lazyLoad src={this.state.src} />
        <button onClick={this.toggleImg}>改变图片</button>
      </div>
    );
  }
}
