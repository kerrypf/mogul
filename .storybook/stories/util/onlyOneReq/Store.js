import { action, observable } from "mobx";
import { onlyOneReq } from "../../../../src/index";

const mock = delay => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        data: 222
      });
    }, delay);
  });
};

class Store {

  @observable props = null;

  constructor(props){
    this.props = props
  }

  @action.bound
  @onlyOneReq("creatingRep")
  createRep(form) {
    if (!form) return;

    return mock(Math.random() * 1000 + 200)
  }
}

export default Store
