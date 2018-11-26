import * as React from "react";

type renderToJsxFn = () => JSX.Element;

type columnMode = {
  type: "sort";
};

type Column = {
  title?: string | number | JSX.Element | renderToJsxFn;
  key: string;
  render: renderToJsxFn;
  width?: string | number;
  minWidth?: number;
  sort?: boolean;
  cellContainerProps?: React.CSSProperties;
  headerContainerProps?: React.CSSProperties;
  headerMode?: columnMode;
  visible?: boolean;
  fixed?: "left" | "right";
};

type dragProps = {
  onSortEnd: (startIndex, endIndex) => void;
};

type TableProps = {
  style?: React.CSSProperties;
  data: Array<Object>;
  fluid: boolean;
  columns: Array<Column>;
  bordered?: boolean;
  rowKey: string;
  fixHeader: boolean;
  headerMinHeight?: string | number;
  headerHeight?: number | "auto";
  rowHeight?: number | "auto";
  scrollY: number | "auto";
  scrollX: number | "auto";
  pagination: boolean | object;
  loading: boolean;
  subTableKey?: string;
  subTableRender?: renderToJsxFn;
  noDataRender: renderToJsxFn;
  draggable: false | dragProps;
  showHeader: boolean;
  size: "small" | "middle" | "large";
  loadingDelay: number;
};

declare class TableStore {
  viewData: Array<Object>;
  resetTableState: Function;
}

export default class Table extends React.Component<TableProps, {}> {
  static defaultProps: {
    fluid: false;
    bordered: true;
    scrollY: "auto";
    scrollX: "auto";
    rowHeight: "auto";
    headerHeight: "auto";
    fixHeader: true;
    pagination: true;
    loading: false;
    draggable: false;
    showHeader: true;
    noDataRender: renderToJsxFn;
    loadingDelay: 300;
  };

  state: {};

  getTableApi(): typeof TableStore;
}
