import { observable, action, computed, toJS } from "mobx";
import configuration from "../configuration";

export default class TableStore {
  @observable props = null;

  @observable unControlPage = 1;

  @observable unControlSize = 10;

  @observable rowMeasureMap = new Map();

  @observable headerMeasure = null;

  mainScrollContainer = null;

  fixLeftContainer = null;

  fixRightContainer = null;

  @observable highlightRowId = null;

  @observable scrollTopPos = 0;

  @observable scrollLeftPos = 0;

  constructor(_) {
    this.props = _;
  }

  @computed.struct
  get columnTypes() {
    let fixLeftColumns = [];

    let fixRightColumns = [];

    let middleColumns = [];
    this.props.columns.forEach(column => {
      if (column) {
        if (column.width && column.width !== "auto") {
          switch (column.fixed) {
            case "left":
              fixLeftColumns.push(column);
              break;
            case "right":
              fixRightColumns.push(column);
              break;
            default:
              middleColumns.push(column);
          }
        } else {
          middleColumns.push(column);
        }
      }
    });

    return {
      fixLeftColumns,
      fixRightColumns,
      middleColumns
    };
  }

  @computed.struct
  get columns() {
    return [
      ...this.columnTypes.fixLeftColumns,
      ...this.columnTypes.middleColumns,
      ...this.columnTypes.fixRightColumns
    ];
  }

  @computed
  get fixedLeftColumns() {
    return this.columnTypes.fixLeftColumns;
  }

  @computed
  get fixedRightColumns() {
    return this.columnTypes.fixRightColumns;
  }

  @computed
  get fixedLeftColumnsWidth() {
    return this.fixedLeftColumns.map(({ width }) => width).reduce((a, b) => a + b, 0);
  }

  @computed
  get fixedRightColumnsWidth() {
    return this.fixedRightColumns.map(({ width }) => width).reduce((a, b) => a + b, 0);
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

  @computed
  get showHeader() {
    return this.props.showHeader;
  }

  @computed
  get headerMinHeight() {
    return this.props.headerMinHeight;
  }

  @computed
  get size() {
    if (this.props.size) {
      return this.props.size;
    }

    return configuration.tableProps.size;
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
    return this.props.pagination !== true;
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
    return toJS(this.props.pagination);
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

  @action.bound
  updateRowMeasure(rowData, contentRect) {
    this.rowMeasureMap.set(rowData[this.rowKey], contentRect.bounds);
  }

  @action.bound
  updateHeaderMeasure(contentRect) {
    this.headerMeasure = contentRect.bounds;
  }

  @action.bound
  updateScrollLeftPos(scrollLeftPos) {
    this.scrollLeftPos = scrollLeftPos;
  }

  @action.bound
  updateScrollTopPos(scrollTopPos) {
    this.scrollTopPos = scrollTopPos;

    this._updateContainerPos(this.mainScrollContainer, "top");
    this._updateContainerPos(this.fixLeftContainer, "top");
    this._updateContainerPos(this.fixRightContainer, "top");
  }

  @action.bound
  registryContainer(type, dom) {
    switch (type) {
      case "mainScrollContainer":
        this.mainScrollContainer = dom;
        break;
      case "fixLeftContainer":
        this.fixLeftContainer = dom;
        break;
      case "fixRightContainer":
        this.fixRightContainer = dom;
        break;
      default:
        return null;
    }
  }

  @action.bound
  _updateContainerPos(dom, type) {
    if (!dom) return;
    if (type === "top") {
      if (dom.scrollTop !== this.scrollTopPos) {
        dom.scrollTop = this.scrollTopPos;
      }
    }
  }

  @action.bound
  setHighlightRowId(id) {
    this.highlightRowId = id;
  }
}
