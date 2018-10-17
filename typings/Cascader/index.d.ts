import * as React from "react";

type renderToJsxFn = () => JSX.Element;

type Option = {
  label: string;
  value: string | number | any;
  children?: Array<Option>;
};

type CascaderProps = {
  options: Array<Option>;
  searchOptions: Array<Option>;
  value: Array<string>;
  onChange: Function;
  style: React.CSSProperties;
  placeholder?: string;
  disabled: boolean;
  loading?: boolean;
  showSearch?: boolean;
  onSearch: renderToJsxFn;
  onSearchSet: Function;
};

type CascaderState = {
  expandKeys: Array<string>;
  searchStr: string;
};

export default class Cascader extends React.Component<CascaderProps, CascaderState> {
  state: {
    expandKeys: [];
    searchStr: "";
  };

  static defaultProps: {
    style: {};
    value: [];
    loading: false;
    showSearch: false;
    searchOptions: [];
  };
}
