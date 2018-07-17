import { observable, action, computed } from "mobx";

export default class TableStore {
  @observable props = null;

  @observable unControlPage = 1;

  @observable unControlSize = 10;

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

  @computed.struct
  get viewData() {
    if (!this.useControlPagination) {
      return this.props.data.slice(
        (this.unControlPage - 1) * this.unControlSize,
        this.unControlPage * this.unControlSize
      );
    }
    return this.props.data;
  }

  @computed
  get unControlTotal() {
    return this.props.data.length;
  }

  @computed
  get rowKey() {
    return this.props.rowKey;
  }

  @computed
  get scrollY() {
    return this.props.scrollY ? this.props.scrollY : undefined;
  }

  @computed
  get scrollX() {
    return this.props.scrollX ? this.props.scrollX : undefined;
  }

  @computed
  get headerHeight() {
    return this.props.headerHeight;
  }

  @computed
  get rowHeight() {
    return this.props.rowHeight;
  }

  @computed
  get fixHeader() {
    return this.props.fixHeader;
  }

  @computed.struct
  get header() {
    let header = [];
    this.columns.forEach(column => {
      header.push(column);
    });

    return header;
  }

  @computed
  get useControlPagination() {
    return typeof this.props.pagination !== "boolean";
  }

  @computed
  get pagination() {
    if (this.props.pagination === false) return false;
    if (this.props.pagination === true)
      return {
        pageSize: this.unControlSize,
        onChange: this.unControlPageChange,
        onShowSizeChange: this.unControlPageSizeChange
      };
    // 用户设置了 pagination, 故所有参数 按照 antd 设置
    return this.props.pagination;
  }

  @computed
  get subTableKey() {
    return this.props.subTableKey;
  }

  @computed
  get rowSelectKey() {
    return this.props.rowSelectKey;
  }

  @computed
  get draggable() {
    return this.props.draggable;
  }

  @action.bound
  updateProps(newProps) {
    this.props = newProps;
  }

  @action.bound
  unControlPageChange(page, pageSize) {
    this.unControlSize = pageSize;
    this.unControlPage = page;
  }

  @action.bound
  unControlPageSizeChange(current, size) {
    this.unControlSize = size;
    // 不论第几页, 返回第一页;
    this.unControlPage = 1;
  }
}
