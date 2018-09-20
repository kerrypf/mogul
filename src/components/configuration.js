import { observable, action, computed, toJS } from "mobx";
import { notification } from "antd";
import queryString from "query-string";

class Configuration {
  @observable
  fullPageLoading = false;

  @observable
  fullScreen = false;

  fixQueryParams = null;

  @observable
  messageOptions = {
    placement: "topRight",
    type: "info",
    key: null,
    defaultType: "success"
  };

  @observable
  sider = {
    collapse: false,
    visible: true,
    title: "Mogul",
    logo: null,
    root: "/"
  };

  @observable
  _pagination = {
    pageSize: 10,
    pageSizeOptions: ["10", "20", "30"],
    size: "small",
    showQuickJumper: true,
    showSizeChanger: true
  };

  @observable
  tableProps = {
    size: "small"
  };

  @observable
  _confirmComposeProps = {};

  @observable
  localStorageKeyPrefix = "_MOGUL_";

  popupContext = null;

  @computed
  get confirmComposeProps() {
    return toJS(this._confirmComposeProps);
  }

  @computed
  get pagination() {
    return toJS(this._pagination);
  }

  @action.bound
  config({
    messageOptions = {},
    sider = {},
    pagination = {},
    fullScreen = this.fullScreen,
    popContext = this.popupContext,
    tableProps = {},
    confirmComposeProps = {},
    fixQueryParams = this.fixQueryParams
  } = {}) {
    this.messageOptions = {
      ...this.messageOptions,
      ...messageOptions
    };

    this.sider = {
      ...this.sider,
      ...sider
    };

    this._pagination = {
      ...this._pagination,
      ...pagination
    };

    this.fullScreen = fullScreen;

    this.popupContext = popContext;

    this.tableProps = {
      ...this.tableProps,
      ...tableProps
    };

    this._confirmComposeProps = {
      ...this._confirmComposeProps,
      ...confirmComposeProps
    };

    this.fixQueryParams = fixQueryParams;
  }

  /**
   *
   * @param message
   * @param merOptions
   * @returns { Object }
   * @private
   */
  @action.bound
  _convertToNotificationOptions(message, merOptions = {}) {
    let notificationParams = {
      placement: this.messageOptions.placement,
      key: this.messageOptions.key,
      message,
      ...merOptions
    };

    if (!notificationParams.key) {
      notificationParams.key = notificationParams.message;
    }
    return notificationParams;
  }

  @action.bound
  message(msg = "", options = {}) {
    switch (this.messageOptions.defaultType) {
      case "info":
        return this.message_info(msg, options);
      case "error":
        return this.message_error(msg, options);
      case "success":
      default:
        return this.message_success(msg, options);
    }
  }

  @action.bound
  message_info(msg, options) {
    notification.info(this._convertToNotificationOptions(msg, options));
  }

  @action.bound
  message_success(msg, options) {
    notification.success(this._convertToNotificationOptions(msg, options));
  }

  @action.bound
  message_error(msg, options) {
    notification.error(this._convertToNotificationOptions(msg, options));
  }

  @action.bound
  collapseSider() {
    this.sider = {
      ...this.sider,
      collapse: true
    };
  }

  @action.bound
  expandSider() {
    this.sider = {
      ...this.sider,
      collapse: false
    };
  }

  @action.bound
  showFullPageLoading() {
    this.fullPageLoading = true;
  }

  @action.bound
  hideFullPageLoading() {
    this.fullPageLoading = false;
  }

  @action.bound
  enterFullScreen() {
    this.fullScreen = true;
  }

  @action.bound
  exitFullScreen() {
    this.fullScreen = false;
  }

  @action.bound
  setLocalStorageKeyPrefix(prefix) {
    this.localStorageKeyPrefix = prefix;
  }

  @action.bound
  setPopupContext(context) {
    this.popupContext = context;
  }

  @action.bound
  __connectHistory(__historyComp) {
    this.__historyComp = __historyComp;
  }

  @action.bound
  getHistory() {
    if (!this.__historyComp) {
      return null;
    }
    return this.__historyComp.props.history;
  }

  _getUrlObject(url, state) {
    let urlObject = null;
    if (typeof url === "string") {
      urlObject = queryString.parseUrl(url);

      urlObject = {
        search: queryString.stringify({
          ...urlObject.query,
          ...this.fixQueryParams
        }),
        pathname: urlObject.url,
        hash: urlObject.hash,
        state
      };
    } else {
      urlObject = {
        ...url,
        search: queryString.stringify(Object.assign({}, url.search, this.fixQueryParams))
      };
    }

    return urlObject;
  }

  @action.bound
  push(url, state) {
    let history = this.getHistory();
    if (!this.fixQueryParams) {
      return history.push(url, state);
    }

    return history.push(this._getUrlObject(url, state));
  }

  @action.bound
  replace(url, state) {
    let history = this.getHistory();
    if (!this.fixQueryParams) {
      return history.replace(url, state);
    }

    return history.replace(this._getUrlObject(url, state));
  }
}

const configuration = new Configuration();

configuration.message.success = configuration.message_success;

configuration.message.error = configuration.message_error;

configuration.message.info = configuration.message_info;

export default configuration;
