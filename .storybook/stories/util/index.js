import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { Spin, ContentLoader, Card, onlyOneReq } from "../../../src";
import { observable, action, configure } from "mobx";

configure({
  enforceActions: true
});

class Test {
  @observable total = 0;
  @observable repExistChecked = false;

//  @observable loading = false;
  //
  constructor(props) {
//    console.log(this.repExistChecked, 222);
    this.repExistChecked = true;
  }

  @action.bound
  @onlyOneReq("loading")
  test() {
    return new Promise(res => {
      setTimeout(
        action("get-total", () => {
          this.total = this.total + 1;
          console.log(this.total);
          res();
        }),
        1000
      );
    });
  }
}
let t1 = new Test().test();

//let t2 = new Test();

//t1.test()
setTimeout(() => {
  //  t.test();
  new Test().test();
}, 2000);

// sandbox https://codesandbox.io/s/l96rjj4z07
storiesOf("工具", module).add("加载", () => (
  <div>
    {/*<Spin size={ 50 }/><Spin size={ 40 }/><Spin size={ 30 }/><Spin size={ 20 }/>*/}

    {/*<div>内容加载</div>*/}
    {/*/!*<ContentLoader width={ 800 } height={ 400 }/>*!/*/}

    {/*<Card loadingTemplate={ "list" } loading={ true } style={ { height: 300, margin: 15 } }>*/}
    {/*<div style={ { height:300,width: 600 } }>*/}
    {/*2222*/}
    {/*</div>*/}
    {/*</Card>*/}
  </div>
));
//  .add("从服务器获取数据", () => <GetDataFromRemote/>)
//  .add("子表", () => <WithSubTable/>)
//  .add("拖拽表格行", () => <DraggableTable/>)
