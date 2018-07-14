import { observable, action, computed } from "mobx";

export default class TableStore {
  @observable props = null;

  constructor(_) {
    this.props = _;
  }

  @computed.struct
  get columns() {
    return this.props.columns;
  }

  @computed
  get bordered() {
    return this.props.bordered;
  }

  @computed
  get viewData() {
    return this.props.data;
  }

  @computed
  get rowKey() {
    return this.props.rowKey;
  }

  @computed
  get scrollY() {
    return this.props.scrollY ? this.props.scrollY : undefined;
  }

  @computed.struct
  get header() {
    let header = [];
    this.columns.forEach(column => {
      header.push(column);
    });

    return header;
  }
}
