import { observable, action } from "mobx";
import { notification } from "antd";
class Configuration {
  @observable fullPageLoading = false;

  @observable fullScreen = false;

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
  pagination = {
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

  @observable confirmComposeProps = {};

  @observable localStorageKeyPrefix = "_MOGUL_";

  popupContext = null;

  @action.bound
  config({
    messageOptions = {},
    sider = {},
    pagination = {},
    fullScreen = this.fullScreen,
    popContext = this.popupContext,
    tableProps = this.tableProps,
    confirmComposeProps = this.confirmComposeProps
  } = {}) {
    this.messageOptions = {
      ...this.messageOptions,
      ...messageOptions
    };

    this.sider = {
      ...this.sider,
      ...sider
    };

    this.pagination = {
      ...this.pagination,
      ...pagination
    };

    this.fullScreen = fullScreen;

    this.popupContext = popContext;

    this.tableProps = {
      ...this.tableProps,
      ...tableProps
    };

    this.confirmComposeProps = {
      ...this.confirmComposeProps,
      ...confirmComposeProps
    }
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
}

const configuration = new Configuration();

configuration.message.success = configuration.message_success;

configuration.message.error = configuration.message_error;

configuration.message.info = configuration.message_info;

export default configuration;
