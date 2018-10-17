type SiderParams = {
  collapse?: boolean;
  visible?: boolean;
  title?: string | JSX.Element;
  logo?: null | string | JSX.Element;
  root?: string;
};

type TableProps = {
  size: "small" | "large" | "middle";
};

type ConfigProps = {
  messageOptions?: Object;
  sider?: SiderParams;
  pagination?: Object;
  fullScreen?: boolean;
  popContext?: null | JSX.Element;
  tableProps?: TableProps;
  confirmComposeProps?: object;
  fixQueryParams?: Object;
};

type RouteHistory = {
  location: Object;
  match: Object;
  history: Object;
};

type MessageMethods = {
  success: (msg: string, options?: Object) => void;
  error: (msg: string, options?: Object) => void;
  info: (msg: string, options?: Object) => void;
};

export  declare namespace configuration {
  let fullPageLoading: boolean;

  let fullScreen: boolean;

  let fixQueryParams: null | Object;

  let messageOptions: Object;

  let sider: SiderParams;

  let _pagination: Object;

  let tableProps: TableProps;

  let localStorageKeyPrefix: string;

  let popupContext: JSX.Element | null;

  function config(configProps: ConfigProps): void;

  let message: MessageMethods;

  function message_info(msg: string, options?: Object): void;

  function message_success(msg: string, options?: Object): void;

  function message_error(msg: string, options?: Object): void;

  function collapseSider(): void;

  function expandSider();

  function showFullPageLoading();

  function hideFullPageLoading();

  function enterFullScreen();

  function exitFullScreen();

  function setLocalStorageKeyPrefix(prefix: string): void;

  function setPopupContext(popCtx: null | JSX.Element);

  function getHistory(): RouteHistory;

  function push(url: string | Object, state?: any);

  function replace(url: string | Object, state?: any);
}
