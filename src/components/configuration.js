import { observable, action } from "mobx";
import { notification } from "antd";
class Configuration {
  @observable fullPageLoading = false;

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

  @action.bound
  config({ messageOptions = {}, sider = {} } = {}) {
    this.messageOptions = {
      ...this.messageOptions,
      ...messageOptions
    };

    this.sider = {
      ...this.sider,
      ...sider
    };
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
}

const configuration = new Configuration();

configuration.message.success = configuration.message_success;

configuration.message.error = configuration.message_error;

configuration.message.info = configuration.message_info;

export default configuration;
