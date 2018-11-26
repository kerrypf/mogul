/**
 * MIT License
 *
 * Copyright (c) 2017 @freshesx/mogul
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var mobx = require('mobx');
var React = require('react');
var React__default = _interopDefault(React);
var reactDom = require('react-dom');
var mobxReact = require('mobx-react');
require('antd/es/notification/style/css');
var _notification = _interopDefault(require('antd/es/notification'));
var queryString = _interopDefault(require('query-string'));
var PropTypes = _interopDefault(require('prop-types'));
require('antd/es/modal/style/css');
var _Modal = _interopDefault(require('antd/es/modal'));
var styledTools = require('styled-tools');
var Popper = _interopDefault(require('popper.js'));
var reactSpring = require('react-spring');
var polished = require('polished');
var ReactContentLoader = _interopDefault(require('react-content-loader'));
require('antd/es/tag/style/css');
var _Tag = _interopDefault(require('antd/es/tag'));
require('antd/es/icon/style/css');
var _Icon = _interopDefault(require('antd/es/icon'));
var reactRouterDom = require('react-router-dom');
require('antd/es/popover/style/css');
var _Popover = _interopDefault(require('antd/es/popover'));
require('antd/es/tooltip/style/css');
var _Tooltip = _interopDefault(require('antd/es/tooltip'));
require('antd/es/input/style/css');
var _Input = _interopDefault(require('antd/es/input'));
var Measure = _interopDefault(require('react-measure'));
var reactSortableHoc = require('react-sortable-hoc');
require('antd/es/pagination/style/css');
var _Pagination = _interopDefault(require('antd/es/pagination'));
var invariant = _interopDefault(require('invariant'));
require('antd/es/checkbox/style/css');
var _Checkbox = _interopDefault(require('antd/es/checkbox'));
require('antd/es/radio/style/css');
var _Radio = _interopDefault(require('antd/es/radio'));
require('antd/es/select/style/css');
var _Select = _interopDefault(require('antd/es/select'));
require('antd/es/cascader/style/css');
var _Cascader = _interopDefault(require('antd/es/cascader'));
var reactVirtualized = require('react-virtualized');

var ellipsis = (function (width) {
  return "\n  width: " + width + ";\n  max-width: " + width + ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: normal;\n";
});

var flex = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$flex = _ref.flex,
      flex = _ref$flex === undefined ? "flex" : _ref$flex,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? "row" : _ref$direction,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === undefined ? "nowrap" : _ref$wrap,
      _ref$justifyContent = _ref.justifyContent,
      justifyContent = _ref$justifyContent === undefined ? "flex-start" : _ref$justifyContent,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === undefined ? "stretch" : _ref$alignItems,
      _ref$alignContent = _ref.alignContent,
      alignContent = _ref$alignContent === undefined ? "stretch" : _ref$alignContent,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === undefined ? false : _ref$overflow;

  return "\n    " + (overflow ? ellipsis(overflow) : "") + ";\n    display: " + flex + ";\n    flex-flow: " + direction + " " + wrap + ";\n    justify-content: " + justifyContent + ";\n    align-items: " + alignItems + ";\n    align-content: " + alignContent + ";\n";
});

var item = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$order = _ref.order,
      order = _ref$order === undefined ? 0 : _ref$order,
      flex = _ref.flex,
      _ref$grow = _ref.grow,
      grow = _ref$grow === undefined ? 0 : _ref$grow,
      _ref$shrink = _ref.shrink,
      shrink = _ref$shrink === undefined ? 1 : _ref$shrink,
      _ref$basis = _ref.basis,
      basis = _ref$basis === undefined ? "auto" : _ref$basis,
      _ref$alignSelf = _ref.alignSelf,
      alignSelf = _ref$alignSelf === undefined ? "auto" : _ref$alignSelf,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === undefined ? false : _ref$overflow;

  var flexAttr = flex ? flex : grow + " " + shrink + " " + basis;
  return "\n        " + (overflow ? ellipsis(overflow) : "") + ";\n        order:" + order + ";\n        flex: " + flexAttr + ";\n        align-self: " + alignSelf + ";\n    ";
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _templateObject = taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]);

var Flex = styled__default.div(_templateObject, function (props) {
  return flex(_extends({}, props));
});

var Item = styled__default.div(_templateObject, function (props) {
  return item(_extends({}, props));
});

function invokedWithArgs(args) {
  return args.length !== 3 || _typeof(args[0]) !== "object" || typeof args[1] !== "string" || _typeof(args[2]) !== "object";
}

function decorate(withArgs, decorator, args) {
  return withArgs ? decorator : decorator.apply(undefined, toConsumableArray(args));
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
function getDecorator(withArgs, lockName) {
  return function (target, key, descriptor) {
    var _obj;

    if (!withArgs) {
      lockName = "__" + Math.random().toString(32).slice(2, 8);
    }
    var fn = descriptor.value;
    if (withArgs && !target.hasOwnProperty(lockName)) {
      target[lockName] = false;
      mobx.decorate(target, defineProperty({}, lockName, mobx.observable));
    }

    return _obj = _extends({}, descriptor, {
      value: function value() {
        var _this = this;

        if (this[lockName]) {
          return undefined;
        }

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        var result = fn.apply(this, [].concat(toConsumableArray(params)));
        if (result instanceof Promise) {
          mobx.action(lockName + "-lock", function () {
            _this[lockName] = true;
          })();
          return result.then(mobx.action(lockName + "-unlock", function (res) {
            _this[lockName] = false;
            return Promise.resolve(res);
          })).catch(mobx.action(lockName + "-unlock", function (e) {
            _this[lockName] = false;
            return Promise.reject(e);
          }));
        } else {
          return result;
        }
      }
    }), (_applyDecoratedDescriptor(_obj, "value", [mobx.action], Object.getOwnPropertyDescriptor(_obj, "value"), _obj)), _obj;
  };
}

var onlyOneReq = function onlyOneReq(lockName) {
  var withArgs = invokedWithArgs(arguments);
  var decorator = getDecorator(withArgs, lockName);
  return decorate(withArgs, decorator, arguments);
};

function getDecorator$1() {
  return function (target) {
    return function (_Component) {
      inherits(Portal, _Component);

      function Portal() {
        classCallCheck(this, Portal);
        return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
      }

      createClass(Portal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.portal = document.createElement("div");
          document.body.appendChild(this.portal);
          this.renderPortal(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          reactDom.unmountComponentAtNode(this.portal);
          this.portal.remove();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.renderPortal(this.props);
        }
      }, {
        key: "renderPortal",
        value: function renderPortal(props) {
          reactDom.unstable_renderSubtreeIntoContainer(this, React.createElement(target, props), this.portal);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);
      return Portal;
    }(React.Component);
  };
}

var portal = function portal() {
  var isReactElement = typeof arguments[0] === "function";
  var decorator = getDecorator$1(isReactElement);
  return decorate(!isReactElement, decorator, arguments);
};

function getDecorator$2(getProviderStore) {
  return function (Target) {
    return function (_Component) {
      inherits(_class, _Component);

      function _class(props) {
        classCallCheck(this, _class);

        var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = getProviderStore(_this.props) || {};
        return _this;
      }

      createClass(_class, [{
        key: "render",
        value: function render() {
          return React__default.createElement(
            mobxReact.Provider,
            this.state,
            React__default.createElement(Target, this.props)
          );
        }
      }]);
      return _class;
    }(React.Component);
  };
}

var createProvider = function createProvider() {
  var decorator = getDecorator$2(arguments[0]);
  return decorate(true, decorator, arguments);
};

function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
function getDecorator$3(withArgs, lockName) {
  return function (target, key, descriptor) {
    var _obj;

    if (!withArgs) {
      lockName = "__" + Math.random().toString(32).slice(2, 8);
    }
    var fn = descriptor.value;

    if (withArgs && !target.hasOwnProperty(lockName)) {
      target[lockName] = false;
      mobx.decorate(target, defineProperty({}, lockName, mobx.observable));
    }

    var count = 0;

    return _obj = _extends({}, descriptor, {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        var result = fn.apply(this, [].concat(toConsumableArray(params)));
        if (result instanceof Promise) {
          count = count + 1;
          var executeCount = count;
          mobx.action(lockName + "-lock", function () {
            _this[lockName] = true;
          })();
          return result.then(mobx.action(lockName + "-unlock", function (res) {
            if (executeCount === count) {
              _this[lockName] = false;
              return Promise.resolve(res);
            } else {
              return Promise.resolve(Object.assign({}, res, {
                outOfDate: true
              }));
            }
          })).catch(mobx.action(lockName + "-unlock", function (e) {
            if (executeCount === count) {
              _this[lockName] = false;
            }
            return Promise.reject(e);
          }));
        } else {
          return result;
        }
      }
    }), (_applyDecoratedDescriptor$1(_obj, "value", [mobx.action], Object.getOwnPropertyDescriptor(_obj, "value"), _obj)), _obj;
  };
}

var lastReq = function lastReq(lockName) {
  var withArgs = invokedWithArgs(arguments);
  var decorator = getDecorator$3(withArgs, lockName);
  return decorate(withArgs, decorator, arguments);
};

// export { validate } from "./validate";

/* eslint-disable */
//https://github.com/epoberezkin/fast-deep-equal/blob/master/index.js
function deepEqual(a, b) {
  var isArray = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;

  if (a === b) return true;
  if (a && b && (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && (typeof b === "undefined" ? "undefined" : _typeof(b)) === "object") {
    var arrA = isArray(a),
        arrB = isArray(b),
        i = void 0,
        length = void 0,
        key = void 0;

    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) return false;
      }return true;
    }

    if (arrA !== arrB) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA !== dateB) return false;
    if (dateA && dateB) return a.getTime() === b.getTime();

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA !== regexpB) return false;
    if (regexpA && regexpB) return a.toString() === b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
}

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Configuration = (_dec = mobx.action.bound, _dec2 = mobx.action.bound, _dec3 = mobx.action.bound, _dec4 = mobx.action.bound, _dec5 = mobx.action.bound, _dec6 = mobx.action.bound, _dec7 = mobx.action.bound, _dec8 = mobx.action.bound, _dec9 = mobx.action.bound, _dec10 = mobx.action.bound, _dec11 = mobx.action.bound, _dec12 = mobx.action.bound, _dec13 = mobx.action.bound, _dec14 = mobx.action.bound, _dec15 = mobx.action.bound, _dec16 = mobx.action.bound, _dec17 = mobx.action.bound, _dec18 = mobx.action.bound, (_class = function () {
  function Configuration() {
    classCallCheck(this, Configuration);

    _initDefineProp(this, "fullPageLoading", _descriptor, this);

    _initDefineProp(this, "fullScreen", _descriptor2, this);

    this.fixQueryParams = null;

    _initDefineProp(this, "messageOptions", _descriptor3, this);

    _initDefineProp(this, "sider", _descriptor4, this);

    _initDefineProp(this, "_pagination", _descriptor5, this);

    _initDefineProp(this, "tableProps", _descriptor6, this);

    _initDefineProp(this, "_confirmComposeProps", _descriptor7, this);

    _initDefineProp(this, "localStorageKeyPrefix", _descriptor8, this);

    this.popupContext = null;
  }

  createClass(Configuration, [{
    key: "config",
    value: function config() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$messageOptions = _ref.messageOptions,
          messageOptions = _ref$messageOptions === undefined ? {} : _ref$messageOptions,
          _ref$sider = _ref.sider,
          sider = _ref$sider === undefined ? {} : _ref$sider,
          _ref$pagination = _ref.pagination,
          pagination = _ref$pagination === undefined ? {} : _ref$pagination,
          _ref$fullScreen = _ref.fullScreen,
          fullScreen = _ref$fullScreen === undefined ? this.fullScreen : _ref$fullScreen,
          _ref$popContext = _ref.popContext,
          popContext = _ref$popContext === undefined ? this.popupContext : _ref$popContext,
          _ref$tableProps = _ref.tableProps,
          tableProps = _ref$tableProps === undefined ? {} : _ref$tableProps,
          _ref$confirmComposePr = _ref.confirmComposeProps,
          confirmComposeProps = _ref$confirmComposePr === undefined ? {} : _ref$confirmComposePr,
          _ref$fixQueryParams = _ref.fixQueryParams,
          fixQueryParams = _ref$fixQueryParams === undefined ? this.fixQueryParams : _ref$fixQueryParams;

      this.messageOptions = _extends({}, this.messageOptions, messageOptions);

      this.sider = _extends({}, this.sider, sider);

      this._pagination = _extends({}, this._pagination, pagination);

      this.fullScreen = fullScreen;

      this.popupContext = popContext;

      this.tableProps = _extends({}, this.tableProps, tableProps);

      this._confirmComposeProps = _extends({}, this._confirmComposeProps, confirmComposeProps);

      this.fixQueryParams = fixQueryParams;
    }

    /**
     *
     * @param message
     * @param merOptions
     * @returns { Object }
     * @private
     */

  }, {
    key: "_convertToNotificationOptions",
    value: function _convertToNotificationOptions(message) {
      var merOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var notificationParams = _extends({
        placement: this.messageOptions.placement,
        key: this.messageOptions.key,
        message: message
      }, merOptions);

      if (!notificationParams.key) {
        notificationParams.key = notificationParams.message;
      }
      return notificationParams;
    }
  }, {
    key: "message",
    value: function message() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
  }, {
    key: "message_info",
    value: function message_info(msg, options) {
      _notification.info(this._convertToNotificationOptions(msg, options));
    }
  }, {
    key: "message_success",
    value: function message_success(msg, options) {
      _notification.success(this._convertToNotificationOptions(msg, options));
    }
  }, {
    key: "message_error",
    value: function message_error(msg, options) {
      _notification.error(this._convertToNotificationOptions(msg, options));
    }
  }, {
    key: "collapseSider",
    value: function collapseSider() {
      this.sider = _extends({}, this.sider, {
        collapse: true
      });
    }
  }, {
    key: "expandSider",
    value: function expandSider() {
      this.sider = _extends({}, this.sider, {
        collapse: false
      });
    }
  }, {
    key: "showFullPageLoading",
    value: function showFullPageLoading() {
      this.fullPageLoading = true;
    }
  }, {
    key: "hideFullPageLoading",
    value: function hideFullPageLoading() {
      this.fullPageLoading = false;
    }
  }, {
    key: "enterFullScreen",
    value: function enterFullScreen() {
      this.fullScreen = true;
    }
  }, {
    key: "exitFullScreen",
    value: function exitFullScreen() {
      this.fullScreen = false;
    }
  }, {
    key: "setLocalStorageKeyPrefix",
    value: function setLocalStorageKeyPrefix(prefix) {
      this.localStorageKeyPrefix = prefix;
    }
  }, {
    key: "setPopupContext",
    value: function setPopupContext(context) {
      this.popupContext = context;
    }
  }, {
    key: "__connectHistory",
    value: function __connectHistory(__historyComp) {
      this.__historyComp = __historyComp;
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      if (!this.__historyComp) {
        return null;
      }
      return this.__historyComp.props.history;
    }
  }, {
    key: "_getUrlObject",
    value: function _getUrlObject(url, state) {
      var urlObject = null;
      if (typeof url === "string") {
        urlObject = queryString.parseUrl(url);

        urlObject = {
          search: queryString.stringify(_extends({}, urlObject.query, this.fixQueryParams)),
          pathname: urlObject.url,
          hash: urlObject.hash,
          state: state
        };
      } else {
        urlObject = _extends({}, url, {
          search: queryString.stringify(Object.assign({}, url.search, this.fixQueryParams))
        });
      }

      return urlObject;
    }
  }, {
    key: "push",
    value: function push(url, state) {
      var history = this.getHistory();
      if (!this.fixQueryParams) {
        return history.push(url, state);
      }

      return history.push(this._getUrlObject(url, state));
    }
  }, {
    key: "replace",
    value: function replace(url, state) {
      var history = this.getHistory();
      if (!this.fixQueryParams) {
        return history.replace(url, state);
      }

      return history.replace(this._getUrlObject(url, state));
    }
  }, {
    key: "confirmComposeProps",
    get: function get$$1() {
      return mobx.toJS(this._confirmComposeProps);
    }
  }, {
    key: "pagination",
    get: function get$$1() {
      return mobx.toJS(this._pagination);
    }
  }]);
  return Configuration;
}(), (_descriptor = _applyDecoratedDescriptor$2(_class.prototype, "fullPageLoading", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor$2(_class.prototype, "fullScreen", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor$2(_class.prototype, "messageOptions", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      placement: "topRight",
      type: "info",
      key: null,
      defaultType: "success"
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor$2(_class.prototype, "sider", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      collapse: false,
      visible: true,
      title: "Mogul",
      logo: null,
      root: "/"
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor$2(_class.prototype, "_pagination", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      pageSize: 10,
      pageSizeOptions: ["10", "20", "30"],
      size: "small",
      showQuickJumper: true,
      showSizeChanger: true
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor$2(_class.prototype, "tableProps", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      size: "small"
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor$2(_class.prototype, "_confirmComposeProps", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor8 = _applyDecoratedDescriptor$2(_class.prototype, "localStorageKeyPrefix", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "_MOGUL_";
  }
}), _applyDecoratedDescriptor$2(_class.prototype, "confirmComposeProps", [mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "confirmComposeProps"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "pagination", [mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "pagination"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "config", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "config"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "_convertToNotificationOptions", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "_convertToNotificationOptions"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "message", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "message"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "message_info", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "message_info"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "message_success", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "message_success"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "message_error", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "message_error"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "collapseSider", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "collapseSider"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "expandSider", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "expandSider"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "showFullPageLoading", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "showFullPageLoading"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "hideFullPageLoading", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "hideFullPageLoading"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "enterFullScreen", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "enterFullScreen"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "exitFullScreen", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "exitFullScreen"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "setLocalStorageKeyPrefix", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "setLocalStorageKeyPrefix"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "setPopupContext", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "setPopupContext"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "__connectHistory", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "__connectHistory"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "getHistory", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "getHistory"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "push", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "push"), _class.prototype), _applyDecoratedDescriptor$2(_class.prototype, "replace", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "replace"), _class.prototype)), _class));


var configuration = new Configuration();

configuration.message.success = configuration.message_success;

configuration.message.error = configuration.message_error;

configuration.message.info = configuration.message_info;

var _class$1, _temp;

var warned = false;

var _default = (_temp = _class$1 = function (_Component) {
  inherits(_default, _Component);

  function _default(props) {
    classCallCheck(this, _default);

    var _this = possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.sync = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.setState({
        value: _extends({}, _this.state.value, data)
      }, function () {
        localStorage.setItem(_this.state.key, JSON.stringify(_this.state.value));
      });
    };

    var _this$props = _this.props,
        defaultValue = _this$props.defaultValue,
        id = _this$props.id,
        version = _this$props.version;

    var key = configuration.localStorageKeyPrefix + _this.props.id + "_" + version;
    var result = localStorage.getItem(key);

    if (result) {
      try {
        result = JSON.parse(result);
      } catch (e) {
        result = {};
      }
    }
    _this.state = {
      value: _extends({}, defaultValue, result),
      key: key,
      id: id,
      version: version
    };
    return _this;
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var value = this.state.value;

      return this.props.children(value, this.sync);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state) {
        if (!warned) {
          if (props.id !== state.id || props.version !== state.version) {
            console.warn("Memorize\u4E0D\u652F\u6301controlled id \u6216\u8005 version, \u8BF7\u68C0\u67E5Memorized\uFF1Aid\u4E3A" + state.id);
            warned = true;
          }
        }
      }

      return null;
    }
  }]);
  return _default;
}(React.Component), _class$1.propTypes = {
  children: PropTypes.func.isRequired,
  defaultValue: PropTypes.object,
  id: PropTypes.string.isRequired,
  version: PropTypes.number
}, _class$1.defaultProps = {
  defaultValue: {},
  version: 0
}, _class$1.displayName = "Memorize", _temp);

var createModal = function createModal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$id = _ref.id,
      id = _ref$id === undefined ? null : _ref$id,
      children = _ref.children,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === undefined ? function () {} : _ref$onOk,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === undefined ? function () {} : _ref$onCancel,
      modalProps = objectWithoutProperties(_ref, ["id", "children", "onOk", "onCancel"]);

  if (!React.isValidElement(children)) {
    throw new Error("你必须输入一个有效的react element");
  }

  if (id) {
    var existDiv = document.getElementById(id);
    if (existDiv) {
      reactDom.unmountComponentAtNode(existDiv);
      existDiv.remove();
    }
  }

  var div = document.createElement("div");
  if (id) {
    div.setAttribute("id", id);
  }
  document.body.appendChild(div);

  var unmountModal = function unmountModal() {
    reactDom.unmountComponentAtNode(div);
    div.remove();
  };

  var tryResolveModal = function tryResolveModal() {
    var result = onOk();

    if (result instanceof Promise) {
      result.then(unmountModal);
    } else {
      unmountModal();
    }
  };

  var tryRejectModal = function tryRejectModal() {
    var result = onCancel();

    if (result instanceof Promise) {
      result.then(unmountModal);
    } else {
      unmountModal();
    }
  };

  if (configuration.popupContext) {
    var Context = configuration.popupContext;

    reactDom.render(React__default.createElement(
      Context,
      null,
      React__default.createElement(
        _Modal,
        _extends({}, modalProps, { visible: true, onOk: tryResolveModal, onCancel: tryRejectModal }),
        React__default.createElement(
          "div",
          null,
          children
        )
      )
    ), div);
  } else {
    reactDom.render(React__default.createElement(
      _Modal,
      _extends({}, modalProps, { visible: true, onOk: tryResolveModal, onCancel: tryRejectModal }),
      React__default.createElement(
        "div",
        null,
        children
      )
    ), div);
  }

  return unmountModal;
};

var confirmCompose = function confirmCompose() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var onOk = _ref.onOk,
      restConfirmProps = objectWithoutProperties(_ref, ["onOk"]);

  return function (fn) {
    return function () {
      _Modal.confirm(_extends({}, configuration.confirmComposeProps, restConfirmProps, {
        onOk: function onOk() {
          return fn();
        }
      }));
    };
  };
};

var randomStr = function randomStr() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  return Math.random().toString(32).slice(length);
};

var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _class$2, _descriptor$1, _descriptor2$1;

function _initDefineProp$1(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var OverlayStore = (_dec$1 = mobx.action.bound, _dec2$1 = mobx.action.bound, _dec3$1 = mobx.action.bound, _dec4$1 = mobx.action.bound, _dec5$1 = mobx.action.bound, _dec6$1 = mobx.action.bound, _dec7$1 = mobx.action.bound, _dec8$1 = mobx.action.bound, _dec9$1 = mobx.action.bound, _dec10$1 = mobx.action.bound, _dec11$1 = mobx.action.bound, _dec12$1 = mobx.action.bound, (_class$2 = function () {
  function OverlayStore(overlay) {
    classCallCheck(this, OverlayStore);
    this.overlay = null;

    _initDefineProp$1(this, "overlayProps", _descriptor$1, this);

    _initDefineProp$1(this, "show", _descriptor2$1, this);

    this.overlay = overlay;
    this.overlayProps = overlay.props;
  }

  createClass(OverlayStore, [{
    key: "getOnVisibleChange",
    value: function getOnVisibleChange() {
      return this.overlayProps.onVisibleChange;
    }
  }, {
    key: "updateOverlayProps",
    value: function updateOverlayProps(newProps) {
      this.overlayProps = newProps;
    }
  }, {
    key: "setupOverlay",
    value: function setupOverlay() {
      this.node = reactDom.findDOMNode(this.reference);
      if (this.node) {
        this.node.addEventListener("click", this.showPopperByClick);
        this.node.addEventListener("mouseenter", this.showPopperByMouseEnter);
        this.node.addEventListener("mouseleave", this.hidePopperByMouseEnter);
      }
    }
  }, {
    key: "tearDownOverlay",
    value: function tearDownOverlay() {
      if (this.node) {
        this.node.removeEventListener("click", this.showPopperByClick);
        this.node.removeEventListener("mouseenter", this.showPopperByMouseEnter);
        this.node.removeEventListener("mouseleave", this.hidePopperByMouseEnter);
      }
    }
  }, {
    key: "showPopperByClick",
    value: function showPopperByClick() {
      if (this.disabled || this.overlayProps.trigger !== "click") {
        return;
      }

      if (this.getOnVisibleChange()(!this.show) !== false) {
        this.show = !this.show;
      }
    }
  }, {
    key: "showPopperByMouseEnter",
    value: function showPopperByMouseEnter() {
      if (this.disabled || this.overlayProps.trigger !== "hover") {
        return;
      }

      if (this.showTimer) clearTimeout(this.showTimer);

      if (this.getOnVisibleChange()(true) !== false) {
        this.showTimer = setTimeout(mobx.action("show-popper", this.forceShowOverlay), this.hoverDelay);
      }
    }
  }, {
    key: "hidePopperByMouseEnter",
    value: function hidePopperByMouseEnter() {
      if (this.overlayProps.trigger !== "hover") {
        return;
      }

      if (this.showTimer) clearTimeout(this.showTimer);

      if (this.getOnVisibleChange()(false) !== false) {
        this.showTimer = setTimeout(mobx.action("hide-popper", this.forceCloseOverlay), this.hoverDelay);
      }
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay() {
      if (this.getOnVisibleChange()(false) !== false) {
        this.show = false;
      }
    }
  }, {
    key: "showOverlay",
    value: function showOverlay() {
      if (this.getOnVisibleChange()(true) !== false) {
        this.show = true;
      }
    }
  }, {
    key: "forceCloseOverlay",
    value: function forceCloseOverlay() {
      this.show = false;
    }
  }, {
    key: "forceShowOverlay",
    value: function forceShowOverlay() {
      this.show = true;
    }
  }, {
    key: "bindReference",
    value: function bindReference(reference) {
      this.reference = reference;
    }
  }, {
    key: "overlayContent",
    get: function get$$1() {
      return mobx.toJS(this.overlayProps.overlay);
    }
  }, {
    key: "offset",
    get: function get$$1() {
      return this.overlayProps.offset;
    }
  }, {
    key: "placement",
    get: function get$$1() {
      return this.overlayProps.placement;
    }
  }, {
    key: "placementVariation",
    get: function get$$1() {
      return this.overlayProps.placementVariation;
    }
  }, {
    key: "allowArrow",
    get: function get$$1() {
      return this.overlayProps.arrow;
    }
  }, {
    key: "arrowStyleProps",
    get: function get$$1() {
      return {
        size: this.overlayProps.arrowSize,
        bg: this.overlayProps.arrowColor
      };
    }
  }, {
    key: "hoverDelay",
    get: function get$$1() {
      return this.overlayProps.hoverDelay ? this.overlayProps.hoverDelay : 0;
    }
  }, {
    key: "autoClose",
    get: function get$$1() {
      return this.overlayProps.autoClose;
    }
  }, {
    key: "animation",
    get: function get$$1() {
      return this.overlayProps.animation;
    }
  }, {
    key: "zIndex",
    get: function get$$1() {
      return this.overlayProps.zIndex;
    }
  }, {
    key: "flip",
    get: function get$$1() {
      return this.overlayProps.flip;
    }
  }, {
    key: "disabled",
    get: function get$$1() {
      return this.overlayProps.disabled;
    }
  }, {
    key: "visible",
    get: function get$$1() {
      return this.overlayProps.visible;
    }
  }]);
  return OverlayStore;
}(), (_descriptor$1 = _applyDecoratedDescriptor$3(_class$2.prototype, "overlayProps", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2$1 = _applyDecoratedDescriptor$3(_class$2.prototype, "show", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor$3(_class$2.prototype, "overlayContent", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "overlayContent"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "offset", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "offset"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "placement", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "placement"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "placementVariation", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "placementVariation"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "allowArrow", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "allowArrow"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "arrowStyleProps", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "arrowStyleProps"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "hoverDelay", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "hoverDelay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "autoClose", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "autoClose"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "animation", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "animation"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "zIndex", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "zIndex"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "flip", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "flip"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "disabled", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "disabled"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "visible", [mobx.computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "visible"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "getOnVisibleChange", [_dec$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "getOnVisibleChange"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "updateOverlayProps", [_dec2$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "updateOverlayProps"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "setupOverlay", [_dec3$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "setupOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "tearDownOverlay", [_dec4$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "tearDownOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "showPopperByClick", [_dec5$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "showPopperByClick"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "showPopperByMouseEnter", [_dec6$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "showPopperByMouseEnter"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "hidePopperByMouseEnter", [_dec7$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "hidePopperByMouseEnter"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "closeOverlay", [_dec8$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "closeOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "showOverlay", [_dec9$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "showOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "forceCloseOverlay", [_dec10$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "forceCloseOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "forceShowOverlay", [_dec11$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "forceShowOverlay"), _class$2.prototype), _applyDecoratedDescriptor$3(_class$2.prototype, "bindReference", [_dec12$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "bindReference"), _class$2.prototype)), _class$2));

var _templateObject$1 = taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  position: absolute;\n  ", ";\n\n  &::before {\n    content: \"\";\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  position: absolute;\n  ", ";\n\n  &::before {\n    content: \"\";\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n  }\n"]),
    _templateObject2 = taggedTemplateLiteral(["\n      top: 0;\n      left: 0;\n      margin-top: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: 0 ", "px ", "px ", "px;\n        border-color: transparent transparent ", " transparent;\n      }\n    "], ["\n      top: 0;\n      left: 0;\n      margin-top: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: 0 ", "px ", "px ", "px;\n        border-color: transparent transparent ", " transparent;\n      }\n    "]),
    _templateObject3 = taggedTemplateLiteral(["\n      bottom: 0;\n      left: 0;\n      margin-bottom: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px ", "px 0 ", "px;\n        border-color: ", " transparent transparent transparent;\n      }\n    "], ["\n      bottom: 0;\n      left: 0;\n      margin-bottom: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px ", "px 0 ", "px;\n        border-color: ", " transparent transparent transparent;\n      }\n    "]),
    _templateObject4 = taggedTemplateLiteral(["\n      right: 0;\n      margin-right: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px 0 ", "px ", "px;\n        border-color: transparent transparent transparent ", ";\n      }\n    "], ["\n      right: 0;\n      margin-right: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px 0 ", "px ", "px;\n        border-color: transparent transparent transparent ", ";\n      }\n    "]),
    _templateObject5 = taggedTemplateLiteral(["\n      left: 0;\n      margin-left: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px ", "px ", "px 0;\n        border-color: transparent ", " transparent transparent;\n      }\n    "], ["\n      left: 0;\n      margin-left: -", "px;\n      width: ", "px;\n      height: ", "px;\n      &::before {\n        border-width: ", "px ", "px ", "px 0;\n        border-color: transparent ", " transparent transparent;\n      }\n    "]);

var getSizeProp = function getSizeProp(defaultValue) {
  var divider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (props) {
    return (props.size ? props.size : defaultValue) / divider;
  };
};

var Arrow = styled__default.div(_templateObject$1, getSizeProp(18), getSizeProp(18), styledTools.switchProp("placement", {
  bottom: styled.css(_templateObject2, getSizeProp(18, 3), getSizeProp(18), getSizeProp(18, 3), getSizeProp(18, 2), getSizeProp(18, 3), getSizeProp(18, 2), styledTools.prop("bg", "#fff")),
  top: styled.css(_templateObject3, getSizeProp(18, 3), getSizeProp(18), getSizeProp(18, 3), getSizeProp(18, 3), getSizeProp(18, 2), getSizeProp(18, 2), styledTools.prop("bg", "#fff")),
  left: styled.css(_templateObject4, getSizeProp(18, 3), getSizeProp(18, 3), getSizeProp(18), getSizeProp(18, 2), getSizeProp(18, 2), getSizeProp(18, 3), styledTools.prop("bg", "#fff")),
  right: styled.css(_templateObject5, getSizeProp(18, 3), getSizeProp(18, 3), getSizeProp(18), getSizeProp(18, 2), getSizeProp(18, 3), getSizeProp(18, 2), styledTools.prop("bg", "#fff"))
}));

var _dec$2, _class$3, _class2, _temp2;

var _templateObject$2 = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform-origin: top center;\n"], ["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform-origin: top center;\n"]);

var Container = styled__default.div(_templateObject$2);

var _default$1 = (_dec$2 = mobxReact.inject("overlay"), portal(_class$3 = _dec$2(_class$3 = mobxReact.observer(_class$3 = (_temp2 = _class2 = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popperProps: null
    }, _this.autoCloseOverlay = function (e) {
      var _this2 = _this,
          popper = _this2.popper,
          _this2$props$overlay = _this2.props.overlay,
          autoClose = _this2$props$overlay.autoClose,
          show = _this2$props$overlay.show,
          node = _this2$props$overlay.node,
          closeOverlay = _this2$props$overlay.closeOverlay;

      if (!autoClose) return;
      if (!show) return;
      if (!popper) return;
      if (node.contains(e.target) || _this.container.contains(e.target)) return;
      closeOverlay();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _props$overlay = this.props.overlay,
          node = _props$overlay.node,
          placement = _props$overlay.placement,
          allowArrow = _props$overlay.allowArrow,
          flip = _props$overlay.flip,
          placementVariation = _props$overlay.placementVariation;


      this.popper = new Popper(node, this.container, {
        placement: placementVariation ? placement + "-" + placementVariation : placement,
        eventsEnabled: true,
        positionFixed: false,
        modifiers: {
          flip: { enabled: flip },
          computeStyle: { gpuAcceleration: false },
          arrow: {
            enabled: allowArrow,
            element: this.arrow
          },
          applyStyle: { enabled: false },
          updateStateModifier: {
            enabled: true,
            order: 900,
            fn: function fn(data) {
              _this3.setState({
                popperProps: data
              });
              return data;
            }
          }
        }
      });

      document.addEventListener("click", this.autoCloseOverlay);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.popper) {
        this.popper.destroy();
      }

      document.removeEventListener("click", this.autoCloseOverlay);
    }
  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var _props = this.props,
          _props$overlay2 = _props.overlay,
          offset = _props$overlay2.offset,
          zIndex = _props$overlay2.zIndex,
          opacity = _props.opacity,
          scale = _props.scale;
      var popperProps = this.state.popperProps;

      if (!popperProps) return {};
      var transformOrigin = "",
          scaleOrient = "",
          offsetX = 0,
          offsetY = 0;

      var placement = popperProps.placement;

      if (popperProps.placement.indexOf("-") !== -1) {
        placement = popperProps.placement.substr(0, popperProps.placement.indexOf("-"));
      }
      switch (placement) {
        case "top":
          transformOrigin = "bottom center";
          offsetY = -offset;
          scaleOrient = "scaleY";
          break;
        case "left":
          transformOrigin = "right center";
          offsetX = -offset;
          scaleOrient = "scaleX";
          break;
        case "right":
          transformOrigin = "left center";
          offsetX = offset;
          scaleOrient = "scaleX";
          break;
        case "bottom":
        default:
          transformOrigin = "top center";
          offsetY = offset;
          scaleOrient = "scaleY";
      }

      return {
        zIndex: zIndex,
        opacity: opacity,
        transform: "translate(" + (popperProps.styles.left + offsetX) + "px," + (popperProps.styles.top + offsetY) + "px) " + scaleOrient + "(" + scale + ")",
        transformOrigin: transformOrigin
      };
    }
  }, {
    key: "getArrowProps",
    value: function getArrowProps() {
      var arrowStyleProps = this.props.overlay.arrowStyleProps;
      var popperProps = this.state.popperProps;

      if (!popperProps) return arrowStyleProps;
      var _popperProps$arrowSty = popperProps.arrowStyles,
          left = _popperProps$arrowSty.left,
          top = _popperProps$arrowSty.top;


      return _extends({}, arrowStyleProps, {
        placement: popperProps.placement,
        style: {
          transform: "translate(\n        " + (left ? left : 0) + "px,\n        " + (top ? top : 0) + "px)"
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props$overlay3 = this.props.overlay,
          overlayContent = _props$overlay3.overlayContent,
          allowArrow = _props$overlay3.allowArrow;

      return React__default.createElement(
        Container,
        {
          innerRef: function innerRef(container) {
            return _this4.container = container;
          },
          style: this.getContainerStyle() },
        allowArrow ? React__default.createElement(Arrow, _extends({ innerRef: function innerRef(arrow) {
            return _this4.arrow = arrow;
          } }, this.getArrowProps())) : null,
        typeof overlayContent === "function" ? overlayContent(this.overlay) : overlayContent
      );
    }
  }]);
  return _default;
}(React.Component), _class2.propTypes = {
  opacity: PropTypes.number,
  scale: PropTypes.number
}, _class2.defaultProps = {
  opacity: 1,
  scale: 1
}, _temp2)) || _class$3) || _class$3) || _class$3);

var _dec$3, _class$4;

var _default$2 = (_dec$3 = mobxReact.inject("overlay"), _dec$3(_class$4 = mobxReact.observer(_class$4 = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    classCallCheck(this, _default);
    return possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _props$overlay = this.props.overlay,
          show = _props$overlay.show,
          animation = _props$overlay.animation;

      return React__default.createElement(
        React.Fragment,
        null,
        animation ? React__default.createElement(
          reactSpring.Transition,
          {
            items: show,
            from: { opacity: 0, scale: 0.2 },
            enter: { opacity: 1, scale: 1 },
            leave: { opacity: 0, scale: 0.2 },
            config: reactSpring.config.stiff },
          function (show) {
            return show && function (_ref) {
              var scale = _ref.scale,
                  opacity = _ref.opacity;
              return React__default.createElement(_default$1, { scale: scale, opacity: opacity });
            };
          }
        ) : show ? React__default.createElement(_default$1, { scale: 1, opacity: 1 }) : null
      );
    }
  }]);
  return _default;
}(React.Component)) || _class$4) || _class$4);

var _dec$4, _class$5;

var _default$3 = (_dec$4 = mobxReact.inject("overlay"), _dec$4(_class$5 = mobxReact.observer(_class$5 = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    classCallCheck(this, _default);
    return possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.overlay.setupOverlay(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.overlay.tearDownOverlay();
    }
  }, {
    key: "render",
    value: function render() {
      var _props$overlay = this.props.overlay,
          bindReference = _props$overlay.bindReference,
          disabled = _props$overlay.disabled;


      return React__default.createElement(
        React.Fragment,
        null,
        React.cloneElement(React.Children.only(this.props.children), {
          ref: bindReference
        }),
        disabled ? null : React__default.createElement(_default$2, null)
      );
    }
  }]);
  return _default;
}(React.Component)) || _class$5) || _class$5);

var _class$6, _temp$1;

var Overlay = (_temp$1 = _class$6 = function (_Component) {
  inherits(Overlay, _Component);

  function Overlay(props) {
    classCallCheck(this, Overlay);

    var _this = possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.state = {
      overlay: new OverlayStore(_this)
    };
    return _this;
  }

  createClass(Overlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.state.overlay.updateOverlayProps(this.props);
      }
    }
  }, {
    key: "getOverlayApi",
    value: function getOverlayApi() {
      return this.state.overlay;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(
        mobxReact.Provider,
        { overlay: this.state.overlay },
        React__default.createElement(
          _default$3,
          null,
          this.props.children
        )
      );
    }
  }]);
  return Overlay;
}(React.Component), _class$6.propTypes = {
  children: PropTypes.element.isRequired,
  trigger: PropTypes.oneOf(["click", "hover"]),
  overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  placement: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  placementVariation: PropTypes.oneOf(["start", "end"]),
  offset: PropTypes.number,
  arrow: PropTypes.bool,
  arrowSize: PropTypes.number,
  arrowColor: PropTypes.string,
  autoClose: PropTypes.bool,
  hoverDelay: PropTypes.number,
  animation: PropTypes.bool,
  zIndex: function zIndex(props, propName, componentName) {
    if (props[propName] !== "auto" && !Number.isInteger(props[propName])) {
      return new Error("Invalid prop `" + propName + "` supplied to" + " `" + componentName + "`. Validation failed. expect `auto` or a valid integer");
    }
  },
  flip: PropTypes.bool,
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func
}, _class$6.defaultProps = {
  trigger: "click",
  placement: "bottom",
  offset: 8,
  arrow: false,
  arrowSize: 18,
  arrowColor: "#fff",
  autoClose: false,
  hoverDelay: 200,
  animation: false,
  zIndex: "auto",
  flip: true,
  disabled: false,
  onVisibleChange: function onVisibleChange() {
    return true;
  }
}, _temp$1);

/* eslint-disable */

var fullScreen = function fullScreen() {
  var el = document,
      domEl = document.documentElement,
      isFullscreen = el.fullScreen || el.mozFullScreen || el.webkitIsFullScreen || domEl.fullScreen || domEl.mozFullScreen || domEl.webkitIsFullScreen;
  var rfs = null;
  if (isFullscreen) {
    rfs = el.exitFullscreen || el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen;
    if (rfs) {
      rfs.call(el);
      return;
    }
    rfs = domEl.exitFullscreen || domEl.webkitExitFullscreen || domEl.mozCancelFullScreen || domEl.msExitFullscreen;

    if (rfs) {
      rfs.call(domEl);
      return;
    }
  } else {
    rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
    if (rfs) {
      rfs.call(el);
      return;
    }
    rfs = domEl.requestFullScreen || domEl.webkitRequestFullScreen || domEl.mozRequestFullScreen || domEl.msRequestFullScreen;

    if (rfs) {
      rfs.call(domEl);
      return;
    }
  }
  // try run script
  if (typeof window.ActiveXObject !== "undefined") {
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
};

var textColor = "#333";

var variable = {
  primary: "#1890ff",
  second: "#e10050",
  text: {
    primary: textColor,
    second: polished.lighten(0.2, textColor),
    third: polished.lighten(0.4, textColor)
  },
  disabled: polished.lighten(0.6, textColor)
};

var _class$7, _temp$2;

var _templateObject$3 = taggedTemplateLiteral(["\n  100% { transform: rotate(360deg); }\n"], ["\n  100% { transform: rotate(360deg); }\n"]),
    _templateObject2$1 = taggedTemplateLiteral(["\n    0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -120px;\n  }\n"], ["\n    0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -120px;\n  }\n"]),
    _templateObject3$1 = taggedTemplateLiteral(["\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  ", ";\n"], ["\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  ", ";\n"]),
    _templateObject4$1 = taggedTemplateLiteral(["\n      transform: rotate(-90deg);\n    "], ["\n      transform: rotate(-90deg);\n    "]),
    _templateObject5$1 = taggedTemplateLiteral(["\n      animation: ", " 1.4s linear infinite;\n    "], ["\n      animation: ", " 1.4s linear infinite;\n    "]),
    _templateObject6 = taggedTemplateLiteral(["\n  stroke-dasharray: 80px, 200px;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  fill: none;\n  stroke-linecap: round;\n  ", ";\n"], ["\n  stroke-dasharray: 80px, 200px;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  fill: none;\n  stroke-linecap: round;\n  ", ";\n"]),
    _templateObject7 = taggedTemplateLiteral(["\n      stroke-dasharray: 0, 126px;\n      //transition: stroke-dasharray 0.3s ease-in-out;\n    "], ["\n      stroke-dasharray: 0, 126px;\n      //transition: stroke-dasharray 0.3s ease-in-out;\n    "]),
    _templateObject8 = taggedTemplateLiteral(["\n      animation: ", " 1.4s ease-in-out infinite;\n    "], ["\n      animation: ", " 1.4s ease-in-out infinite;\n    "]);

var Rotate = styled.keyframes(_templateObject$3);

var Dash = styled.keyframes(_templateObject2$1);

var Container$1 = styled__default.div(_templateObject3$1, styledTools.ifProp("pause", styled.css(_templateObject4$1), styled.css(_templateObject5$1, Rotate)));

var Spinner = styled__default.circle(_templateObject6, styledTools.ifProp("pause", styled.css(_templateObject7), styled.css(_templateObject8, Dash)));

var _default$4 = (_temp$2 = _class$7 = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    classCallCheck(this, _default);
    return possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          color = _props.color,
          style = _props.style,
          immediate = _props.immediate,
          value = _props.value,
          className = _props.className;

      var children = null;
      var hasValue = typeof value === "number";
      if (hasValue) {
        children = React__default.createElement(
          reactSpring.Spring,
          {
            immediate: immediate,
            config: reactSpring.config.wobbly,
            from: { value: 0 },
            to: { value: Math.max(0, Math.min(100, value)) } },
          function (_ref) {
            var value = _ref.value;
            return React__default.createElement(Spinner, {
              pause: true,
              cx: 44,
              cy: 44,
              r: 20.2,
              fill: "none",
              strokeWidth: "3.6",
              stroke: color,
              style: {
                strokeDasharray: 1.26 * value + "px, " + (126 - 1.26 * value) + "px "
              }
            });
          }
        );
      } else {
        children = React__default.createElement(Spinner, {
          pause: false,
          cx: 44,
          cy: 44,
          r: 20.2,
          fill: "none",
          strokeWidth: "3.6",
          stroke: color
        });
      }
      return React__default.createElement(
        Container$1,
        {
          className: className,
          pause: hasValue,
          style: { style: style, width: size, height: size } },
        React__default.createElement(
          "svg",
          { viewBox: "22 22 44 44", style: { width: size, height: size } },
          children
        )
      );
    }
  }]);
  return _default;
}(React.Component), _class$7.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.number
}, _class$7.defaultProps = {
  size: 24,
  color: variable.primary,
  style: {}
}, _temp$2);

var _class$8, _temp$3;

var _templateObject$4 = taggedTemplateLiteral(["\n  position: relative;\n"], ["\n  position: relative;\n"]);

var Container$2 = styled__default.div(_templateObject$4);

var ContentLoader = (_temp$3 = _class$8 = function (_PureComponent) {
  inherits(ContentLoader, _PureComponent);

  function ContentLoader() {
    classCallCheck(this, ContentLoader);
    return possibleConstructorReturn(this, (ContentLoader.__proto__ || Object.getPrototypeOf(ContentLoader)).apply(this, arguments));
  }

  createClass(ContentLoader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          rectUnitHeight = _props.rectUnitHeight,
          verticalGap = _props.verticalGap,
          loopOffset = _props.loopOffset;

      var total = Math.floor(height / (rectUnitHeight + verticalGap));
      var RectArr = [];
      for (var i = 0; i < total; i++) {
        RectArr.push(React__default.createElement("rect", {
          key: "" + i,
          rx: "4",
          ry: "4",
          width: width - loopOffset[i % loopOffset.length],
          height: rectUnitHeight,
          x: loopOffset[i % loopOffset.length],
          y: verticalGap * (i + 1) + rectUnitHeight * i
        }));
      }

      return React__default.createElement(
        Container$2,
        { style: { width: width, height: height } },
        React__default.createElement(
          ReactContentLoader,
          { width: width, height: height },
          RectArr
        )
      );
    }
  }]);
  return ContentLoader;
}(React.PureComponent), _class$8.propTypes = {
  rectUnitHeight: PropTypes.number,
  loopOffset: PropTypes.array
}, _class$8.defaultProps = {
  rectUnitHeight: 15,
  loopOffset: [10, 75, 75, 45],
  verticalGap: 10
}, _temp$3);

//export { default as Donut } from "./Donut";

var _class$9, _temp2$1;

var _templateObject$5 = taggedTemplateLiteral(["\n  position: relative;\n  ", ";\n"], ["\n  position: relative;\n  ", ";\n"]),
    _templateObject2$2 = taggedTemplateLiteral([""], [""]),
    _templateObject3$2 = taggedTemplateLiteral(["\n      background-color: #fff;\n      border-radius: 2px;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.12);\n      padding: 30px 18px;\n      &:hover {\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      }\n    "], ["\n      background-color: #fff;\n      border-radius: 2px;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.12);\n      padding: 30px 18px;\n      &:hover {\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      }\n    "]),
    _templateObject4$2 = taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 666;\n  user-select: none;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 666;\n  user-select: none;\n  pointer-events: none;\n"]);
var Container$3 = styled__default.div(_templateObject$5, styledTools.ifProp("noCss", styled.css(_templateObject2$2), styled.css(_templateObject3$2)));

var CenterEl = styled__default.div(_templateObject4$2);

var _default$5 = (_temp2$1 = _class$9 = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.renderLoadingContent = function () {
      var _this$props = _this.props,
          loadingTemplate = _this$props.loadingTemplate,
          renderLoading = _this$props.renderLoading;

      if (!_this.container) {
        return null;
      }

      var _this$container$getBo = _this.container.getBoundingClientRect(),
          width = _this$container$getBo.width,
          height = _this$container$getBo.height;

      if (renderLoading) {
        return renderLoading();
      }
      switch (loadingTemplate) {
        case "list":
          return React__default.createElement(ContentLoader, { width: width - 80, height: height - 80 });
        case "spin":
        default:
          return React__default.createElement(_default$4, { size: 40 });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          loading = _props.loading,
          keepContent = _props.keepContent,
          noCss = _props.noCss;


      var concatClassName = className ? "__mogul__card " + className : "__mogul__card";
      return React__default.createElement(
        Container$3,
        {
          noCss: noCss,
          innerRef: function innerRef(container) {
            return _this2.container = container;
          },
          className: concatClassName,
          style: style },
        loading && !keepContent ? null : children,
        React__default.createElement(
          reactSpring.Transition,
          {
            items: loading,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: reactSpring.config.slow },
          function (loading) {
            return loading && function (_ref2) {
              var opacity = _ref2.opacity;
              return React__default.createElement(
                CenterEl,
                { style: { opacity: opacity } },
                _this2.renderLoadingContent()
              );
            };
          }
        )
      );
    }
  }]);
  return _default;
}(React.Component), _class$9.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  loading: PropTypes.bool,
  loadingTemplate: PropTypes.oneOf(["spin", "list"]),
  renderLoading: PropTypes.func,
  keepContent: PropTypes.bool,
  noCss: PropTypes.bool
}, _class$9.defaultProps = {
  style: {},
  loading: false,
  loadingTemplate: "spin",
  keepContent: false,
  noCss: false
}, _temp2$1);

var _class$a, _temp2$2;

var _templateObject$6 = taggedTemplateLiteral(["\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 4px 8px;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.3s;\n  border: 1px solid #d9d9d9;\n  min-height: 32px;\n  overflow: hidden;\n\n  &.disabled {\n    background: #f5f5f5;\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n  }\n"], ["\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 4px 8px;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.3s;\n  border: 1px solid #d9d9d9;\n  min-height: 32px;\n  overflow: hidden;\n\n  &.disabled {\n    background: #f5f5f5;\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n  }\n"]),
    _templateObject2$3 = taggedTemplateLiteral(["\n  background-color: transparent !important;\n  cursor: pointer;\n  width: 3px;\n  position: relative;\n  top: 2px;\n  border-width: 0;\n  font-size: 100%;\n  height: 100%;\n  outline: 0;\n  border-radius: 4px;\n  line-height: 20px;\n  color: rgba(0, 0, 0, 0.65);\n"], ["\n  background-color: transparent !important;\n  cursor: pointer;\n  width: 3px;\n  position: relative;\n  top: 2px;\n  border-width: 0;\n  font-size: 100%;\n  height: 100%;\n  outline: 0;\n  border-radius: 4px;\n  line-height: 20px;\n  color: rgba(0, 0, 0, 0.65);\n"]),
    _templateObject3$3 = taggedTemplateLiteral(["\n  padding-right: 2px !important;\n  margin-right: 2px !important;\n  border-right: none !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n"], ["\n  padding-right: 2px !important;\n  margin-right: 2px !important;\n  border-right: none !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n"]),
    _templateObject4$3 = taggedTemplateLiteral(["\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  overflow: auto;\n  padding: 8px 16px;\n"], ["\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  overflow: auto;\n  padding: 8px 16px;\n"]);


var Container$4 = styled__default.div(_templateObject$6);

var StyledInput = styled__default.input(_templateObject2$3);

var InputTag = styled__default(_Tag)(_templateObject3$3);

var PopupContainer = styled__default(Flex)(_templateObject4$3);

var _default$6 = (_temp2$2 = _class$a = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: ""
    }, _this.handleVisibleChange = function (visible) {
      if (visible) {
        _this.input.focus();
      } else {
        _this.setState({
          inputValue: ""
        });
      }
    }, _this.changeInputValue = function (_ref2) {
      var value = _ref2.target.value;

      _this.setState({
        inputValue: value
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default$$1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          disabled = _props.disabled,
          style = _props.style,
          children = _props.children,
          onChange = _props.onChange;
      var inputValue = this.state.inputValue;

      return React__default.createElement(
        Overlay,
        {
          ref: function ref(overlay) {
            return _this2.overlay = overlay;
          },
          arrow: false,
          animation: true,
          autoClose: true,
          trigger: "click",
          disabled: disabled,
          overlay: function overlay() {
            return React__default.createElement(
              PopupContainer,
              null,
              children(inputValue, _this2.props)
            );
          },
          placementVariation: "start",
          zIndex: 9999,
          offset: 4,
          onVisibleChange: this.handleVisibleChange },
        React__default.createElement(
          Container$4,
          {
            className: disabled ? "disabled" : "",
            innerRef: function innerRef(container) {
              return _this2.container = container;
            },
            style: style },
          value.map(function (option) {
            return React__default.createElement(
              _Tag,
              {
                closable: !disabled,
                key: option.value,
                onClose: function onClose() {
                  onChange(value.filter(function (val) {
                    return val.value !== option.value;
                  }));
                } },
              option.label
            );
          }),
          inputValue ? React__default.createElement(
            InputTag,
            null,
            inputValue
          ) : null,
          React__default.createElement(StyledInput, {
            innerRef: function innerRef(input) {
              return _this2.input = input;
            },
            disabled: disabled,
            autoComplete: "off",
            onChange: this.changeInputValue,
            value: inputValue
          })
        )
      );
    }
  }]);
  return _default$$1;
}(React.Component), _class$a.propTypes = {
  value: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  })),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func]).isRequired
}, _class$a.defaultProps = {
  value: []
}, _temp2$2);

var _class$b, _temp$4;

var _templateObject$7 = taggedTemplateLiteral(["\n  from{\n    opacity: .2;\n    transform: rotateZ(10deg);\n  }\n  \n  to{\n    opacity: 1;\n    transform: rotateZ(0deg);\n  }\n"], ["\n  from{\n    opacity: .2;\n    transform: rotateZ(10deg);\n  }\n  \n  to{\n    opacity: 1;\n    transform: rotateZ(0deg);\n  }\n"]),
    _templateObject2$4 = taggedTemplateLiteral(["\n  border-radius: 4px;\n  position: relative;\n\n  margin-right: 10px;\n  transition: opacity 0.3s;\n  will-change: opacity, color, height;\n  animation: ", " 0.3s;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  &:hover {\n    opacity: 0.85;\n  }\n"], ["\n  border-radius: 4px;\n  position: relative;\n\n  margin-right: 10px;\n  transition: opacity 0.3s;\n  will-change: opacity, color, height;\n  animation: ", " 0.3s;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  &:hover {\n    opacity: 0.85;\n  }\n"]),
    _templateObject3$4 = taggedTemplateLiteral(["\n      height: 26px;\n      padding-left: 6px;\n      padding-right: ", "px;\n\n      font-size: 14px;\n    "], ["\n      height: 26px;\n      padding-left: 6px;\n      padding-right: ", "px;\n\n      font-size: 14px;\n    "]),
    _templateObject4$4 = taggedTemplateLiteral(["\n      height: 22px;\n      padding-left: 4px;\n      padding-right: ", "px;\n      font-size: 12px;\n    "], ["\n      height: 22px;\n      padding-left: 4px;\n      padding-right: ", "px;\n      font-size: 12px;\n    "]),
    _templateObject5$2 = taggedTemplateLiteral(["\n      height: 30px;\n      padding-left: 8px;\n      padding-right: ", "px;\n\n      font-size: 16px;\n    "], ["\n      height: 30px;\n      padding-left: 8px;\n      padding-right: ", "px;\n\n      font-size: 16px;\n    "]),
    _templateObject6$1 = taggedTemplateLiteral(["\n      color: #fff;\n      background-color: rgb(33, 150, 243);\n      border: 1px solid transparent;\n    "], ["\n      color: #fff;\n      background-color: rgb(33, 150, 243);\n      border: 1px solid transparent;\n    "]),
    _templateObject7$1 = taggedTemplateLiteral(["\n      background-color: #fafafa;\n      border: 1px solid #d9d9d9;\n      color: rgba(0, 0, 0, 0.65);\n    "], ["\n      background-color: #fafafa;\n      border: 1px solid #d9d9d9;\n      color: rgba(0, 0, 0, 0.65);\n    "]),
    _templateObject8$1 = taggedTemplateLiteral(["\n          cursor: pointer;\n        "], ["\n          cursor: pointer;\n        "]),
    _templateObject9 = taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n\n  &:hover {\n    color: red;\n  }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n\n  &:hover {\n    color: red;\n  }\n"]);

var FadeIn = styled.keyframes(_templateObject$7);

var Container$5 = styled__default(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})(_templateObject2$4, FadeIn, styledTools.switchProp("size", {
  middle: styled.css(_templateObject3$4, styledTools.ifProp("hasCloseIcon", 25, 6)),
  small: styled.css(_templateObject4$4, styledTools.ifProp("hasCloseIcon", 21, 4)),
  large: styled.css(_templateObject5$2, styledTools.ifProp("hasCloseIcon", 29, 8))
}), styledTools.switchProp("theme", {
  primary: styled.css(_templateObject6$1),
  default: styled.css(_templateObject7$1)
}), function (props) {
  return props.hasCursor ? styled.css(_templateObject8$1) : "";
});

var CloseIcon = styled__default(_Icon).attrs({
  type: "close",
  title: "关闭"
})(_templateObject9);

var _default$7 = (_temp$4 = _class$b = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    classCallCheck(this, _default);
    return possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          size = _props.size,
          className = _props.className,
          onClick = _props.onClick,
          closable = _props.closable,
          onClose = _props.onClose,
          overflow = _props.overflow,
          rest = objectWithoutProperties(_props, ["children", "size", "className", "onClick", "closable", "onClose", "overflow"]);

      return React__default.createElement(
        Container$5,
        _extends({
          size: size,
          className: className,
          hasCursor: !!onClick,
          hasCloseIcon: closable
        }, rest),
        React__default.createElement(
          Item,
          { overflow: overflow, onClick: onClick },
          children
        ),
        closable ? React__default.createElement(CloseIcon, { onClick: onClose }) : null
      );
    }
  }]);
  return _default;
}(React.Component), _class$b.propTypes = {
  theme: PropTypes.oneOf(["primary", "default"]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
  closable: PropTypes.bool,
  onClose: PropTypes.func
}, _class$b.defaultProps = {
  flex: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  theme: "default",
  size: "middle",
  closable: false,
  overflow: "auto"
}, _temp$4);

var _class$c, _class2$1, _temp$5, _class3, _class4, _temp2$3;

var NavLink = mobxReact.observer(_class$c = (_temp$5 = _class2$1 = function (_Component) {
  inherits(NavLink, _Component);

  function NavLink() {
    classCallCheck(this, NavLink);
    return possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));
  }

  createClass(NavLink, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          to = _props.to,
          rest = objectWithoutProperties(_props, ["to"]);


      return React__default.createElement(reactRouterDom.NavLink, _extends({ to: configuration._getUrlObject(to) }, rest));
    }
  }]);
  return NavLink;
}(React.Component), _class2$1.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })]).isRequired
}, _temp$5)) || _class$c;

var Redirect = mobxReact.observer(_class3 = (_temp2$3 = _class4 = function (_Component2) {
  inherits(Redirect, _Component2);

  function Redirect() {
    classCallCheck(this, Redirect);
    return possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  createClass(Redirect, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          rest = objectWithoutProperties(_props2, ["to"]);


      return React__default.createElement(reactRouterDom.Redirect, _extends({ to: configuration._getUrlObject(to) }, rest));
    }
  }]);
  return Redirect;
}(React.Component), _class4.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })]).isRequired
}, _temp2$3)) || _class3;

var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

var _class$d, _class2$2, _temp$6, _class3$1, _class4$1, _temp2$4, _class5, _class6, _class7, _temp4;

var _templateObject$8 = taggedTemplateLiteral(["\n  .__fixOverlay__{\n    & .ant-popover-arrow{\n      display: none !important;\n    }\n      \n    & .ant-popover-inner-content{\n      padding: 0 ;\n    }\n  }\n"], ["\n  .__fixOverlay__{\n    & .ant-popover-arrow{\n      display: none !important;\n    }\n      \n    & .ant-popover-inner-content{\n      padding: 0 ;\n    }\n  }\n"]),
    _templateObject2$5 = taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject3$5 = taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 2;\n  background-color: #001529;\n  height: 100% !important;\n  overflow-x: hidden;\n"], ["\n  position: fixed;\n  z-index: 2;\n  background-color: #001529;\n  height: 100% !important;\n  overflow-x: hidden;\n"]),
    _templateObject4$5 = taggedTemplateLiteral(["\n  height: 60px;\n  padding: 10px 20px;\n\n  cursor: pointer;\n"], ["\n  height: 60px;\n  padding: 10px 20px;\n\n  cursor: pointer;\n"]),
    _templateObject5$3 = taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 18px;\n  color: #ffffff;\n  padding-left: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n  word-wrap: normal;\n  width: auto;\n  will-change: opacity, paddingLeft;\n"], ["\n  font-weight: bold;\n  font-size: 18px;\n  color: #ffffff;\n  padding-left: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n  word-wrap: normal;\n  width: auto;\n  will-change: opacity, paddingLeft;\n"]),
    _templateObject6$2 = taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n"], ["\n  width: 40px;\n  height: 40px;\n"]),
    _templateObject7$2 = taggedTemplateLiteral(["\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: calc(100% + ", "px);\n  height: calc(100% - 108px);\n"], ["\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: calc(100% + ", "px);\n  height: calc(100% - 108px);\n"]),
    _templateObject8$2 = taggedTemplateLiteral(["\n  width: 100%;\n  margin: 4px 0;\n"], ["\n  width: 100%;\n  margin: 4px 0;\n"]),
    _templateObject9$1 = taggedTemplateLiteral(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  font-size: 12px;\n  display: inline-block;\n  transition: transform ease-in-out 0.3s;\n  will-change: transform;\n\n  ", ";\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  font-size: 12px;\n  display: inline-block;\n  transition: transform ease-in-out 0.3s;\n  will-change: transform;\n\n  ", ";\n"]),
    _templateObject10 = taggedTemplateLiteral(["\n      transform: rotate(180deg);\n    "], ["\n      transform: rotate(180deg);\n    "]),
    _templateObject11 = taggedTemplateLiteral(["\n      transform: rotate(0);\n    "], ["\n      transform: rotate(0);\n    "]),
    _templateObject12 = taggedTemplateLiteral(["\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  color: ", ";\n  padding: 0 30px;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n\n  &:hover {\n    ", " {\n      color: #fff !important;\n    }\n  }\n"], ["\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  color: ", ";\n  padding: 0 30px;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n\n  &:hover {\n    ", " {\n      color: #fff !important;\n    }\n  }\n"]),
    _templateObject13 = taggedTemplateLiteral(["\n  ", ";\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n  padding: 0 30px 0 30px;\n  color: ", ";\n  background-color: transparent;\n  transition: color 0.3s, background-color 0.3s;\n  will-change: color, background-color;\n  text-decoration: none !important;\n  width: 100%;\n  &:hover {\n    color: #fff;\n  }\n\n  &.active {\n    color: #ffffff;\n    background-color: ", ";\n  }\n"], ["\n  ", ";\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n  padding: 0 30px 0 30px;\n  color: ", ";\n  background-color: transparent;\n  transition: color 0.3s, background-color 0.3s;\n  will-change: color, background-color;\n  text-decoration: none !important;\n  width: 100%;\n  &:hover {\n    color: #fff;\n  }\n\n  &.active {\n    color: #ffffff;\n    background-color: ", ";\n  }\n"]),
    _templateObject14 = taggedTemplateLiteral(["\n  will-change: opacity, paddingLeft;\n"], ["\n  will-change: opacity, paddingLeft;\n"]),
    _templateObject15 = taggedTemplateLiteral(["\n  width: 20px;\n  text-align: center;\n  display: inline-block;\n"], ["\n  width: 20px;\n  text-align: center;\n  display: inline-block;\n"]),
    _templateObject16 = taggedTemplateLiteral(["\n  height: 48px;\n  text-align: center;\n  cursor: pointer;\n  color: #ffffff;\n  background-color: #002140;\n"], ["\n  height: 48px;\n  text-align: center;\n  cursor: pointer;\n  color: #ffffff;\n  background-color: #002140;\n"]),
    _templateObject17 = taggedTemplateLiteral(["\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  background-color: #001529;\n  margin-bottom: -1px;\n"], ["\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  background-color: #001529;\n  margin-bottom: -1px;\n"]),
    _templateObject18 = taggedTemplateLiteral(["\n  margin-bottom: 1px;\n  background-color: #001529;\n  padding: 0 8px;\n  height: 38px;\n  line-height: 38px;\n  min-width: 160px;\n  ", ";\n  text-decoration: none;\n  transition: all 0.3s;\n  color: #fff;\n\n  &:hover,\n  &.active {\n    color: #fff;\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  margin-bottom: 1px;\n  background-color: #001529;\n  padding: 0 8px;\n  height: 38px;\n  line-height: 38px;\n  min-width: 160px;\n  ", ";\n  text-decoration: none;\n  transition: all 0.3s;\n  color: #fff;\n\n  &:hover,\n  &.active {\n    color: #fff;\n    background-color: ", ";\n    text-decoration: none;\n  }\n"]);

styled.injectGlobal(_templateObject$8);

var SiderContainer = styled__default(Flex).attrs({
  flex: "inline-flex"
})(_templateObject2$5, item({
  shrink: 0
}));

var Container$6 = styled__default(Flex).attrs({
  direction: "column"
})(_templateObject3$5);

var Title = styled__default(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})(_templateObject4$5);

var TitleLabel = styled__default.div(_templateObject5$3);

var LogoContainer = styled__default.div(_templateObject6$2);

var RoutesContainer = styled__default.div(_templateObject7$2, getScrollbarWidth());

var RouteContainer = styled__default(Flex).attrs({
  direction: "column"
})(_templateObject8$2);

var ArrowIcon = styled__default(_Icon).attrs({
  type: "down"
})(_templateObject9$1, styledTools.ifProp("selected", styled.css(_templateObject10), styled.css(_templateObject11)));

var RouteItem = styled__default(Flex)(_templateObject12, variable.text.third, ArrowIcon);

var RouteWithNoChild = styled__default(NavLink)(_templateObject13, flex({}), variable.text.third, variable.primary);

var RouteName = styled__default(Item).attrs({
  flex: 1,
  overflow: "auto"
})(_templateObject14);

var IconContainer = styled__default.div(_templateObject15);

var CollapseContainer = styled__default(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})(_templateObject16);

var MenuContainer = styled__default(Flex).attrs({
  direction: "column"
})(_templateObject17);

var SubRouteChild = styled__default(NavLink)(_templateObject18, item({}), variable.primary);

var SiderMenuIcon = function (_Component) {
  inherits(SiderMenuIcon, _Component);

  function SiderMenuIcon() {
    classCallCheck(this, SiderMenuIcon);
    return possibleConstructorReturn(this, (SiderMenuIcon.__proto__ || Object.getPrototypeOf(SiderMenuIcon)).apply(this, arguments));
  }

  createClass(SiderMenuIcon, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          iconSize = _props.iconSize,
          icon = _props.icon;


      return React__default.createElement(
        IconContainer,
        null,
        icon ? typeof icon === "string" ? React__default.createElement(_Icon, { type: icon, style: { fontSize: iconSize } }) : React.cloneElement(icon, {
          style: {
            fontSize: iconSize
          }
        }) : React__default.createElement(_Icon, { type: "antd", style: { fontSize: iconSize } })
      );
    }
  }]);
  return SiderMenuIcon;
}(React.Component);

var RouteMenuSingle = reactRouterDom.withRouter(_class$d = (_temp$6 = _class2$2 = function (_Component2) {
  inherits(RouteMenuSingle, _Component2);

  function RouteMenuSingle() {
    classCallCheck(this, RouteMenuSingle);
    return possibleConstructorReturn(this, (RouteMenuSingle.__proto__ || Object.getPrototypeOf(RouteMenuSingle)).apply(this, arguments));
  }

  createClass(RouteMenuSingle, [{
    key: "render",
    value: function render() {
      var collapse = configuration.sider.collapse;
      var _props2 = this.props,
          icon = _props2.icon,
          name = _props2.name,
          path = _props2.path,
          iconSize = _props2.iconSize,
          opacity = _props2.opacity,
          paddingLeft = _props2.paddingLeft,
          indent = _props2.indent;


      return React__default.createElement(
        _Tooltip,
        { title: collapse ? name : null, placement: "right" },
        React__default.createElement(
          RouteWithNoChild,
          { to: path, style: { paddingLeft: indent + 30 } },
          React__default.createElement(SiderMenuIcon, { icon: icon, iconSize: iconSize }),
          React__default.createElement(
            RouteName,
            { style: { opacity: opacity, paddingLeft: paddingLeft } },
            name
          )
        )
      );
    }
  }]);
  return RouteMenuSingle;
}(React.Component), _class2$2.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  visible: PropTypes.bool,
  path: PropTypes.string,
  iconSize: PropTypes.number,
  indent: PropTypes.number
}, _class2$2.defaultProps = {
  indent: 0,
  opacity: 1
}, _temp$6)) || _class$d;

var RouteMenu = reactRouterDom.withRouter(_class3$1 = mobxReact.observer(_class3$1 = (_temp2$4 = _class4$1 = function (_Component3) {
  inherits(RouteMenu, _Component3);

  function RouteMenu(props) {
    classCallCheck(this, RouteMenu);

    var _this3 = possibleConstructorReturn(this, (RouteMenu.__proto__ || Object.getPrototypeOf(RouteMenu)).call(this, props));

    _this3.toggleShowChildren = function () {
      if (_this3.props.onOpenChange) {
        _this3.props.onOpenChange(_this3.props.name, !_this3.props.expand);
      } else {
        var showChildren = _this3.state.showChildren;

        _this3.setState({
          showChildren: !showChildren
        });
      }
    };

    _this3.state = {
      showChildren: typeof _this3.props.defaultExpand === "boolean" ? _this3.props.defaultExpand : _this3.props.defaultExpandAllMenu
    };
    return _this3;
  }

  createClass(RouteMenu, [{
    key: "render",
    value: function render() {
      var collapse = configuration.sider.collapse;
      var _props3 = this.props,
          children = _props3.children,
          icon = _props3.icon,
          name = _props3.name,
          iconSize = _props3.iconSize,
          opacity = _props3.opacity,
          paddingLeft = _props3.paddingLeft,
          indent = _props3.indent,
          expand = _props3.expand;


      var showChildren = typeof expand === "boolean" ? expand : this.state.showChildren;
      var visibleChildren = children.filter(function (child) {
        return child.visible !== false;
      });

      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          _Popover,
          {
            overlayClassName: "__fixOverlay__",
            content: collapse ? React__default.createElement(
              MenuContainer,
              null,
              visibleChildren.map(function (route) {
                return React__default.createElement(
                  SubRouteChild,
                  { key: route.name, to: route.path },
                  " ",
                  route.name,
                  " "
                );
              })
            ) : null,
            placement: "rightTop" },
          React__default.createElement(
            RouteItem,
            { onClick: collapse ? null : this.toggleShowChildren },
            React__default.createElement(SiderMenuIcon, { icon: icon, iconSize: iconSize }),
            React__default.createElement(
              RouteName,
              { style: { opacity: opacity, paddingLeft: paddingLeft } },
              name
            ),
            collapse ? null : React__default.createElement(ArrowIcon, { selected: showChildren })
          )
        ),
        React__default.createElement(
          reactSpring.Spring,
          {
            native: true,
            to: {
              height: showChildren && !collapse ? "auto" : 0,
              opacity: showChildren && !collapse ? 1 : 0
            },
            from: { height: "auto", opacity: 1 } },
          function (_ref) {
            var height = _ref.height,
                opacity = _ref.opacity;
            return React__default.createElement(
              reactSpring.animated.div,
              { style: { height: height, opacity: opacity, overflow: "hidden" } },
              visibleChildren.map(function (route) {
                return React__default.createElement(RouteMenuSingle, {
                  name: route.name,
                  path: route.path,
                  icon: route.icon,
                  key: route.name,
                  iconSize: 14,
                  paddingLeft: 4,
                  indent: 20 + indent
                });
              })
            );
          }
        )
      );
    }
  }]);
  return RouteMenu;
}(React.Component), _class4$1.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  visible: PropTypes.bool,
  path: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    visible: PropTypes.bool
  })).isRequired,
  iconSize: PropTypes.number,
  indent: PropTypes.number,
  defaultExpand: PropTypes.bool
}, _class4$1.defaultProps = {
  indent: 0
}, _temp2$4)) || _class3$1) || _class3$1;

var RouteSwitcher = reactRouterDom.withRouter(_class5 = mobxReact.observer(_class5 = function (_Component4) {
  inherits(RouteSwitcher, _Component4);

  function RouteSwitcher() {
    classCallCheck(this, RouteSwitcher);
    return possibleConstructorReturn(this, (RouteSwitcher.__proto__ || Object.getPrototypeOf(RouteSwitcher)).apply(this, arguments));
  }

  createClass(RouteSwitcher, [{
    key: "render",
    value: function render() {
      var _props4 = this.props,
          route = _props4.route,
          paddingLeft = _props4.paddingLeft,
          opacity = _props4.opacity,
          iconSize = _props4.iconSize,
          defaultExpandAllMenu = _props4.defaultExpandAllMenu,
          openKeys = _props4.openKeys,
          onOpenChange = _props4.onOpenChange;

      if (!route.children || route.children.length === 0) {
        return React__default.createElement(RouteMenuSingle, {
          name: route.name,
          path: route.path,
          icon: route.icon,
          iconSize: iconSize,
          paddingLeft: paddingLeft,
          opacity: opacity
        });
      } else {
        return React__default.createElement(RouteMenu, {
          defaultExpandAllMenu: defaultExpandAllMenu,
          name: route.name,
          icon: route.icon,
          children: route.children,
          iconSize: iconSize,
          paddingLeft: paddingLeft,
          opacity: opacity,
          defaultExpand: route.defaultExpand,
          onOpenChange: onOpenChange,
          expand: openKeys ? openKeys.includes(route.name) : undefined
        });
      }
    }
  }]);
  return RouteSwitcher;
}(React.Component)) || _class5) || _class5;

var _default$8 = reactRouterDom.withRouter(_class6 = mobxReact.observer(_class6 = (_temp4 = _class7 = function (_Component5) {
  inherits(_default, _Component5);

  function _default() {
    var _ref2;

    var _temp3, _this5, _ret;

    classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp3 = (_this5 = possibleConstructorReturn(this, (_ref2 = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref2, [this].concat(args))), _this5), _this5.state = {
      offsetX: 0
    }, _this5.listenWindowScroll = function () {
      var offsetX = window.pageXOffset || document.documentElement.scrollLeft;
      if (offsetX !== _this5.state.offsetX) {
        _this5.setState({
          offsetX: Math.min(200, offsetX)
        });
      }
    }, _this5.redirectToRoot = function () {
      var root = configuration.sider.root;

      configuration.push(root);
    }, _temp3), possibleConstructorReturn(_this5, _ret);
  }

  createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.listenWindowScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.listenWindowScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _configuration$sider = configuration.sider,
          logo = _configuration$sider.logo,
          title = _configuration$sider.title,
          collapse = _configuration$sider.collapse;
      var _props5 = this.props,
          routes = _props5.routes,
          defaultExpandAllMenu = _props5.defaultExpandAllMenu,
          onOpenChange = _props5.onOpenChange,
          openKeys = _props5.openKeys;
      var offsetX = this.state.offsetX;


      if (configuration.fullScreen) return null;

      return React__default.createElement(
        reactSpring.Spring,
        {
          from: { width: 200, opacity: 1, iconSize: 14 },
          to: {
            width: collapse ? 80 : 200,
            opacity: collapse ? 0 : 1,
            paddingLeft: collapse ? 0 : 4,
            iconSize: collapse ? 16 : 14
          } },
        function (_ref3) {
          var width = _ref3.width,
              paddingLeft = _ref3.paddingLeft,
              opacity = _ref3.opacity,
              iconSize = _ref3.iconSize;
          return React__default.createElement(
            SiderContainer,
            { style: { width: width } },
            React__default.createElement(
              Container$6,
              { style: { width: width, left: -offsetX } },
              React__default.createElement(
                Title,
                { onClick: _this6.redirectToRoot },
                logo ? React__default.createElement(
                  LogoContainer,
                  null,
                  React__default.createElement("img", { src: logo, style: { width: 40, height: 40 }, alt: "logo" })
                ) : null,
                React__default.createElement(
                  TitleLabel,
                  { style: { paddingLeft: paddingLeft, opacity: opacity } },
                  title
                )
              ),
              React__default.createElement(
                RoutesContainer,
                null,
                routes.filter(function (route) {
                  return route.visible !== false;
                }).map(function (route) {
                  return React__default.createElement(
                    RouteContainer,
                    { key: route.name },
                    React__default.createElement(RouteSwitcher, {
                      defaultExpandAllMenu: defaultExpandAllMenu,
                      route: route,
                      iconSize: iconSize,
                      paddingLeft: paddingLeft,
                      opacity: opacity,
                      onOpenChange: onOpenChange,
                      openKeys: openKeys
                    })
                  );
                })
              ),
              React__default.createElement(
                CollapseContainer,
                {
                  onClick: function onClick() {
                    return collapse ? configuration.expandSider() : configuration.collapseSider();
                  } },
                React__default.createElement(_Icon, { type: collapse ? "right" : "left" })
              )
            )
          );
        }
      );
    }
  }]);
  return _default;
}(React.Component), _class7.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    visible: PropTypes.bool,
    defaultExpand: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      visible: PropTypes.bool
    }))
  })),
  defaultExpandAllMenu: PropTypes.bool
}, _temp4)) || _class6) || _class6;

var _class$e;

var _default$9 = reactRouterDom.withRouter(_class$e = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    classCallCheck(this, _default);
    return possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      configuration.__connectHistory(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      configuration.__connectHistory(null);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return _default;
}(React.Component)) || _class$e;

var _class2$3, _class3$2, _temp2$5;

var _templateObject$9 = taggedTemplateLiteral(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.66);\n  top: 0;\n  left: 0;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.66);\n  top: 0;\n  left: 0;\n"]),
    _templateObject2$6 = taggedTemplateLiteral(["\n  min-height: 100%;\n  min-width: 960px;\n"], ["\n  min-height: 100%;\n  min-width: 960px;\n"]),
    _templateObject3$6 = taggedTemplateLiteral(["\n  overflow: auto;\n  ", ";\n"], ["\n  overflow: auto;\n  ", ";\n"]),
    _templateObject4$6 = taggedTemplateLiteral(["\n  height: 64px;\n  padding: 0 30px;\n  background-color: #fff;\n  position: relative;\n  width: 100%;\n\n  ", ";\n"], ["\n  height: 64px;\n  padding: 0 30px;\n  background-color: #fff;\n  position: relative;\n  width: 100%;\n\n  ", ";\n"]),
    _templateObject5$4 = taggedTemplateLiteral(["\n      z-index: 999;\n      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);\n    "], ["\n      z-index: 999;\n      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);\n    "]),
    _templateObject6$3 = taggedTemplateLiteral([""], [""]),
    _templateObject7$3 = taggedTemplateLiteral(["\n  ", ";\n  padding: 20px 30px;\n  background-color: #f0f2f5;\n\n  & > .__mogul__card {\n    ", ";\n  }\n"], ["\n  ", ";\n  padding: 20px 30px;\n  background-color: #f0f2f5;\n\n  & > .__mogul__card {\n    ", ";\n  }\n"]),
    _templateObject8$3 = taggedTemplateLiteral(["\n  background: #f0f2f5;\n  padding: 24px 50px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n"], ["\n  background: #f0f2f5;\n  padding: 24px 50px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n"]);

var FullPageOverlay = styled__default(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})(_templateObject$9);

var RootContainer = styled__default(Flex).attrs({})(_templateObject2$6);

var AppContainer = styled__default(Item).attrs({
  flex: 1,
  shrink: 0
})(_templateObject3$6, flex({
  direction: "column"
}));

var Header = styled__default.div(_templateObject4$6, styledTools.ifProp("fixingPos", styled.css(_templateObject5$4), styled.css(_templateObject6$3)));

var Content = styled__default(Flex).attrs({ direction: "column" })(_templateObject7$3, item({ flex: 1, shrink: 0 }), item({ flex: 1 }));

var Footer = styled__default.div(_templateObject8$3);

var HeaderComp = function (_React$Component) {
  inherits(HeaderComp, _React$Component);

  function HeaderComp() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, HeaderComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HeaderComp.__proto__ || Object.getPrototypeOf(HeaderComp)).call.apply(_ref, [this].concat(args))), _this), _this.last_known_scroll_position = 0, _this.ticking = false, _this.state = {
      scrollY: 0
    }, _this.listenWindowScroll = function () {
      _this.last_known_scroll_position = window.scrollY;
      if (!_this.ticking) {
        window.requestAnimationFrame(function () {
          _this.fixHeader(_this.last_known_scroll_position);
          _this.ticking = false;
        });

        _this.ticking = true;
      }
    }, _this.fixHeader = function (scrollY) {
      if (scrollY === _this.state.scrollY) return;
      // macos 浏览器允许向负方向滚动, 故设置最小Y滚动为 0
      _this.setState({ scrollY: Math.max(0, scrollY) });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(HeaderComp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.listenWindowScroll);
      if (this.props.fixHeader) {
        this.listenWindowScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.listenWindowScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var fixHeader = this.props.fixHeader;
      var scrollY = this.state.scrollY;

      return React__default.createElement(
        Header,
        { fixingPos: fixHeader ? scrollY : null, style: { top: fixHeader ? scrollY : 0 } },
        this.props.children
      );
    }
  }]);
  return HeaderComp;
}(React__default.Component);

var App = mobxReact.observer(_class2$3 = (_temp2$5 = _class3$2 = function (_Component) {
  inherits(App, _Component);

  function App() {
    classCallCheck(this, App);
    return possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  createClass(App, [{
    key: "renderRoutes",
    value: function renderRoutes(routes) {
      var _this3 = this;

      var routeComponents = [];

      routes.forEach(function (_ref2) {
        var type = _ref2.type,
            _ref2$name = _ref2.name,
            name = _ref2$name === undefined ? "" : _ref2$name,
            _ref2$children = _ref2.children,
            children = _ref2$children === undefined ? [] : _ref2$children,
            _ref2$visible = _ref2.visible,
            _ref2$disabled = _ref2.disabled,
            route = objectWithoutProperties(_ref2, ["type", "name", "children", "visible", "disabled"]);

        if (children.length > 0) {
          routeComponents = [].concat(toConsumableArray(routeComponents), toConsumableArray(_this3.renderRoutes(children)));
        } else {
          switch (type) {
            case "redirect":
              routeComponents.push(React__default.createElement(Redirect, _extends({ key: "redirect" }, route)));
              break;
            case "route":
            default:
              routeComponents.push(React__default.createElement(reactRouterDom.Route, _extends({ key: name ? name : route.path }, route)));
              break;
          }
        }
      });

      return routeComponents;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          routes = _props.routes,
          children = _props.children,
          footer = _props.footer,
          header = _props.header,
          fixHeader = _props.fixHeader,
          style = _props.style,
          defaultExpandAllMenu = _props.defaultExpandAllMenu,
          openKeys = _props.openKeys,
          onOpenChange = _props.onOpenChange;

      var renderRoutes = routes ? routes : children();

      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          reactRouterDom.BrowserRouter,
          null,
          React__default.createElement(
            mobxReact.Provider,
            { mogul: configuration },
            React__default.createElement(
              RootContainer,
              { style: style },
              React__default.createElement(_default$9, null),
              React__default.createElement(_default$8, {
                onOpenChange: onOpenChange,
                openKeys: openKeys,
                defaultExpandAllMenu: defaultExpandAllMenu,
                routes: renderRoutes.filter(function (route) {
                  return route.type !== "redirect";
                })
              }),
              React__default.createElement(
                AppContainer,
                { direction: "column", flex: 1 },
                header && !configuration.fullScreen ? React__default.createElement(
                  HeaderComp,
                  { fixHeader: fixHeader },
                  header
                ) : null,
                React__default.createElement(
                  Content,
                  null,
                  React__default.createElement(
                    reactRouterDom.Switch,
                    null,
                    this.renderRoutes(renderRoutes)
                  )
                ),
                footer && !configuration.fullScreen ? React__default.createElement(
                  Footer,
                  { style: { textAlign: "center" } },
                  footer
                ) : null
              )
            )
          )
        ),
        React__default.createElement(
          reactSpring.Transition,
          {
            items: configuration.fullPageLoading,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 } },
          function (show) {
            return show && function (_ref3) {
              var opacity = _ref3.opacity;
              return React__default.createElement(
                FullPageOverlay,
                { style: { opacity: opacity } },
                React__default.createElement(_default$4, { size: 100 })
              );
            };
          }
        )
      );
    }
  }]);
  return App;
}(React.Component), _class3$2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func]),
  footer: PropTypes.any,
  header: PropTypes.any,
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array,
    path: PropTypes.string,
    render: PropTypes.func,
    icon: PropTypes.any,
    defaultExpand: PropTypes.bool
  })),
  fixHeader: PropTypes.bool,
  defaultExpandAllMenu: PropTypes.bool,
  openKeys: PropTypes.array,
  style: PropTypes.object,
  onOpenChange: PropTypes.func
}, _class3$2.defaultProps = {
  fixHeader: false,
  defaultExpandAllMenu: true
}, _temp2$5)) || _class2$3;

var _dec$5, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$2, _class$f, _descriptor$2, _descriptor2$2, _descriptor3$1, _class2$4, _temp2$6;

var _templateObject$a = taggedTemplateLiteral(["\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.3s;\n\n  &.disabled {\n    background: #f5f5f5;\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n  }\n"], ["\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  transition: color 0.3s;\n\n  &.disabled {\n    background: #f5f5f5;\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n  }\n"]),
    _templateObject2$7 = taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  height: 20px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 100%;\n  padding: 0 12px;\n"], ["\n  position: absolute;\n  left: 0;\n  height: 20px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 100%;\n  padding: 0 12px;\n"]),
    _templateObject3$7 = taggedTemplateLiteral(["\n  background-color: transparent !important;\n  cursor: pointer;\n  width: 100%;\n  position: static;\n"], ["\n  background-color: transparent !important;\n  cursor: pointer;\n  width: 100%;\n  position: static;\n"]),
    _templateObject4$7 = taggedTemplateLiteral(["\n  overflow: auto;\n"], ["\n  overflow: auto;\n"]),
    _templateObject5$5 = taggedTemplateLiteral(["\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n"], ["\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n"]),
    _templateObject6$4 = taggedTemplateLiteral(["\n  padding: 10px 5px;\n"], ["\n  padding: 10px 5px;\n"]),
    _templateObject7$4 = taggedTemplateLiteral(["\n  width: 120px;\n  border-right: 1px solid #efefef;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"], ["\n  width: 120px;\n  border-right: 1px solid #efefef;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]),
    _templateObject8$4 = taggedTemplateLiteral(["\n  position: relative;\n  padding-right: 24px;\n  padding: 5px 12px;\n  line-height: 22px;\n  height: 33px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.3s;\n\n  &.active {\n    background: #f5f5f5;\n    font-weight: 600;\n  }\n  ", ";\n"], ["\n  position: relative;\n  padding-right: 24px;\n  padding: 5px 12px;\n  line-height: 22px;\n  height: 33px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.3s;\n\n  &.active {\n    background: #f5f5f5;\n    font-weight: 600;\n  }\n  ", ";\n"]),
    _templateObject9$2 = taggedTemplateLiteral(["\n      background-color: #efefef;\n      opacity: 0.6;\n      cursor: not-allowed;\n    "], ["\n      background-color: #efefef;\n      opacity: 0.6;\n      cursor: not-allowed;\n    "]),
    _templateObject10$1 = taggedTemplateLiteral(["\n      &:hover {\n        background: #e6f7ff;\n      }\n    "], ["\n      &:hover {\n        background: #e6f7ff;\n      }\n    "]),
    _templateObject11$1 = taggedTemplateLiteral(["\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  ", " {\n    border-top: 1px solid #efefef;\n  }\n"], ["\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  ", " {\n    border-top: 1px solid #efefef;\n  }\n"]),
    _templateObject12$1 = taggedTemplateLiteral(["\n  font-size: 12px;\n  position: absolute;\n  top: 10px;\n  right: 8px;\n"], ["\n  font-size: 12px;\n  position: absolute;\n  top: 10px;\n  right: 8px;\n"]),
    _templateObject13$1 = taggedTemplateLiteral(["\n  position: absolute;\n  right: 7px;\n  top: 9px;\n  z-index: 2;\n"], ["\n  position: absolute;\n  right: 7px;\n  top: 9px;\n  z-index: 2;\n"]);

function _initDefineProp$2(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$4(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Container$7 = styled__default.div(_templateObject$a);

var InnerLabel = styled__default.span(_templateObject2$7);

var StyledInput$1 = styled__default(_Input)(_templateObject3$7);

var OptionsContainer = styled__default(Flex)(_templateObject4$7);

var OverlayContainer = styled__default.div(_templateObject5$5);

var SearchContainer = styled__default.div(_templateObject6$4);

var OptionSubContainer = styled__default.div(_templateObject7$4);

var OptionItem = styled__default(Item).attrs({
  overflow: "auto"
})(_templateObject8$4, styledTools.ifProp("disabled", styled.css(_templateObject9$2), styled.css(_templateObject10$1)));

var SearchOptionsContainer = styled__default.div(_templateObject11$1, OptionItem);

var ArrowIcon$1 = styled__default(_Icon).attrs({
  type: "right"
})(_templateObject12$1);

var LoadingSpin = styled__default(_default$4).attrs({
  size: 14
})(_templateObject13$1);

var _default$a = (_dec$5 = mobx.action.bound, _dec2$2 = mobx.action.bound, _dec3$2 = mobx.action.bound, _dec4$2 = mobx.action.bound, _dec5$2 = mobx.action.bound, _dec6$2 = mobx.action.bound, (_class$f = (_temp2$6 = _class2$4 = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expandKeys: [],
      searchStr: ""
    }, _initDefineProp$2(_this, "expandKeys", _descriptor$2, _this), _initDefineProp$2(_this, "searchStr", _descriptor2$2, _this), _initDefineProp$2(_this, "searchOptions", _descriptor3$1, _this), _this.renderOptions = function () {
      var showSearch = _this.props.showSearch;


      return React__default.createElement(
        OverlayContainer,
        null,
        showSearch ? React__default.createElement(
          React.Fragment,
          null,
          React__default.createElement(
            SearchContainer,
            { style: { minWidth: _this.getContainerWidth() } },
            React__default.createElement(
              mobxReact.Observer,
              null,
              function () {
                return React__default.createElement(_Input.Search, {
                  onChange: _this.onSearchChange,
                  value: _this.searchStr,
                  style: { width: "100%" }
                });
              }
            )
          ),
          _this.searchStr ? React__default.createElement(
            SearchOptionsContainer,
            { style: { maxWidth: _this.getContainerWidth() } },
            React__default.createElement(
              "div",
              {
                style: {
                  color: "#333",
                  position: "relative",
                  height: 30,
                  padding: 5
                } },
              "\u641C\u7D22\u7ED3\u679C: \u5171",
              _this.searchOptions.length,
              "\u4E2A",
              React__default.createElement(_Icon, {
                type: "close-circle",
                onClick: _this.hideSearchMode,
                style: { position: "absolute", right: 10, cursor: "pointer", top: 9 }
              })
            ),
            _this.searchOptions.map(function (option) {
              return React__default.createElement(
                OptionItem,
                {
                  onClick: function onClick() {
                    _this.setSearchResult(option.value, option);
                  },
                  key: option.value,
                  title: option.label },
                option.label
              );
            })
          ) : null
        ) : null,
        showSearch && _this.searchStr ? null : React__default.createElement(
          OptionsContainer,
          null,
          React__default.createElement(
            mobxReact.Observer,
            null,
            function () {
              return _this.viewOptions.map(function (group) {
                return React__default.createElement(
                  OptionSubContainer,
                  { key: group.level },
                  group.data.map(function (option) {
                    return React__default.createElement(
                      OptionItem,
                      {
                        className: option.children && option.children.length > 0 && option.__expand__ ? "active" : "",
                        key: option.value,
                        onClick: function onClick() {
                          return !option.disabled ? _this.setSelectedKey(group.level, option.value) : null;
                        },
                        onMouseEnter: function onMouseEnter() {
                          return _this.setExpandKey(group.level, option.value);
                        },
                        disabled: option.disabled,
                        title: option.label },
                      React__default.createElement(
                        "span",
                        null,
                        option.label
                      ),
                      option.children && option.children.length > 0 ? React__default.createElement(ArrowIcon$1, null) : null
                    );
                  })
                );
              });
            }
          )
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default$$1, [{
    key: "onSearchChange",
    value: function onSearchChange(_ref2) {
      var _this2 = this;

      var value = _ref2.target.value;

      this.searchStr = value;
      var result = this.props.onSearch(value);
      if (result instanceof Promise) {
        result.then(mobx.action("get-options", function (options) {
          _this2.searchOptions = options;
        }));
      } else {
        this.searchOptions = result;
      }
    }
  }, {
    key: "getContainerWidth",
    value: function getContainerWidth() {
      return this.container.getBoundingClientRect().width;
    }
  }, {
    key: "hideSearchMode",
    value: function hideSearchMode() {
      var _this3 = this;

      setTimeout(mobx.action("hide-search-mode", function () {
        _this3.searchStr = "";
        _this3.searchOptions = [];
      }), 100);
    }
  }, {
    key: "setExpandKey",
    value: function setExpandKey(level, key) {
      var keepKeys = this.expandKeys.slice(0, level);

      this.expandKeys = [].concat(toConsumableArray(keepKeys), [key]);
    }
  }, {
    key: "setSelectedKey",
    value: function setSelectedKey(level, key) {
      var keepKeys = this.expandKeys.slice(0, level);

      this.props.onChange([].concat(toConsumableArray(keepKeys), [key]));

      this.overlay.getOverlayApi().closeOverlay();

      this.container.focus();
    }
  }, {
    key: "setSearchResult",
    value: function setSearchResult(key, option) {

      this.props.onSearchSet(key, option);

      this.overlay.getOverlayApi().closeOverlay();

      this.container.focus();
    }
  }, {
    key: "onOverlayVisible",
    value: function onOverlayVisible(visible) {
      if (!visible && this.props.showSearch) {
        this.searchOptions = [];
        this.searchStr = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          value = _props.value,
          options = _props.options,
          disabled = _props.disabled,
          placeholder = _props.placeholder,
          style = _props.style,
          loading = _props.loading;

      var currentOptions = options;
      var displayLabelArr = value.map(function (val) {
        var selectOption = currentOptions.find(function (option) {
          return option.value === val;
        });

        currentOptions = [];

        if (selectOption) {
          if (selectOption.children) {
            currentOptions = selectOption.children;
          }
          return selectOption.label;
        } else {
          return " ";
        }
      });

      return React__default.createElement(
        Overlay,
        {
          ref: function ref(overlay) {
            return _this4.overlay = overlay;
          },
          arrow: false,
          animation: true,
          autoClose: true,
          trigger: "click",
          disabled: disabled,
          overlay: this.renderOptions,
          placementVariation: "start",
          zIndex: 9999,
          onVisibleChange: this.onOverlayVisible,
          offset: 4 },
        React__default.createElement(
          Container$7,
          {
            tabIndex: -1,
            className: disabled ? "disabled" : "",
            innerRef: function innerRef(container) {
              return _this4.container = container;
            },
            style: style },
          React__default.createElement(
            InnerLabel,
            null,
            displayLabelArr.join(" > ")
          ),
          React__default.createElement(StyledInput$1, {
            disabled: disabled,
            autoComplete: "off",
            readOnly: true,
            placeholder: value.length === 0 ? placeholder : null
          }),
          loading ? React__default.createElement(LoadingSpin, null) : null
        )
      );
    }
  }, {
    key: "viewOptions",
    get: function get$$1() {
      var _this5 = this;

      var options = this.props.options;


      if (this.expandKeys.length === 0) {
        return [{
          level: 0,
          data: options.map(function (opt) {
            return _extends({}, opt, {
              __expand__: false
            });
          })
        }];
      }

      var result = [];

      var currentOptions = options;

      var _loop = function _loop(_i) {
        var nextOptions = [];

        var data = currentOptions.map(function (opt) {
          var expand = opt.value === _this5.expandKeys[_i];

          if (expand) {
            nextOptions = opt.children ? opt.children : [];
          }

          return _extends({}, opt, { __expand__: expand });
        });

        result.push({
          level: _i,
          data: data
        });

        currentOptions = nextOptions;

        if (currentOptions.length === 0) {
          //break;
          _i = 9999;
        }
        i = _i;
      };

      for (var i = 0; i <= this.expandKeys.length; i++) {
        _loop(i);
      }
      return result;
    }
  }]);
  return _default$$1;
}(React.Component), _class2$4.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.array
  })).isRequired,
  searchOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })),
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  showSearch: PropTypes.bool,
  onSearch: PropTypes.func,
  onSearchSet: PropTypes.func
}, _class2$4.defaultProps = {
  style: {},
  value: [],
  loading: false,
  showSearch: false,
  searchOptions: []
}, _temp2$6), (_descriptor$2 = _applyDecoratedDescriptor$4(_class$f.prototype, "expandKeys", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2$2 = _applyDecoratedDescriptor$4(_class$f.prototype, "searchStr", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3$1 = _applyDecoratedDescriptor$4(_class$f.prototype, "searchOptions", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor$4(_class$f.prototype, "viewOptions", [mobx.computed], Object.getOwnPropertyDescriptor(_class$f.prototype, "viewOptions"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "onSearchChange", [_dec$5], Object.getOwnPropertyDescriptor(_class$f.prototype, "onSearchChange"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "hideSearchMode", [_dec2$2], Object.getOwnPropertyDescriptor(_class$f.prototype, "hideSearchMode"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "setExpandKey", [_dec3$2], Object.getOwnPropertyDescriptor(_class$f.prototype, "setExpandKey"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "setSelectedKey", [_dec4$2], Object.getOwnPropertyDescriptor(_class$f.prototype, "setSelectedKey"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "setSearchResult", [_dec5$2], Object.getOwnPropertyDescriptor(_class$f.prototype, "setSearchResult"), _class$f.prototype), _applyDecoratedDescriptor$4(_class$f.prototype, "onOverlayVisible", [_dec6$2], Object.getOwnPropertyDescriptor(_class$f.prototype, "onOverlayVisible"), _class$f.prototype)), _class$f));

var _dec$6, _dec2$3, _dec3$3, _dec4$3, _dec5$3, _dec6$3, _dec7$2, _dec8$2, _dec9$2, _dec10$2, _dec11$2, _dec12$2, _dec13$1, _dec14$1, _dec15$1, _class$g, _descriptor$3, _descriptor2$3, _descriptor3$2, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1;

function _initDefineProp$3(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$5(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var TableStore = (_dec$6 = mobx.computed.struct, _dec2$3 = mobx.computed.struct, _dec3$3 = mobx.computed.struct, _dec4$3 = mobx.computed.struct, _dec5$3 = mobx.action.bound, _dec6$3 = mobx.action.bound, _dec7$2 = mobx.action.bound, _dec8$2 = mobx.action.bound, _dec9$2 = mobx.action.bound, _dec10$2 = mobx.action.bound, _dec11$2 = mobx.action.bound, _dec12$2 = mobx.action.bound, _dec13$1 = mobx.action.bound, _dec14$1 = mobx.action.bound, _dec15$1 = mobx.action.bound, (_class$g = function () {
  function TableStore(_) {
    classCallCheck(this, TableStore);

    _initDefineProp$3(this, "props", _descriptor$3, this);

    _initDefineProp$3(this, "unControlPage", _descriptor2$3, this);

    _initDefineProp$3(this, "unControlSize", _descriptor3$2, this);

    _initDefineProp$3(this, "rowMeasureMap", _descriptor4$1, this);

    _initDefineProp$3(this, "headerMeasure", _descriptor5$1, this);

    this.mainScrollContainer = null;
    this.fixLeftContainer = null;
    this.fixRightContainer = null;
    this.headerContainer = null;

    _initDefineProp$3(this, "highlightRowId", _descriptor6$1, this);

    _initDefineProp$3(this, "scrollTopPos", _descriptor7$1, this);

    _initDefineProp$3(this, "scrollLeftPos", _descriptor8$1, this);

    this.props = _;
  }

  createClass(TableStore, [{
    key: "updateProps",
    value: function updateProps(newProps) {
      this.props = newProps;
    }
  }, {
    key: "unControlPageChange",
    value: function unControlPageChange(page, pageSize) {
      this.unControlSize = pageSize;
      this.unControlPage = page;
    }
  }, {
    key: "unControlPageSizeChange",
    value: function unControlPageSizeChange(current, size) {
      this.unControlSize = size;
      // 不论第几页, 返回第一页;
      this.unControlPage = 1;
    }
  }, {
    key: "updateRowMeasure",
    value: function updateRowMeasure(rowData, contentRect) {
      this.rowMeasureMap.set(rowData[this.rowKey], contentRect.bounds);
    }
  }, {
    key: "updateHeaderMeasure",
    value: function updateHeaderMeasure(contentRect) {
      this.headerMeasure = contentRect.bounds;
    }
  }, {
    key: "updateScrollLeftPos",
    value: function updateScrollLeftPos(scrollLeftPos) {
      var _this = this;

      this.scrollLeftPos = scrollLeftPos;

      if (!this.updateScrollLeftPos.ticking) {
        window.requestAnimationFrame(function () {
          _this._updateContainerPos(_this.headerContainer, "left");
          _this._updateContainerPos(_this.mainScrollContainer, "left");
          _this.updateScrollLeftPos.ticking = false;
        });
        this.updateScrollLeftPos.ticking = true;
      }
    }
  }, {
    key: "updateScrollTopPos",
    value: function updateScrollTopPos(scrollTopPos) {
      var _this2 = this;

      this.scrollTopPos = scrollTopPos;

      if (!this.updateScrollTopPos.ticking) {
        window.requestAnimationFrame(function () {
          _this2._updateContainerPos(_this2.mainScrollContainer, "top");
          _this2._updateContainerPos(_this2.fixLeftContainer, "top");
          _this2._updateContainerPos(_this2.fixRightContainer, "top");
          _this2.updateScrollTopPos.ticking = false;
        });
        this.updateScrollTopPos.ticking = true;
      }
    }
  }, {
    key: "registryContainer",
    value: function registryContainer(type, dom) {
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
        case "headerContainer":
          this.headerContainer = dom;
          break;
        default:
          return null;
      }
    }
  }, {
    key: "_updateContainerPos",
    value: function _updateContainerPos(dom, type) {
      if (!dom) return;
      if (type === "top") {
        if (dom.scrollTop !== this.scrollTopPos) {
          dom.scrollTop = this.scrollTopPos;
        }
      } else if (type === "left") {
        if (dom.scrollLeft !== this.scrollLeftPos) {
          dom.scrollLeft = this.scrollLeftPos;
        }
      }
    }
  }, {
    key: "setHighlightRowId",
    value: function setHighlightRowId(id) {
      this.highlightRowId = id;
    }
  }, {
    key: "resetTableState",
    value: function resetTableState() {
      this.highlightRowId = null;

      this.updateScrollLeftPos(0);
      this.updateScrollTopPos(0);
    }
  }, {
    key: "columnTypes",
    get: function get$$1() {
      var fixLeftColumns = [];

      var fixRightColumns = [];

      var middleColumns = [];
      this.props.columns.forEach(function (column) {
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
        fixLeftColumns: fixLeftColumns,
        fixRightColumns: fixRightColumns,
        middleColumns: middleColumns
      };
    }
  }, {
    key: "columns",
    get: function get$$1() {
      return [].concat(toConsumableArray(this.columnTypes.fixLeftColumns), toConsumableArray(this.columnTypes.middleColumns), toConsumableArray(this.columnTypes.fixRightColumns));
    }
  }, {
    key: "fixedLeftColumns",
    get: function get$$1() {
      return this.columnTypes.fixLeftColumns;
    }
  }, {
    key: "fixedRightColumns",
    get: function get$$1() {
      return this.columnTypes.fixRightColumns;
    }
  }, {
    key: "fixedLeftColumnsWidth",
    get: function get$$1() {
      return this.fixedLeftColumns.map(function (_ref) {
        var width = _ref.width;
        return width;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "fixedRightColumnsWidth",
    get: function get$$1() {
      return this.fixedRightColumns.map(function (_ref2) {
        var width = _ref2.width;
        return width;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "bordered",
    get: function get$$1() {
      return this.props.bordered;
    }
  }, {
    key: "viewData",
    get: function get$$1() {
      if (!this.useControlPagination) {
        return this.props.data.slice((this.unControlPage - 1) * this.unControlSize, this.unControlPage * this.unControlSize);
      }
      return this.props.data;
    }
  }, {
    key: "unControlTotal",
    get: function get$$1() {
      return this.props.data.length;
    }
  }, {
    key: "rowKey",
    get: function get$$1() {
      return this.props.rowKey;
    }
  }, {
    key: "scrollY",
    get: function get$$1() {
      return this.props.scrollY ? this.props.scrollY : undefined;
    }
  }, {
    key: "scrollX",
    get: function get$$1() {
      return this.props.scrollX ? this.props.scrollX : undefined;
    }
  }, {
    key: "headerHeight",
    get: function get$$1() {
      return this.props.headerHeight;
    }
  }, {
    key: "rowHeight",
    get: function get$$1() {
      return this.props.rowHeight;
    }
  }, {
    key: "fixHeader",
    get: function get$$1() {
      return this.props.fixHeader;
    }
  }, {
    key: "showHeader",
    get: function get$$1() {
      return this.props.showHeader;
    }
  }, {
    key: "headerMinHeight",
    get: function get$$1() {
      return this.props.headerMinHeight;
    }
  }, {
    key: "size",
    get: function get$$1() {
      if (this.props.size) {
        return this.props.size;
      }

      return configuration.tableProps.size;
    }
  }, {
    key: "isLoading",
    get: function get$$1() {
      return this.props.loading;
    }
  }, {
    key: "header",
    get: function get$$1() {
      var header = [];
      this.columns.forEach(function (column) {
        header.push(column);
      });

      return header;
    }
  }, {
    key: "useControlPagination",
    get: function get$$1() {
      return this.props.pagination !== true;
    }
  }, {
    key: "pagination",
    get: function get$$1() {
      if (this.props.pagination === false) return false;
      if (this.props.pagination === true) return {
        pageSize: this.unControlSize,
        onChange: this.unControlPageChange,
        onShowSizeChange: this.unControlPageSizeChange
      };
      // 用户设置了 pagination, 故所有参数 按照 antd 设置
      return mobx.toJS(this.props.pagination);
    }
  }, {
    key: "subTableKey",
    get: function get$$1() {
      return this.props.subTableKey;
    }
  }, {
    key: "rowSelectKey",
    get: function get$$1() {
      return this.props.rowSelectKey;
    }
  }, {
    key: "draggable",
    get: function get$$1() {
      return this.props.draggable;
    }
  }]);
  return TableStore;
}(), (_descriptor$3 = _applyDecoratedDescriptor$5(_class$g.prototype, "props", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2$3 = _applyDecoratedDescriptor$5(_class$g.prototype, "unControlPage", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor3$2 = _applyDecoratedDescriptor$5(_class$g.prototype, "unControlSize", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor4$1 = _applyDecoratedDescriptor$5(_class$g.prototype, "rowMeasureMap", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor5$1 = _applyDecoratedDescriptor$5(_class$g.prototype, "headerMeasure", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6$1 = _applyDecoratedDescriptor$5(_class$g.prototype, "highlightRowId", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7$1 = _applyDecoratedDescriptor$5(_class$g.prototype, "scrollTopPos", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor8$1 = _applyDecoratedDescriptor$5(_class$g.prototype, "scrollLeftPos", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _applyDecoratedDescriptor$5(_class$g.prototype, "columnTypes", [_dec$6], Object.getOwnPropertyDescriptor(_class$g.prototype, "columnTypes"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "columns", [_dec2$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "columns"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "fixedLeftColumns", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "fixedLeftColumns"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "fixedRightColumns", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "fixedRightColumns"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "fixedLeftColumnsWidth", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "fixedLeftColumnsWidth"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "fixedRightColumnsWidth", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "fixedRightColumnsWidth"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "bordered", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "bordered"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "viewData", [_dec3$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "viewData"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "unControlTotal", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "unControlTotal"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "rowKey", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "rowKey"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "scrollY", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "scrollY"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "scrollX", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "scrollX"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "headerHeight", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "headerHeight"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "rowHeight", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "rowHeight"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "fixHeader", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "fixHeader"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "showHeader", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "showHeader"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "headerMinHeight", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "headerMinHeight"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "size", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "size"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "isLoading", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "isLoading"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "header", [_dec4$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "header"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "useControlPagination", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "useControlPagination"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "pagination", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "pagination"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "subTableKey", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "subTableKey"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "rowSelectKey", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "rowSelectKey"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "draggable", [mobx.computed], Object.getOwnPropertyDescriptor(_class$g.prototype, "draggable"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "updateProps", [_dec5$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "updateProps"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "unControlPageChange", [_dec6$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "unControlPageChange"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "unControlPageSizeChange", [_dec7$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "unControlPageSizeChange"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "updateRowMeasure", [_dec8$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "updateRowMeasure"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "updateHeaderMeasure", [_dec9$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "updateHeaderMeasure"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "updateScrollLeftPos", [_dec10$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "updateScrollLeftPos"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "updateScrollTopPos", [_dec11$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "updateScrollTopPos"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "registryContainer", [_dec12$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "registryContainer"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "_updateContainerPos", [_dec13$1], Object.getOwnPropertyDescriptor(_class$g.prototype, "_updateContainerPos"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "setHighlightRowId", [_dec14$1], Object.getOwnPropertyDescriptor(_class$g.prototype, "setHighlightRowId"), _class$g.prototype), _applyDecoratedDescriptor$5(_class$g.prototype, "resetTableState", [_dec15$1], Object.getOwnPropertyDescriptor(_class$g.prototype, "resetTableState"), _class$g.prototype)), _class$g));

/* eslint-disable */

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
}(!window["safari"] || typeof safari !== "undefined" && safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/!!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

var _dec$7, _class$h, _dec2$4, _class2$5;

var _templateObject$b = taggedTemplateLiteral(["\n  color: #333;\n  background-color: #fafafa;\n  ", ";\n"], ["\n  color: #333;\n  background-color: #fafafa;\n  ", ";\n"]),
    _templateObject2$8 = taggedTemplateLiteral(["\n      overflow-y: ", ";\n      overflow-x: hidden;\n    "], ["\n      overflow-y: ", ";\n      overflow-x: hidden;\n    "]),
    _templateObject3$8 = taggedTemplateLiteral([""], [""]),
    _templateObject4$8 = taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  ", ";\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"], ["\n  ", ";\n  position: relative;\n  ", ";\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"]),
    _templateObject5$6 = taggedTemplateLiteral(["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n      border-top: 1px solid #e8e8e8;\n    "], ["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n      border-top: 1px solid #e8e8e8;\n    "]),
    _templateObject6$5 = taggedTemplateLiteral(["\n          border-left: 1px solid #e8e8e8;\n        "], ["\n          border-left: 1px solid #e8e8e8;\n        "]),
    _templateObject7$5 = taggedTemplateLiteral(["\n        ", ";\n      "], ["\n        ", ";\n      "]),
    _templateObject8$5 = taggedTemplateLiteral(["\n            right: 0;\n            position: sticky;\n            box-shadow: -2px 0px 2px 1px rgba(208, 207, 207, 0.6);\n            z-index: 2;\n          "], ["\n            right: 0;\n            position: sticky;\n            box-shadow: -2px 0px 2px 1px rgba(208, 207, 207, 0.6);\n            z-index: 2;\n          "]),
    _templateObject9$3 = taggedTemplateLiteral(["\n            left: 0;\n            position: sticky;\n            box-shadow: 2px 0px 2px 1px rgba(208, 207, 207, 0.6);\n            z-index: 2;\n          "], ["\n            left: 0;\n            position: sticky;\n            box-shadow: 2px 0px 2px 1px rgba(208, 207, 207, 0.6);\n            z-index: 2;\n          "]),
    _templateObject10$2 = taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject11$2 = taggedTemplateLiteral(["\n  font-weight: bold;\n  ", ";\n  ", ";\n"], ["\n  font-weight: bold;\n  ", ";\n  ", ";\n"]),
    _templateObject12$2 = taggedTemplateLiteral(["\n      padding: 6px 12px;\n    "], ["\n      padding: 6px 12px;\n    "]),
    _templateObject13$2 = taggedTemplateLiteral(["\n      padding: 8px 16px;\n    "], ["\n      padding: 8px 16px;\n    "]),
    _templateObject14$1 = taggedTemplateLiteral(["\n      padding: 12px 18px;\n    "], ["\n      padding: 12px 18px;\n    "]),
    _templateObject15$1 = taggedTemplateLiteral(["\n          padding-right: ", "px;\n        "], ["\n          padding-right: ", "px;\n        "]),
    _templateObject16$1 = taggedTemplateLiteral(["\n  font-size: 12px;\n  cursor: pointer;\n  ", ";\n  transition: color 0.3s;\n  position: absolute;\n  top: 0;\n  margin-left: 5px;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  font-size: 12px;\n  cursor: pointer;\n  ", ";\n  transition: color 0.3s;\n  position: absolute;\n  top: 0;\n  margin-left: 5px;\n  &:hover {\n    color: ", ";\n  }\n"]),
    _templateObject17$1 = taggedTemplateLiteral(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "]);

var HeaderRow = styled__default(Flex)(_templateObject$b, styledTools.ifProp("fixHeader", styled.css(_templateObject2$8, styledTools.ifProp("needScroll", "scroll", "hidden")), styled.css(_templateObject3$8)));

var HeaderCellOuter = styled__default(Item).attrs({
  shrink: 0
})(_templateObject4$8, styledTools.ifProp("bordered", styled.css(_templateObject5$6, styledTools.ifProp("index", styled.css(_templateObject3$8), styled.css(_templateObject6$5))), styled.css(_templateObject3$8)), isChrome ? styled.css(_templateObject7$5, styledTools.switchProp("sticky", {
  right: styled.css(_templateObject8$5),
  left: styled.css(_templateObject9$3)
})) : "");

var HeaderCellInner = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject10$2);

var HeaderCell = styled__default(Item)(_templateObject11$2, styledTools.switchProp(styledTools.prop("size", "small"), {
  small: styled.css(_templateObject12$2),
  middle: styled.css(_templateObject13$2),
  large: styled.css(_templateObject14$1)
}), function (prop) {
  return prop.paddingRight ? styled.css(_templateObject15$1, prop.paddingRight) : "";
});

var SortIcon = styled__default(_Icon)(_templateObject16$1, styledTools.ifProp("highlight", styled.css(_templateObject17$1, variable.primary), styled.css(_templateObject17$1, variable.text.second)), variable.primary);

var HeaderColumn = (_dec$7 = mobxReact.inject("table"), _dec$7(_class$h = mobxReact.observer(_class$h = function (_Component) {
  inherits(HeaderColumn, _Component);

  function HeaderColumn() {
    classCallCheck(this, HeaderColumn);
    return possibleConstructorReturn(this, (HeaderColumn.__proto__ || Object.getPrototypeOf(HeaderColumn)).apply(this, arguments));
  }

  createClass(HeaderColumn, [{
    key: "renderTitleContent",
    value: function renderTitleContent(title) {
      return typeof title === "function" ? title(this.props.table) : title;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$column = _props.column,
          title = _props$column.title,
          headerMode = _props$column.headerMode,
          _props$column$headerC = _props$column.headerContainerProps,
          headerContainerProps = _props$column$headerC === undefined ? {} : _props$column$headerC,
          size = _props.table.size;


      if (!headerMode) {
        return React__default.createElement(
          HeaderCell,
          _extends({
            size: size
          }, headerContainerProps, {
            style: headerContainerProps.style ? _extends({}, headerContainerProps.style) : null }),
          this.renderTitleContent(title)
        );
      }

      switch (headerMode.type) {
        case "sort":
          var sortByAsc = headerMode.value === "asc";
          var sortByDesc = headerMode.value === "desc";
          return React__default.createElement(
            HeaderCell,
            _extends({ size: size, paddingRight: 26 }, headerContainerProps),
            this.renderTitleContent(title),
            React__default.createElement(SortIcon, {
              highlight: sortByAsc ? "true" : undefined,
              type: "caret-up",
              title: "asc",
              style: { top: "calc( 50% - 8px)" },
              onClick: !sortByAsc && headerMode.onChange ? function () {
                return headerMode.onChange("asc");
              } : null
            }),
            React__default.createElement(SortIcon, {
              highlight: sortByDesc ? "true" : undefined,
              type: "caret-down",
              title: "desc",
              style: { top: "calc( 50% - 2px)" },
              onClick: !sortByDesc && headerMode.onChange ? function () {
                return headerMode.onChange("desc");
              } : null
            })
          );
        default:
          return React__default.createElement(
            HeaderCell,
            headerContainerProps,
            " ",
            this.renderTitleContent(title)
          );
      }
    }
  }]);
  return HeaderColumn;
}(React.Component)) || _class$h) || _class$h);

var _default$b = (_dec2$4 = mobxReact.inject("table"), _dec2$4(_class2$5 = mobxReact.observer(_class2$5 = function (_Component2) {
  inherits(_default$$1, _Component2);

  function _default$$1() {
    classCallCheck(this, _default$$1);
    return possibleConstructorReturn(this, (_default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).apply(this, arguments));
  }

  createClass(_default$$1, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          _props2$table = _props2.table,
          columns = _props2$table.columns,
          bordered = _props2$table.bordered,
          headerHeight = _props2$table.headerHeight,
          scrollX = _props2$table.scrollX,
          scrollY = _props2$table.scrollY,
          headerMinHeight = _props2$table.headerMinHeight,
          updateHeaderMeasure = _props2$table.updateHeaderMeasure,
          viewData = _props2$table.viewData,
          fixHeader = _props2.fixHeader;


      return React__default.createElement(
        Measure,
        {
          bounds: true,
          onResize: function onResize(rect) {
            updateHeaderMeasure(rect);
          } },
        function (_ref) {
          var measureRef = _ref.measureRef;
          return React__default.createElement(
            HeaderRow,
            {
              innerRef: measureRef,
              fixHeader: fixHeader,
              needScroll: scrollY && scrollY !== "auto",
              style: {
                height: headerHeight,
                width: scrollX,
                overflowX: viewData.length === 0 ? "auto" : null
              } },
            columns.map(function (column, index) {
              return React__default.createElement(
                HeaderCellOuter,
                {
                  bordered: bordered,
                  key: column.key,
                  flex: column.width ? undefined : column.flex ? column.flex : 1,
                  style: {
                    width: column.width,
                    minWidth: column.minWidth,
                    minHeight: headerMinHeight
                  },
                  index: index },
                React__default.createElement(
                  HeaderCellInner,
                  null,
                  React__default.createElement(HeaderColumn, { column: column })
                )
              );
            })
          );
        }
      );
    }
  }]);
  return _default$$1;
}(React.Component)) || _class2$5) || _class2$5);

var _dec$8, _class3$3;

var _templateObject$c = taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  height: 100%;\n  overflow: auto;\n  transition: background-color 0.3s;\n  will-change: background-color;\n"], ["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  height: 100%;\n  overflow: auto;\n  transition: background-color 0.3s;\n  will-change: background-color;\n"]),
    _templateObject2$9 = taggedTemplateLiteral(["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n    "], ["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n    "]),
    _templateObject3$9 = taggedTemplateLiteral([""], [""]),
    _templateObject4$9 = taggedTemplateLiteral(["\n          border-left: 1px solid #e8e8e8;\n        "], ["\n          border-left: 1px solid #e8e8e8;\n        "]),
    _templateObject5$7 = taggedTemplateLiteral(["\n  color: #333;\n\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n\n  ", ";\n\n  &.__mogul_table_dragging {\n    cursor: grabbing;\n  }\n"], ["\n  color: #333;\n\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n\n  ", ";\n\n  &.__mogul_table_dragging {\n    cursor: grabbing;\n  }\n"]),
    _templateObject6$6 = taggedTemplateLiteral(["\n      ", " {\n        background-color: #e6f7ff;\n      }\n    "], ["\n      ", " {\n        background-color: #e6f7ff;\n      }\n    "]),
    _templateObject7$6 = taggedTemplateLiteral(["\n      ", " {\n        background-color: #fff;\n      }\n    "], ["\n      ", " {\n        background-color: #fff;\n      }\n    "]),
    _templateObject8$6 = taggedTemplateLiteral(["\n  transition: fill 0.3s;\n  cursor: move;\n  width: 28px;\n  height: 28px;\n  display: inline-block;\n  &:hover {\n    fill: ", ";\n  }\n"], ["\n  transition: fill 0.3s;\n  cursor: move;\n  width: 28px;\n  height: 28px;\n  display: inline-block;\n  &:hover {\n    fill: ", ";\n  }\n"]),
    _templateObject9$4 = taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  filter: blur(0.5px);\n  user-select: none;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.6);\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  filter: blur(0.5px);\n  user-select: none;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.6);\n"]);
var ColumnCellContainer = styled__default(Item).attrs({
  shrink: 0
})(_templateObject$c, styledTools.ifProp("bordered", styled.css(_templateObject2$9, styledTools.ifProp("index", styled.css(_templateObject3$9), styled.css(_templateObject4$9))), styled.css(_templateObject3$9)));

var RowContainer = styled__default(Flex)(_templateObject5$7, styledTools.ifProp("hover", styled.css(_templateObject6$6, ColumnCellContainer), styled.css(_templateObject7$6, ColumnCellContainer)));

function rowHover(Comp) {
  return mobxReact.inject("table")(function (_Component) {
    inherits(_class2, _Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseEnter = function () {
        var _this$props = _this.props,
            setHighlightRowId = _this$props.table.setHighlightRowId,
            rowHoverId = _this$props.rowHoverId;

        setHighlightRowId(rowHoverId);
      }, _this.onMouseLeave = function () {
        var setHighlightRowId = _this.props.table.setHighlightRowId;

        setHighlightRowId(null);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(_class2, [{
      key: "render",
      value: function render() {
        return React__default.createElement(Comp, _extends({}, this.props, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }));
      }
    }]);
    return _class2;
  }(React.Component));
}

var TableRowContainer = (_dec$8 = mobxReact.inject("table"), rowHover(_class3$3 = _dec$8(_class3$3 = mobxReact.observer(_class3$3 = function (_Component2) {
  inherits(TableRowContainer, _Component2);

  function TableRowContainer() {
    classCallCheck(this, TableRowContainer);
    return possibleConstructorReturn(this, (TableRowContainer.__proto__ || Object.getPrototypeOf(TableRowContainer)).apply(this, arguments));
  }

  createClass(TableRowContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          highlightRowId = _props.table.highlightRowId,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          rowHoverId = _props.rowHoverId,
          rest = objectWithoutProperties(_props, ["table", "onMouseEnter", "onMouseLeave", "rowHoverId"]);

      return React__default.createElement(RowContainer, _extends({
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        hover: highlightRowId === rowHoverId
      }, rest));
    }
  }]);
  return TableRowContainer;
}(React.Component)) || _class3$3) || _class3$3) || _class3$3);

var StyledDragIcon = styled__default.svg(_templateObject8$6, variable.primary);

var DragElement = function DragElement() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return React__default.createElement(
    StyledDragIcon,
    _extends({ viewBox: "0 0 1024 1024", version: "1.1" }, props),
    React__default.createElement("path", {
      d: "M298.666667 810.666667v-85.333334h85.333333v85.333334H298.666667m170.666666 0v-85.333334h85.333334v85.333334h-85.333334m170.666667 0v-85.333334h85.333333v85.333334h-85.333333m-341.333333-170.666667v-85.333333h85.333333v85.333333H298.666667m170.666666 0v-85.333333h85.333334v85.333333h-85.333334m170.666667 0v-85.333333h85.333333v85.333333h-85.333333m-341.333333-170.666667V384h85.333333v85.333333H298.666667m170.666666 0V384h85.333334v85.333333h-85.333334m170.666667 0V384h85.333333v85.333333h-85.333333M298.666667 298.666667V213.333333h85.333333v85.333334H298.666667m170.666666 0V213.333333h85.333334v85.333334h-85.333334m170.666667 0V213.333333h85.333333v85.333334h-85.333333z"
    })
  );
};

var DragHandle = reactSortableHoc.SortableHandle(DragElement);

var LoadingOverlay = styled__default(Flex).attrs({
  alignItems: "center",
  justifyContent: "center"
})(_templateObject9$4);

var Loader = function (_PureComponent) {
  inherits(Loader, _PureComponent);

  function Loader() {
    classCallCheck(this, Loader);
    return possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  createClass(Loader, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          loading = _props2.loading,
          loadingDelay = _props2.loadingDelay;

      return React__default.createElement(
        reactSpring.Transition,
        {
          items: loading,
          from: { showSpin: 0 },
          enter: { showSpin: 1 },
          leave: { showSpin: 0 },
          delay: loadingDelay },
        function (show) {
          return show && function (_ref2) {
            var showSpin = _ref2.showSpin;

            var result = loading && showSpin > 0;

            return result ? React__default.createElement(
              LoadingOverlay,
              null,
              React__default.createElement(_default$4, { size: 50 })
            ) : null;
          };
        }
      );
    }
  }]);
  return Loader;
}(React.PureComponent);

var _dec$9, _class$i;

var _templateObject$d = taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject2$a = taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject3$a = taggedTemplateLiteral(["\n      padding: 6px 12px;\n    "], ["\n      padding: 6px 12px;\n    "]),
    _templateObject4$a = taggedTemplateLiteral(["\n      padding: 8px 16px;\n    "], ["\n      padding: 8px 16px;\n    "]),
    _templateObject5$8 = taggedTemplateLiteral(["\n      padding: 12px 18px;\n    "], ["\n      padding: 12px 18px;\n    "]),
    _templateObject6$7 = taggedTemplateLiteral(["\n  background-color: #e8e8e8;\n  padding: 4px 8px;\n  transition: box-shadow 0.3s;\n  &:hover {\n    box-shadow: 0px 1px 1px 0px #a2a2a2;\n  }\n"], ["\n  background-color: #e8e8e8;\n  padding: 4px 8px;\n  transition: box-shadow 0.3s;\n  &:hover {\n    box-shadow: 0px 1px 1px 0px #a2a2a2;\n  }\n"]);

var SortableRow = reactSortableHoc.SortableElement(function (_ref) {
  var index = _ref.index,
      disabled = _ref.disabled,
      rowProps = objectWithoutProperties(_ref, ["index", "disabled"]);
  return React.createElement(TableRowContainer, rowProps);
});

var RowCellInner = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject$d);

var RowCell = styled__default(Item)(_templateObject2$a, styledTools.switchProp(styledTools.prop("size", "small"), {
  small: styled.css(_templateObject3$a),
  middle: styled.css(_templateObject4$a),
  large: styled.css(_templateObject5$8)
}));

var SubTableRowContainer = styled__default(Flex)(_templateObject6$7);

var _default$c = (_dec$9 = mobxReact.inject("table"), _dec$9(_class$i = reactSortableHoc.SortableContainer(_class$i = mobxReact.observer(_class$i = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, _default$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = _default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call.apply(_ref2, [this].concat(args))), _this), _this.warned = false, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default$$1, [{
    key: "getColumnWidth",
    value: function getColumnWidth(column) {
      var scrollX = this.props.table.scrollX;

      if (!this.warned && scrollX && scrollX !== "auto" && !column.width) {
        this.warned = true;
        console.warn("when scrollX set to " + scrollX + ", column.width is required, check your column.key=\"" + column.key + "\"");
      }

      return column.width;
    }
  }, {
    key: "getSubTableWidth",
    value: function getSubTableWidth() {
      var _this2 = this;

      var columns = this.props.table.columns;

      var widths = columns.map(function (column) {
        var width = _this2.getColumnWidth(column);
        if (!width) return "0px";
        if (Number(width)) return Number(width) + "px";
        return width;
      });

      return "calc( " + widths.join(" + ") + " )";
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _props$table = _props.table,
          viewData = _props$table.viewData,
          rowKey = _props$table.rowKey,
          columns = _props$table.columns,
          bordered = _props$table.bordered,
          rowHeight = _props$table.rowHeight,
          subTableKey = _props$table.subTableKey,
          rowSelectKey = _props$table.rowSelectKey,
          draggable = _props$table.draggable,
          size = _props$table.size,
          updateRowMeasure = _props$table.updateRowMeasure,
          subTableRender = _props.subTableRender;


      return (
        // 用于 drag 组件
        React__default.createElement(
          "div",
          { style: { position: "relative" } },
          viewData.map(function (row, rowIndex) {
            return React__default.createElement(
              React.Fragment,
              { key: row[rowKey] },
              React__default.createElement(
                Measure,
                {
                  bounds: true,
                  onResize: function onResize(contentRect) {
                    updateRowMeasure(row, contentRect);
                  } },
                function (_ref3) {
                  var measureRef = _ref3.measureRef;
                  return React__default.createElement(
                    SortableRow,
                    {
                      rowHoverId: row[rowKey],
                      innerRef: measureRef,
                      index: rowIndex,
                      selected: !!row[rowSelectKey],
                      disabled: !draggable,
                      style: { height: rowHeight } },
                    columns.map(function (column, index) {
                      var cellContainerProps = column.cellContainerProps || {};
                      return React__default.createElement(
                        ColumnCellContainer,
                        {
                          key: column.key,
                          bordered: bordered,
                          flex: column.width ? undefined : column.flex ? column.flex : 1,
                          style: {
                            width: _this3.getColumnWidth(column),
                            minWidth: column.minWidth,
                            height: rowHeight
                          },
                          index: index },
                        React__default.createElement(
                          RowCellInner,
                          null,
                          React.createElement(RowCell, _extends({
                            size: size
                          }, cellContainerProps, {
                            //see https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md
                            style: cellContainerProps.style ? _extends({}, cellContainerProps.style) : {},
                            children: column.render ? column.render(row, column) : row[column.key]
                          }))
                        )
                      );
                    })
                  );
                }
              ),
              subTableRender && typeof row[subTableKey] === "boolean" && row[subTableKey] ? React__default.createElement(
                SubTableRowContainer,
                { style: { width: _this3.getSubTableWidth() } },
                subTableRender(row)
              ) : null
            );
          })
        )
      );
    }
  }]);
  return _default$$1;
}(React.Component)) || _class$i) || _class$i) || _class$i);

var _dec$a, _class$j;

var _templateObject$e = taggedTemplateLiteral(["\n  padding: 15px 0;\n  width: 100%;\n"], ["\n  padding: 15px 0;\n  width: 100%;\n"]);
var Container$8 = styled__default(Flex).attrs({
  justifyContent: "flex-end"
})(_templateObject$e);

var _default$d = (_dec$a = mobxReact.inject("table"), _dec$a(_class$j = mobxReact.observer(_class$j = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    classCallCheck(this, _default$$1);
    return possibleConstructorReturn(this, (_default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).apply(this, arguments));
  }

  createClass(_default$$1, [{
    key: "render",
    value: function render() {
      var globalPaginationProps = configuration.pagination;
      //    const { size, showSizeChanger, showQuickJumper, showTotal } = configuration.pagination;
      var _props$table = this.props.table,
          unControlTotal = _props$table.unControlTotal,
          pagination = _props$table.pagination;

      return React__default.createElement(
        Container$8,
        null,
        React__default.createElement(_Pagination, _extends({}, globalPaginationProps, {
          total: unControlTotal
        }, pagination))
      );
    }
  }]);
  return _default$$1;
}(React.Component)) || _class$j) || _class$j);

var _dec$b, _class$k, _dec2$5, _class2$6, _dec3$4, _class3$4;

var _templateObject$f = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  transition: box-shadow 0.3s;\n\n  &.mogul_table_sticky_left {\n    box-shadow: 7px 0 5px -3px rgba(208, 207, 207, 0.6);\n  }\n"], ["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  transition: box-shadow 0.3s;\n\n  &.mogul_table_sticky_left {\n    box-shadow: 7px 0 5px -3px rgba(208, 207, 207, 0.6);\n  }\n"]),
    _templateObject2$b = taggedTemplateLiteral(["\n  width: calc(100% + ", "px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n"], ["\n  width: calc(100% + ", "px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n"]),
    _templateObject3$b = taggedTemplateLiteral(["\n  background-color: #fafafa;\n  color: #333;\n"], ["\n  background-color: #fafafa;\n  color: #333;\n"]),
    _templateObject4$b = taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject5$9 = taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject6$8 = taggedTemplateLiteral(["\n      padding: 6px 12px;\n    "], ["\n      padding: 6px 12px;\n    "]),
    _templateObject7$7 = taggedTemplateLiteral(["\n      padding: 8px 16px;\n    "], ["\n      padding: 8px 16px;\n    "]),
    _templateObject8$7 = taggedTemplateLiteral(["\n      padding: 12px 18px;\n    "], ["\n      padding: 12px 18px;\n    "]),
    _templateObject9$5 = taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"], ["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"]),
    _templateObject10$3 = taggedTemplateLiteral(["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n      border-top: 1px solid #e8e8e8;\n    "], ["\n      border-right: 1px solid #e8e8e8;\n      ", ";\n      border-top: 1px solid #e8e8e8;\n    "]),
    _templateObject11$3 = taggedTemplateLiteral([""], [""]),
    _templateObject12$3 = taggedTemplateLiteral(["\n          border-left: 1px solid #e8e8e8;\n        "], ["\n          border-left: 1px solid #e8e8e8;\n        "]);
var FixLeftContainer = styled__default.div(_templateObject$f);

var FixContainerInner = styled__default.div(_templateObject2$b, getScrollbarWidth());

var FixedHeader = styled__default(Flex)(_templateObject3$b);

var RowCellInner$1 = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject4$b);

var RowCell$1 = styled__default(Item)(_templateObject5$9, styledTools.switchProp(styledTools.prop("size", "small"), {
  small: styled.css(_templateObject6$8),
  middle: styled.css(_templateObject7$7),
  large: styled.css(_templateObject8$7)
}));

var HeaderCellOuter$1 = styled__default(Item).attrs({
  shrink: 0
})(_templateObject9$5, styledTools.ifProp("bordered", styled.css(_templateObject10$3, styledTools.ifProp("index", styled.css(_templateObject11$3), styled.css(_templateObject12$3))), styled.css(_templateObject11$3)));

var HeaderCellInner$1 = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject4$b);

var RowComponent = (_dec$b = mobxReact.inject("table"), _dec$b(_class$k = mobxReact.observer(_class$k = function (_Component) {
  inherits(RowComponent, _Component);

  function RowComponent() {
    classCallCheck(this, RowComponent);
    return possibleConstructorReturn(this, (RowComponent.__proto__ || Object.getPrototypeOf(RowComponent)).apply(this, arguments));
  }

  createClass(RowComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$table = _props.table,
          rowKey = _props$table.rowKey,
          fixedLeftColumns = _props$table.fixedLeftColumns,
          bordered = _props$table.bordered,
          size = _props$table.size,
          rowMeasureMap = _props$table.rowMeasureMap,
          rowData = _props.rowData;


      var rowRect = rowMeasureMap.get(rowData[rowKey]);
      if (!rowRect) return null;

      return React__default.createElement(
        TableRowContainer,
        { rowHoverId: rowData[rowKey] },
        fixedLeftColumns.map(function (column, index) {
          var cellContainerProps = column.cellContainerProps || {};

          return React__default.createElement(
            ColumnCellContainer,
            {
              key: column.key,
              bordered: bordered,
              flex: column.width ? undefined : column.flex ? column.flex : 1,
              style: {
                width: column.width,
                minWidth: column.minWidth,
                height: rowRect.height
              },
              index: index },
            React__default.createElement(
              RowCellInner$1,
              null,
              React__default.createElement(
                RowCell$1,
                _extends({ size: size }, cellContainerProps),
                column.render ? column.render(rowData, column) : rowData[column.key]
              )
            )
          );
        })
      );
    }
  }]);
  return RowComponent;
}(React.Component)) || _class$k) || _class$k);
var HeaderRowComponent = (_dec2$5 = mobxReact.inject("table"), _dec2$5(_class2$6 = mobxReact.observer(_class2$6 = function (_Component2) {
  inherits(HeaderRowComponent, _Component2);

  function HeaderRowComponent() {
    classCallCheck(this, HeaderRowComponent);
    return possibleConstructorReturn(this, (HeaderRowComponent.__proto__ || Object.getPrototypeOf(HeaderRowComponent)).apply(this, arguments));
  }

  createClass(HeaderRowComponent, [{
    key: "render",
    value: function render() {
      var _props$table2 = this.props.table,
          showHeader = _props$table2.showHeader,
          headerMeasure = _props$table2.headerMeasure,
          fixedLeftColumns = _props$table2.fixedLeftColumns,
          bordered = _props$table2.bordered,
          headerMinHeight = _props$table2.headerMinHeight;


      if (!showHeader || !headerMeasure) return null;

      return React__default.createElement(
        FixedHeader,
        { style: { height: headerMeasure.height } },
        fixedLeftColumns.map(function (column, index) {
          return React__default.createElement(
            HeaderCellOuter$1,
            {
              bordered: bordered,
              key: column.key,
              style: {
                width: column.width,
                minHeight: headerMinHeight
              },
              index: index },
            React__default.createElement(
              HeaderCellInner$1,
              null,
              React__default.createElement(HeaderColumn, { column: column })
            )
          );
        })
      );
    }
  }]);
  return HeaderRowComponent;
}(React.Component)) || _class2$6) || _class2$6);

var _default$e = (_dec3$4 = mobxReact.inject("table"), _dec3$4(_class3$4 = mobxReact.observer(_class3$4 = function (_Component3) {
  inherits(_default$$1, _Component3);

  function _default$$1(props) {
    classCallCheck(this, _default$$1);

    var _this3 = possibleConstructorReturn(this, (_default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call(this, props));

    _this3.onScroll = function () {
      var updateScrollTopPos = _this3.props.table.updateScrollTopPos;


      if (_this3.container) {
        updateScrollTopPos(_this3.container.scrollTop);
      }
    };

    _this3.scrollBarWidth = getScrollbarWidth();
    return _this3;
  }

  createClass(_default$$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var registryContainer = this.props.table.registryContainer;


      registryContainer("fixLeftContainer", this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var registryContainer = this.props.table.registryContainer;

      registryContainer("fixLeftContainer", null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props$table3 = this.props.table,
          viewData = _props$table3.viewData,
          rowKey = _props$table3.rowKey,
          scrollY = _props$table3.scrollY,
          fixedLeftColumnsWidth = _props$table3.fixedLeftColumnsWidth,
          fixHeader = _props$table3.fixHeader,
          scrollLeftPos = _props$table3.scrollLeftPos;


      var maxHeight = null;

      if (!scrollY || scrollY === "auto") {
        maxHeight = null;
      } else {
        maxHeight = "calc(" + scrollY + "px - " + this.scrollBarWidth + "px)";
      }

      return React__default.createElement(
        FixLeftContainer,
        {
          className: scrollLeftPos ? "mogul_table_sticky_left" : null,
          style: { width: fixedLeftColumnsWidth } },
        fixHeader ? React__default.createElement(HeaderRowComponent, null) : null,
        React__default.createElement(
          FixContainerInner,
          {
            onScroll: this.onScroll,
            style: { maxHeight: maxHeight },
            innerRef: function innerRef(container) {
              return _this4.container = container;
            } },
          !fixHeader ? React__default.createElement(HeaderRowComponent, null) : null,
          viewData.map(function (row) {
            return React__default.createElement(RowComponent, { rowData: row, key: row[rowKey] });
          })
        )
      );
    }
  }]);
  return _default$$1;
}(React.Component)) || _class3$4) || _class3$4);

var _dec$c, _class$l, _dec2$6, _class2$7, _dec3$5, _class3$5;

var _templateObject$g = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  right: 0;\n  overflow-x: hidden;\n  transition: box-shadow 0.3s;\n\n  &.mogul_table_sticky_right {\n    box-shadow: -7px 0 5px -3px rgba(208, 207, 207, 0.6);\n  }\n"], ["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  right: 0;\n  overflow-x: hidden;\n  transition: box-shadow 0.3s;\n\n  &.mogul_table_sticky_right {\n    box-shadow: -7px 0 5px -3px rgba(208, 207, 207, 0.6);\n  }\n"]),
    _templateObject2$c = taggedTemplateLiteral(["\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"], ["\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]),
    _templateObject3$c = taggedTemplateLiteral(["\n  background-color: #fafafa;\n  color: #333;\n"], ["\n  background-color: #fafafa;\n  color: #333;\n"]),
    _templateObject4$c = taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject5$a = taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject6$9 = taggedTemplateLiteral(["\n      padding: 6px 12px;\n    "], ["\n      padding: 6px 12px;\n    "]),
    _templateObject7$8 = taggedTemplateLiteral(["\n      padding: 8px 16px;\n    "], ["\n      padding: 8px 16px;\n    "]),
    _templateObject8$8 = taggedTemplateLiteral(["\n      padding: 12px 18px;\n    "], ["\n      padding: 12px 18px;\n    "]),
    _templateObject9$6 = taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"], ["\n  ", ";\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  background-color: #fafafa;\n"]),
    _templateObject10$4 = taggedTemplateLiteral(["\n      border-right: 1px solid #e8e8e8;\n      border-top: 1px solid #e8e8e8;\n    "], ["\n      border-right: 1px solid #e8e8e8;\n      border-top: 1px solid #e8e8e8;\n    "]),
    _templateObject11$4 = taggedTemplateLiteral([""], [""]);

var FixRightContainer = styled__default.div(_templateObject$g);

var FixContainerInner$1 = styled__default.div(_templateObject2$c);

var FixedHeader$1 = styled__default(Flex)(_templateObject3$c);

var RowCellInner$2 = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject4$c);

var RowCell$2 = styled__default(Item)(_templateObject5$a, styledTools.switchProp(styledTools.prop("size", "small"), {
  small: styled.css(_templateObject6$9),
  middle: styled.css(_templateObject7$8),
  large: styled.css(_templateObject8$8)
}));

var HeaderCellOuter$2 = styled__default(Item).attrs({
  shrink: 0
})(_templateObject9$6, styledTools.ifProp("bordered", styled.css(_templateObject10$4), styled.css(_templateObject11$4)));

var HeaderCellInner$2 = styled__default(Flex).attrs({
  direction: "column",
  justifyContent: "center"
})(_templateObject4$c);

var RowComponent$1 = (_dec$c = mobxReact.inject("table"), _dec$c(_class$l = mobxReact.observer(_class$l = function (_Component) {
  inherits(RowComponent, _Component);

  function RowComponent() {
    classCallCheck(this, RowComponent);
    return possibleConstructorReturn(this, (RowComponent.__proto__ || Object.getPrototypeOf(RowComponent)).apply(this, arguments));
  }

  createClass(RowComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$table = _props.table,
          rowKey = _props$table.rowKey,
          fixedRightColumns = _props$table.fixedRightColumns,
          bordered = _props$table.bordered,
          size = _props$table.size,
          rowMeasureMap = _props$table.rowMeasureMap,
          rowData = _props.rowData;


      var rowRect = rowMeasureMap.get(rowData[rowKey]);
      if (!rowRect) return null;
      return React__default.createElement(
        TableRowContainer,
        { rowHoverId: rowData[rowKey] },
        fixedRightColumns.map(function (column) {
          var cellContainerProps = column.cellContainerProps || {};

          return React__default.createElement(
            ColumnCellContainer,
            {
              key: column.key,
              bordered: bordered,
              flex: column.width ? undefined : column.flex ? column.flex : 1,
              style: {
                width: column.width,
                minWidth: column.minWidth,
                height: rowRect.height
              },
              index: -1 },
            React__default.createElement(
              RowCellInner$2,
              null,
              React__default.createElement(
                RowCell$2,
                _extends({ size: size }, cellContainerProps),
                column.render ? column.render(rowData, column) : rowData[column.key]
              )
            )
          );
        })
      );
    }
  }]);
  return RowComponent;
}(React.Component)) || _class$l) || _class$l);
var HeaderRowComponent$1 = (_dec2$6 = mobxReact.inject("table"), _dec2$6(_class2$7 = mobxReact.observer(_class2$7 = function (_Component2) {
  inherits(HeaderRowComponent, _Component2);

  function HeaderRowComponent() {
    classCallCheck(this, HeaderRowComponent);
    return possibleConstructorReturn(this, (HeaderRowComponent.__proto__ || Object.getPrototypeOf(HeaderRowComponent)).apply(this, arguments));
  }

  createClass(HeaderRowComponent, [{
    key: "render",
    value: function render() {
      var _props$table2 = this.props.table,
          showHeader = _props$table2.showHeader,
          headerMeasure = _props$table2.headerMeasure,
          fixedRightColumns = _props$table2.fixedRightColumns,
          bordered = _props$table2.bordered,
          headerMinHeight = _props$table2.headerMinHeight;


      if (!showHeader || !headerMeasure) return null;

      return React__default.createElement(
        FixedHeader$1,
        { style: { height: headerMeasure.height } },
        fixedRightColumns.map(function (column, index) {
          return React__default.createElement(
            HeaderCellOuter$2,
            {
              bordered: bordered,
              key: column.key,
              style: {
                width: column.width,
                minHeight: headerMinHeight
              },
              index: index },
            React__default.createElement(
              HeaderCellInner$2,
              null,
              React__default.createElement(HeaderColumn, { column: column })
            )
          );
        })
      );
    }
  }]);
  return HeaderRowComponent;
}(React.Component)) || _class2$7) || _class2$7);

var _default$f = (_dec3$5 = mobxReact.inject("table"), _dec3$5(_class3$5 = mobxReact.observer(_class3$5 = function (_Component3) {
  inherits(_default$$1, _Component3);

  function _default$$1(props) {
    classCallCheck(this, _default$$1);

    var _this3 = possibleConstructorReturn(this, (_default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call(this, props));

    _this3.onScroll = function () {
      var updateScrollTopPos = _this3.props.table.updateScrollTopPos;


      if (_this3.container) {
        updateScrollTopPos(_this3.container.scrollTop);
      }
    };

    _this3.scrollBarWidth = getScrollbarWidth();
    return _this3;
  }

  createClass(_default$$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var registryContainer = this.props.table.registryContainer;


      registryContainer("fixRightContainer", this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var registryContainer = this.props.table.registryContainer;

      registryContainer("fixRightContainer", null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props$table3 = this.props.table,
          viewData = _props$table3.viewData,
          rowKey = _props$table3.rowKey,
          scrollY = _props$table3.scrollY,
          fixedRightColumnsWidth = _props$table3.fixedRightColumnsWidth,
          fixHeader = _props$table3.fixHeader,
          mainScrollContainer = _props$table3.mainScrollContainer,
          scrollLeftPos = _props$table3.scrollLeftPos;


      var maxHeight = null;
      var verticalScrollBarWidth = this.scrollBarWidth;
      if (!scrollY || scrollY === "auto") {
        maxHeight = null;
        verticalScrollBarWidth = 0;
      } else {
        maxHeight = "calc(" + scrollY + "px - " + this.scrollBarWidth + "px)";
      }

      var prefixClass = "mogul_table_sticky_right";

      if (mainScrollContainer) {
        if (scrollLeftPos + mainScrollContainer.offsetWidth >= mainScrollContainer.scrollWidth + verticalScrollBarWidth) {
          prefixClass = "";
        }
      }
      return React__default.createElement(
        FixRightContainer,
        {
          className: prefixClass,
          style: { width: fixedRightColumnsWidth, right: maxHeight ? verticalScrollBarWidth : 0 } },
        fixHeader ? React__default.createElement(HeaderRowComponent$1, null) : null,
        React__default.createElement(
          FixContainerInner$1,
          {
            onScroll: this.onScroll,
            style: { maxHeight: maxHeight, width: "calc(100% + " + verticalScrollBarWidth + "px)" },
            innerRef: function innerRef(container) {
              return _this4.container = container;
            } },
          !fixHeader ? React__default.createElement(HeaderRowComponent$1, null) : null,
          viewData.map(function (row) {
            return React__default.createElement(RowComponent$1, { rowData: row, key: row[rowKey] });
          })
        )
      );
    }
  }]);
  return _default$$1;
}(React.Component)) || _class3$5) || _class3$5);

var _dec$d, _class$m;

var _templateObject$h = taggedTemplateLiteral(["\n  color: #333;\n  border-bottom: 1px solid #efefef;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  min-height: 80px;\n"], ["\n  color: #333;\n  border-bottom: 1px solid #efefef;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  min-height: 80px;\n"]);

var EmptyRow = styled__default(Flex)(_templateObject$h);

var NoDataRender = (_dec$d = mobxReact.inject("table"), _dec$d(_class$m = mobxReact.observer(_class$m = function (_Component) {
  inherits(NoDataRender, _Component);

  function NoDataRender() {
    classCallCheck(this, NoDataRender);
    return possibleConstructorReturn(this, (NoDataRender.__proto__ || Object.getPrototypeOf(NoDataRender)).apply(this, arguments));
  }

  createClass(NoDataRender, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$table = _props.table,
          size = _props$table.size,
          viewData = _props$table.viewData,
          isLoading = _props$table.isLoading,
          noDataRender = _props.noDataRender;


      if (viewData.length !== 0 || !noDataRender) return null;

      return React__default.createElement(
        EmptyRow,
        { justifyContent: "center", alignItems: "center" },
        noDataRender({ size: size, loading: isLoading })
      );
    }
  }]);
  return NoDataRender;
}(React.Component)) || _class$m) || _class$m);

var _dec$e, _class$n, _class2$8, _temp2$7;

var _templateObject$i = taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n\n  ", ";\n"], ["\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n\n  ", ";\n"]),
    _templateObject2$d = taggedTemplateLiteral(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "]),
    _templateObject3$d = taggedTemplateLiteral(["\n      max-width: 100%;\n    "], ["\n      max-width: 100%;\n    "]),
    _templateObject4$d = taggedTemplateLiteral(["\n  position: relative;\n  overflow-x: auto;\n  ", ";\n"], ["\n  position: relative;\n  overflow-x: auto;\n  ", ";\n"]),
    _templateObject5$b = taggedTemplateLiteral(["\n      overflow-y: scroll;\n    "], ["\n      overflow-y: scroll;\n    "]),
    _templateObject6$a = taggedTemplateLiteral(["\n      overflow-y: auto;\n    "], ["\n      overflow-y: auto;\n    "]),
    _templateObject7$9 = taggedTemplateLiteral(["\n  text-align: center;\n  color: rgb(189, 189, 189);\n  ", ";\n"], ["\n  text-align: center;\n  color: rgb(189, 189, 189);\n  ", ";\n"]),
    _templateObject8$9 = taggedTemplateLiteral(["\n      line-height: 30px;\n    "], ["\n      line-height: 30px;\n    "]),
    _templateObject9$7 = taggedTemplateLiteral(["\n      line-height: 40px;\n    "], ["\n      line-height: 40px;\n    "]),
    _templateObject10$5 = taggedTemplateLiteral(["\n      line-height: 50px;\n    "], ["\n      line-height: 50px;\n    "]);

var TableContainer = styled__default.div(_templateObject$i, styledTools.ifProp("fluid", styled.css(_templateObject2$d), styled.css(_templateObject3$d)));

var TableInner = styled__default.div(_templateObject4$d, styledTools.ifProp("needScrollY", styled.css(_templateObject5$b), styled.css(_templateObject6$a)));

var NoDataSpan = styled__default.span(_templateObject7$9, styledTools.switchProp(styledTools.prop("size", "small"), {
  small: styled.css(_templateObject8$9),
  middle: styled.css(_templateObject9$7),
  large: styled.css(_templateObject10$5)
}));

var RenderPlugins = (_dec$e = mobxReact.inject("table"), _dec$e(_class$n = mobxReact.observer(_class$n = function (_Component) {
  inherits(RenderPlugins, _Component);

  function RenderPlugins() {
    classCallCheck(this, RenderPlugins);
    return possibleConstructorReturn(this, (RenderPlugins.__proto__ || Object.getPrototypeOf(RenderPlugins)).apply(this, arguments));
  }

  createClass(RenderPlugins, [{
    key: "render",
    value: function render() {
      var _props$table = this.props.table,
          fixedLeftColumns = _props$table.fixedLeftColumns,
          fixedRightColumns = _props$table.fixedRightColumns,
          viewData = _props$table.viewData,
          mainScrollContainer = _props$table.mainScrollContainer;


      if (!mainScrollContainer) return null;
      if (viewData.length === 0) return null;
      return React__default.createElement(
        React.Fragment,
        null,
        fixedLeftColumns.length === 0 ? null : React__default.createElement(_default$e, null),
        fixedRightColumns.length === 0 ? null : React__default.createElement(_default$f, null)
      );
    }
  }]);
  return RenderPlugins;
}(React.Component)) || _class$n) || _class$n);
var Table = (_temp2$7 = _class2$8 = function (_Component2) {
  inherits(Table, _Component2);

  function Table() {
    var _ref;

    var _temp, _this2, _ret;

    classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _this2.bindHeaderComponent = function (header) {
      _this2.state.store.registryContainer("headerContainer", reactDom.findDOMNode(header));
    }, _this2.onScroll = function () {
      var _this2$state$store = _this2.state.store,
          updateScrollLeftPos = _this2$state$store.updateScrollLeftPos,
          updateScrollTopPos = _this2$state$store.updateScrollTopPos;

      updateScrollLeftPos(_this2.container.scrollLeft);
      updateScrollTopPos(_this2.container.scrollTop);
    }, _this2.getTableApi = function () {
      return _this2.state.store;
    }, _this2.getDraggableContainer = function () {
      return reactDom.findDOMNode(_this2).querySelector(".__mogul_table_scroll_container");
    }, _this2.bindContainerRef = function (contianer) {
      _this2.container = contianer;
    }, _temp), possibleConstructorReturn(_this2, _ret);
  }

  createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.state.store.registryContainer("mainScrollContainer", this.container);

      this.onScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.store.registryContainer("mainScrollContainer", null);
      this.state.store.registryContainer("headerContainer", null);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          scrollY = _props.scrollY,
          style = _props.style,
          fixHeader = _props.fixHeader,
          scrollX = _props.scrollX,
          pagination = _props.pagination,
          loading = _props.loading,
          noDataRender = _props.noDataRender,
          subTableRender = _props.subTableRender,
          draggable = _props.draggable,
          showHeader = _props.showHeader,
          fluid = _props.fluid,
          loadingDelay = _props.loadingDelay;


      var draggableProps = draggable ? _extends({
        pressDelay: 200

      }, draggable, {
        getContainer: this.getDraggableContainer,
        helperClass: "__mogul_table_dragging" + (draggable.helperClass ? draggable.helperClass : "")
      }) : {};

      var tableHeader = showHeader ? React__default.createElement(_default$b, { fixHeader: fixHeader, ref: fixHeader ? this.bindHeaderComponent : null }) : null;

      return React__default.createElement(
        mobxReact.Provider,
        { table: this.state.store },
        React__default.createElement(
          TableContainer,
          { fluid: fluid, style: style },
          fixHeader ? tableHeader : null,
          React__default.createElement(
            TableInner,
            {
              className: "__mogul_table_scroll_container",
              onScroll: this.onScroll,
              innerRef: this.bindContainerRef,
              needScrollY: scrollY && scrollY !== "auto",
              style: { maxHeight: scrollY === "auto" ? "unset" : scrollY, width: scrollX } },
            fixHeader ? null : tableHeader,
            React__default.createElement(_default$c, _extends({}, draggableProps, { subTableRender: subTableRender })),
            React__default.createElement(NoDataRender, { noDataRender: noDataRender })
          ),
          React__default.createElement(RenderPlugins, null),
          pagination ? React__default.createElement(_default$d, null) : null,
          React__default.createElement(Loader, { loading: loading, loadingDelay: loadingDelay })
        )
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!state.store) {
        return {
          store: new TableStore(props)
        };
      } else {
        state.store.updateProps(props);
      }

      return null;
    }
  }]);
  return Table;
}(React.Component), _class2$8.propTypes = {
  style: PropTypes.object,
  data: mobxReact.PropTypes.arrayOrObservableArray.isRequired,
  fluid: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.any,
    key: PropTypes.string.isRequired,
    render: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.number,
    sort: PropTypes.bool,
    cellContainerProps: PropTypes.object,
    headerContainerProps: PropTypes.object,
    headerMode: PropTypes.shape({
      type: PropTypes.oneOf(["sort"])
    }),
    visible: PropTypes.bool,
    fixed: PropTypes.oneOf(["left", "right"])
  })),
  bordered: PropTypes.bool,
  rowKey: PropTypes.string.isRequired,
  fixHeader: PropTypes.bool,
  headerMinHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  scrollY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  scrollX: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  loading: PropTypes.bool,
  subTableKey: PropTypes.string,
  subTableRender: PropTypes.func,
  rowSelectKey: PropTypes.string,
  noDataRender: PropTypes.func,
  draggable: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.shape({
    onSortEnd: PropTypes.func.isRequired
  })]),
  showHeader: PropTypes.bool,
  size: PropTypes.oneOf(["small", "middle", "large"]),
  loadingDelay: PropTypes.number
}, _class2$8.defaultProps = {
  fluid: false,
  bordered: true,
  scrollY: "auto",
  scrollX: "auto",
  rowHeight: "auto",
  headerHeight: "auto",
  fixHeader: true,
  pagination: true,
  loading: false,
  draggable: false,
  showHeader: true,
  noDataRender: function noDataRender(_ref2) {
    var size = _ref2.size,
        loading = _ref2.loading;
    return React__default.createElement(
      NoDataSpan,
      { size: size },
      loading ? "加载中..." : "暂无数据",
      " "
    );
  }
}, _class2$8.DragHandle = DragHandle, _temp2$7);

var _dec$f, _dec2$7, _dec3$6, _dec4$4, _dec5$4, _dec6$4, _dec7$3, _dec8$3, _dec9$3, _dec10$3, _dec11$3, _dec12$3, _dec13$2, _dec14$2, _dec15$2, _dec16$1, _class$o, _descriptor$4, _descriptor2$4, _descriptor3$3, _descriptor4$2, _descriptor5$2, _descriptor6$2;

function _initDefineProp$4(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$6(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
// 不能使用 import Joi from "joi-browser" 方式导入 Joi, 因为 Joi 不是标准的写法. 故只能做这种妥协
var Joi = require("joi-browser");

var randomStr$1 = function randomStr() {
  return Math.random().toString(36).slice(4, 10);
};

var convertNumToStr = function convertNumToStr(obj) {
  return typeof obj === "number" ? "" + obj : obj;
};

var isFn = function isFn(fn) {
  return typeof fn === "function";
};

var requiredCheck = function requiredCheck(value) {
  return !!value;
};

var maxLength = function maxLength(length) {
  var schema = Joi.string().max(length);
  return function (value) {
    return !schema.validate(convertNumToStr(value)).error;
  };
};

var minLength = function minLength(length) {
  var schema = Joi.string().min(length);
  return function (value) {
    return !schema.validate(convertNumToStr(value)).error;
  };
};

var validCheck = function validCheck(value, rule, form) {
  if (!Array.isArray(rule)) throw new Error("rule expect to be array");

  switch (rule[0]) {
    case "required":
      return isFn(rule[1]) ? rule[1](value, form) : requiredCheck(value) ? true : rule[1];
    case "maxLength":
      var maxLengthNumber = Joi.number().min(1).validate(rule[1]).value;
      return maxLengthNumber ? maxLength(maxLengthNumber)(value) ? true : rule[2] : null;
    case "minLength":
      var minLengthNumber = Joi.number().min(0).validate(rule[1]).value;
      return minLengthNumber ? minLength(minLengthNumber)(value) ? true : rule[2] : null;
    default:
      return isFn(rule[0]) ? rule[0](value, form) : true;
  }
};

var FormStore = (_dec$f = mobx.action.bound, _dec2$7 = mobx.action.bound, _dec3$6 = mobx.action.bound, _dec4$4 = mobx.action.bound, _dec5$4 = mobx.action.bound, _dec6$4 = mobx.action.bound, _dec7$3 = mobx.action.bound, _dec8$3 = mobx.action.bound, _dec9$3 = mobx.action.bound, _dec10$3 = mobx.action.bound, _dec11$3 = mobx.action.bound, _dec12$3 = mobx.action.bound, _dec13$2 = mobx.action.bound, _dec14$2 = mobx.action.bound, _dec15$2 = mobx.action.bound, _dec16$1 = mobx.action.bound, (_class$o = function () {
  function FormStore(_, component) {
    var isLayout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    classCallCheck(this, FormStore);

    _initDefineProp$4(this, "forms", _descriptor$4, this);

    _initDefineProp$4(this, "_value", _descriptor2$4, this);

    _initDefineProp$4(this, "_labelStyle", _descriptor3$3, this);

    _initDefineProp$4(this, "_containerStyle", _descriptor4$2, this);

    _initDefineProp$4(this, "errorMessage", _descriptor5$2, this);

    _initDefineProp$4(this, "validating", _descriptor6$2, this);

    this.isLayout = false;

    this.root = _;
    this.component = component;
    this.isLayout = _ ? isLayout : true;
    this.setupForm();
  }

  createClass(FormStore, [{
    key: "setupForm",
    value: function setupForm() {
      this.validateAsync.count = 0;

      if (this.root) {
        this.root.addForm(this);
      }
      if (this.component) {
        this.fieldName = this.component.props.fieldName || randomStr$1();
        this._value = this.component.props.initialValue;
        if (this.component.props.labelStyle) {
          this._labelStyle = this.component.props.labelStyle;
        }
        if (this.component.props.containerStyle) {
          this._containerStyle = this.component.props.containerStyle;
        }
      }
    }
  }, {
    key: "updateFormConfig",
    value: function updateFormConfig() {
      if (this.component) {
        if (this.component.props.labelStyle) {
          this._labelStyle = this.component.props.labelStyle;
        }
        if (this.component.props.containerStyle) {
          this._containerStyle = this.component.props.containerStyle;
        }
      }
    }
  }, {
    key: "tearDownForm",
    value: function tearDownForm() {
      if (this.root) {
        this.root.removeForm(this);
      }
    }
  }, {
    key: "addForm",
    value: function addForm(form) {
      this.forms = [].concat(toConsumableArray(this.forms), [form]);
    }
  }, {
    key: "removeForm",
    value: function removeForm(form) {
      this.forms = this.forms.filter(function (f) {
        return f.fieldName !== form.fieldName;
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(_value) {
      this._value = _value;
      if (this.errorMessage) {
        this.validateAsync();
      }
      if (this.component) {
        if (this.component.props.onChange) {
          this.component.props.onChange(this.value, this);
        }
      }
    }
  }, {
    key: "findFormByFieldName",
    value: function findFormByFieldName(name) {
      if (this.fieldName === name) return this;
      var targetForm = null;
      for (var i = 0; i < this.forms.length; i++) {
        targetForm = this.forms[i].findFormByFieldName(name);
        if (targetForm) {
          i = this.forms.length;
          return targetForm;
        }
      }
      return null;
    }
  }, {
    key: "$",
    value: function $(name) {
      return this.findFormByFieldName(name);
    }
  }, {
    key: "resetValue",
    value: function resetValue(resetChildren) {
      if (this.component) {
        this._value = this.component.props.initialValue;

        if (typeof resetChildren === "boolean" && resetChildren) {
          this.forms.forEach(function (form) {
            return form.resetValue(true);
          });
        }

        this.validateAsync();
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var valid = true;
      //验证所有依赖
      for (var i = 0; i < this.forms.length; i++) {
        if (!this.forms[i].validate()) {
          valid = false;
        }
      }
      var rules = this.component.props.rules;
      if (rules && Array.isArray(rules)) {
        for (var _i = 0; _i < rules.length; _i++) {
          var rule = rules[_i];
          var result = validCheck(this.value, rule, this);
          invariant(!(result instanceof Promise), "Form Component : " + this.fieldName + " \u5305\u542B async \u9A8C\u8BC1, \u8BF7\u4F7F\u7528 validateAsync \u65B9\u6CD5");

          if (result !== true) {
            this.errorMessage = result ? result : "规则不合法";
            valid = false;
            _i = rules.length; //break loop
          } else {
            this.errorMessage = null;
          }
        }
      }
      return valid;
    }
  }, {
    key: "validateAsync",
    value: function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var valid, executeCount, i, result, rules, _i2, rule, _result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                valid = true;

                this.setValidating(true);
                this.validateAsync.count = this.validateAsync.count + 1;
                executeCount = this.validateAsync.count;
                //验证所有依赖

                i = 0;

              case 5:
                if (!(i < this.forms.length)) {
                  _context.next = 20;
                  break;
                }

                result = null;
                _context.prev = 7;
                _context.next = 10;
                return this.forms[i].validateAsync();

              case 10:
                result = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);

                result = _context.t0 instanceof Error ? _context.t0.message : _context.t0;

              case 16:

                if (result !== true) {
                  valid = false;
                }

              case 17:
                i++;
                _context.next = 5;
                break;

              case 20:
                rules = this.component.props.rules;

                if (!(rules && Array.isArray(rules))) {
                  _context.next = 39;
                  break;
                }

                _i2 = 0;

              case 23:
                if (!(_i2 < rules.length)) {
                  _context.next = 39;
                  break;
                }

                rule = rules[_i2];
                _result = null;
                _context.prev = 26;
                _context.next = 29;
                return validCheck(this.value, rule, this);

              case 29:
                _result = _context.sent;
                _context.next = 35;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](26);

                _result = _context.t1 instanceof Error ? _context.t1.message : _context.t1;

              case 35:
                if (executeCount === this.validateAsync.count) {
                  if (_result !== true) {
                    this.setErrorMessage(_result ? _result : "规则不合法");
                    valid = false;
                    _i2 = rules.length; //break loop
                  } else {
                    this.setErrorMessage(null);
                  }
                } else {
                  valid = false;
                  _i2 = rules.length; //break loop
                }

              case 36:
                _i2++;
                _context.next = 23;
                break;

              case 39:
                this.setValidating(false);

                return _context.abrupt("return", valid);

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13], [26, 32]]);
      }));

      function validateAsync() {
        return _ref.apply(this, arguments);
      }

      return validateAsync;
    }()
  }, {
    key: "setValidating",
    value: function setValidating(validating) {
      this.validating = validating;
    }
  }, {
    key: "setErrorMessage",
    value: function setErrorMessage(errorMessage) {
      this.errorMessage = errorMessage;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      var data = {};
      var dataOrigin = this.forms.map(function (form) {
        var result = form.getResult();
        data[result.fieldName] = result;
        return result;
      });

      return {
        fieldName: this.fieldName,
        valid: this.isFormValid,
        value: this.value,
        data: data,
        dataOrigin: dataOrigin
      };
    }
  }, {
    key: "getFormData",
    value: function getFormData() {
      var _this = this;

      if (!this.isLayout) {
        console.warn("method: getFormData \u53EA\u5BF9 Form.Box \u548C Form \u6709\u6548");

        return null;
      }

      var data = {};

      this.forms.forEach(function (form) {
        if (data.hasOwnProperty(form.fieldName)) {
          console.error("already exist key " + form.fieldName + " in " + _this.fieldName);
        }
        data[form.fieldName] = form.isLayout ? form.getFormData() : form.value;
      });

      return data;
    }
  }, {
    key: "brother",
    value: function brother(name) {
      if (!this.parent) return null;
      return this.parent.forms.find(function (form) {
        return form.fieldName === name;
      });
    }
  }, {
    key: "top",
    get: function get$$1() {
      if (!this.root) {
        return this;
      }

      return this.root.top;
    }
  }, {
    key: "parent",
    get: function get$$1() {
      return this.root;
    }
  }, {
    key: "isEmpty",
    get: function get$$1() {
      return this.forms.length === 0;
    }
  }, {
    key: "labelStyle",
    get: function get$$1() {
      if (!this.root) return this._labelStyle;
      return _extends({}, this.root.labelStyle, this._labelStyle);
    }
  }, {
    key: "containerStyle",
    get: function get$$1() {
      if (!this.root) return this._containerStyle;
      return _extends({}, this.root.containerStyle, this._containerStyle);
    }
  }, {
    key: "isRequired",
    get: function get$$1() {
      return !!this.component.props.rules.find(function (r) {
        return r[0] === "required";
      });
    }
  }, {
    key: "value",
    get: function get$$1() {
      return mobx.toJS(this._value);
    }
  }, {
    key: "errors",
    get: function get$$1() {
      var errArr = [];
      if (this.errorMessage) {
        errArr.push(this.errorMessage);
      }
      this.forms.forEach(function (form) {
        errArr = [].concat(toConsumableArray(errArr), toConsumableArray(form.errors));
      });

      return errArr;
    }
  }, {
    key: "isFormValid",
    get: function get$$1() {
      return !this.errorMessage && this.errors.length === 0;
    }
  }]);
  return FormStore;
}(), (_descriptor$4 = _applyDecoratedDescriptor$6(_class$o.prototype, "forms", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2$4 = _applyDecoratedDescriptor$6(_class$o.prototype, "_value", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3$3 = _applyDecoratedDescriptor$6(_class$o.prototype, "_labelStyle", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor4$2 = _applyDecoratedDescriptor$6(_class$o.prototype, "_containerStyle", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor5$2 = _applyDecoratedDescriptor$6(_class$o.prototype, "errorMessage", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6$2 = _applyDecoratedDescriptor$6(_class$o.prototype, "validating", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor$6(_class$o.prototype, "top", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "top"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "parent", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "parent"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "isEmpty", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "isEmpty"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "labelStyle", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "labelStyle"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "containerStyle", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "containerStyle"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "isRequired", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "isRequired"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "value", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "value"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "errors", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "errors"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "isFormValid", [mobx.computed], Object.getOwnPropertyDescriptor(_class$o.prototype, "isFormValid"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "setupForm", [_dec$f], Object.getOwnPropertyDescriptor(_class$o.prototype, "setupForm"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "updateFormConfig", [_dec2$7], Object.getOwnPropertyDescriptor(_class$o.prototype, "updateFormConfig"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "tearDownForm", [_dec3$6], Object.getOwnPropertyDescriptor(_class$o.prototype, "tearDownForm"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "addForm", [_dec4$4], Object.getOwnPropertyDescriptor(_class$o.prototype, "addForm"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "removeForm", [_dec5$4], Object.getOwnPropertyDescriptor(_class$o.prototype, "removeForm"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "changeValue", [_dec6$4], Object.getOwnPropertyDescriptor(_class$o.prototype, "changeValue"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "findFormByFieldName", [_dec7$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "findFormByFieldName"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "$", [_dec8$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "$"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "resetValue", [_dec9$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "resetValue"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "validate", [_dec10$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "validate"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "validateAsync", [_dec11$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "validateAsync"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "setValidating", [_dec12$3], Object.getOwnPropertyDescriptor(_class$o.prototype, "setValidating"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "setErrorMessage", [_dec13$2], Object.getOwnPropertyDescriptor(_class$o.prototype, "setErrorMessage"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "getResult", [_dec14$2], Object.getOwnPropertyDescriptor(_class$o.prototype, "getResult"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "getFormData", [_dec15$2], Object.getOwnPropertyDescriptor(_class$o.prototype, "getFormData"), _class$o.prototype), _applyDecoratedDescriptor$6(_class$o.prototype, "brother", [_dec16$1], Object.getOwnPropertyDescriptor(_class$o.prototype, "brother"), _class$o.prototype)), _class$o));

var _dec$g, _class$p, _class2$9, _temp$7;
var FormBox = (_dec$g = mobxReact.inject("form"), _dec$g(_class$p = mobxReact.observer(_class$p = (_temp$7 = _class2$9 = function (_Component) {
  inherits(FormBox, _Component);

  function FormBox(props) {
    classCallCheck(this, FormBox);

    var _this = possibleConstructorReturn(this, (FormBox.__proto__ || Object.getPrototypeOf(FormBox)).call(this, props));

    _this.state = {
      form: new FormStore(_this.props.form, _this, true)
    };
    return _this;
  }

  createClass(FormBox, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.form.tearDownForm();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          form = _props.form,
          children = _props.children,
          rest = objectWithoutProperties(_props, ["form", "children"]);

      return React__default.createElement(
        mobxReact.Provider,
        { form: this.state.form },
        React__default.createElement(
          Flex,
          rest,
          typeof children === "function" ? children(this.state.form) : children
        )
      );
    }
  }]);
  return FormBox;
}(React.Component), _class2$9.propTypes = {
  fieldName: PropTypes.string,
  form: mobxReact.PropTypes.objectOrObservableObject.isRequired,
  style: PropTypes.object,
  containerStyle: PropTypes.object
}, _class2$9.defaultProps = {
  style: {},
  containerStyle: {}
}, _temp$7)) || _class$p) || _class$p);

var _class$q, _temp$8, _class2$a, _temp2$8;

var _templateObject$j = taggedTemplateLiteral(["\n  from{\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n    \n  to{\n    opacity: 1;\n    transform: translateY(0px);\n  }\n"], ["\n  from{\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n    \n  to{\n    opacity: 1;\n    transform: translateY(0px);\n  }\n"]),
    _templateObject2$e = taggedTemplateLiteral(["\n  text-align: right;\n\n  ", ";\n"], ["\n  text-align: right;\n\n  ", ";\n"]),
    _templateObject3$e = taggedTemplateLiteral(["\n          &:before {\n            display: inline-block;\n            margin-right: 1px;\n            content: \"*\";\n            line-height: 1;\n            font-size: 14px;\n            color: #f5222d;\n          }\n        "], ["\n          &:before {\n            display: inline-block;\n            margin-right: 1px;\n            content: \"*\";\n            line-height: 1;\n            font-size: 14px;\n            color: #f5222d;\n          }\n        "]),
    _templateObject4$e = taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n"], ["\n  margin-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n"]),
    _templateObject5$c = taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n  ", ";\n"], ["\n  position: relative;\n  outline: none;\n  ", ";\n"]),
    _templateObject6$b = taggedTemplateLiteral(["\n          .ant-input {\n            border-color: red !important;\n          }\n        "], ["\n          .ant-input {\n            border-color: red !important;\n          }\n        "]),
    _templateObject7$a = taggedTemplateLiteral(["\n  font-size: 12px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 2;\n\n  ", ";\n"], ["\n  font-size: 12px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 2;\n\n  ", ";\n"]),
    _templateObject8$a = taggedTemplateLiteral(["\n          color: red;\n          animation: ", " 0.3s;\n        "], ["\n          color: red;\n          animation: ", " 0.3s;\n        "]),
    _templateObject9$8 = taggedTemplateLiteral(["\n          color: #cacaca;\n        "], ["\n          color: #cacaca;\n        "]),
    _templateObject10$6 = taggedTemplateLiteral(["\n  fill: #333;\n  transition: fill 0.3s;\n"], ["\n  fill: #333;\n  transition: fill 0.3s;\n"]),
    _templateObject11$5 = taggedTemplateLiteral(["\n  line-height: 1;\n  position: absolute;\n  z-index: 2;\n  right: 3px;\n  cursor: pointer;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n\n  transform-origin: center;\n  &:hover {\n    ", " {\n      transition: fill 0.3s;\n      fill: red;\n    }\n  }\n"], ["\n  line-height: 1;\n  position: absolute;\n  z-index: 2;\n  right: 3px;\n  cursor: pointer;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n\n  transform-origin: center;\n  &:hover {\n    ", " {\n      transition: fill 0.3s;\n      fill: red;\n    }\n  }\n"]),
    _templateObject12$4 = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 2;\n  right: 3px;\n\n  transform-origin: center;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n"], ["\n  position: absolute;\n  z-index: 2;\n  right: 3px;\n\n  transform-origin: center;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n"]);

var fadeIn = styled.keyframes(_templateObject$j);

var LabelItem = styled__default(Item)(_templateObject2$e, function (props) {
  return props.required ? styled.css(_templateObject3$e) : "";
});

var FormFieldContainer = styled__default(Flex).attrs({
  alignItems: function alignItems(props) {
    return props.alignItems ? props.alignItems : "center";
  }
})(_templateObject4$e);

var FormField = styled__default(Item).attrs({
  flex: function flex$$1(props) {
    return props.flex ? props.flex : "1";
  },
  hasError: function hasError(props) {
    return !!props.hasError;
  }
})(_templateObject5$c, function (props) {
  return props.hasError ? styled.css(_templateObject6$b) : "";
});

var FormMessage = styled__default.span(_templateObject7$a, function (props) {
  return props.hasError ? styled.css(_templateObject8$a, fadeIn) : styled.css(_templateObject9$8);
});

var StyledPath = styled__default.path(_templateObject10$6);

var Container$9 = styled__default.svg(_templateObject11$5, StyledPath);

var FormClear = (_temp$8 = _class$q = function (_Component) {
  inherits(FormClear, _Component);

  function FormClear() {
    classCallCheck(this, FormClear);
    return possibleConstructorReturn(this, (FormClear.__proto__ || Object.getPrototypeOf(FormClear)).apply(this, arguments));
  }

  createClass(FormClear, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          style = _props.style,
          className = _props.className,
          visible = _props.visible,
          rest = objectWithoutProperties(_props, ["size", "style", "className", "visible"]);


      return React__default.createElement(
        reactSpring.Spring,
        {
          from: { opacity: 0, scale: 0 },
          to: { opacity: visible ? 1 : 0, scale: visible ? 1 : 0 } },
        function (_ref) {
          var opacity = _ref.opacity,
              scale = _ref.scale;
          return React__default.createElement(
            Container$9,
            _extends({}, rest, {
              viewBox: "0 0 44 44",
              className: className,
              style: _extends({}, style, {
                opacity: opacity,
                width: size,
                height: size,
                transform: "translate(-50%,-50%)scale(" + scale + ")"
              }) }),
            React__default.createElement(StyledPath, { d: "m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm3.2,22.4l7.5,7.5c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.5-7.5c-0.2-0.2-0.5-0.2-0.7,0l-7.5,7.5c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l7.5-7.5c0.2-0.2 0.2-0.5 0-0.7l-7.5-7.5c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.2-0.2 0.5-0.3 0.7-0.3s0.5,0.1 0.7,0.3l7.5,7.5c0.2,0.2 0.5,0.2 0.7,0l7.5-7.5c0.2-0.2 0.5-0.3 0.7-0.3 0.3,0 0.5,0.1 0.7,0.3l1.4,1.4c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-7.5,7.5c-0.2,0.1-0.2,0.5 3.55271e-15,0.7z" })
          );
        }
      );
    }
  }]);
  return FormClear;
}(React.Component), _class$q.propTypes = {
  visible: PropTypes.bool
}, _class$q.defaultProps = {
  size: 14,
  visible: true,
  title: "清除"
}, _temp$8);

var SpinContainer = styled__default.div(_templateObject12$4);

var FormSpin = (_temp2$8 = _class2$a = function (_Component2) {
  inherits(FormSpin, _Component2);

  function FormSpin() {
    classCallCheck(this, FormSpin);
    return possibleConstructorReturn(this, (FormSpin.__proto__ || Object.getPrototypeOf(FormSpin)).apply(this, arguments));
  }

  createClass(FormSpin, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          size = _props2.size,
          style = _props2.style,
          className = _props2.className,
          visible = _props2.visible,
          rest = objectWithoutProperties(_props2, ["size", "style", "className", "visible"]);


      return React__default.createElement(
        reactSpring.Spring,
        {
          from: { opacity: 0, scale: 0 },
          to: { opacity: visible ? 1 : 0, scale: visible ? 1 : 0 } },
        function (_ref2) {
          var opacity = _ref2.opacity,
              scale = _ref2.scale;
          return React__default.createElement(
            SpinContainer,
            _extends({}, rest, {
              viewBox: "0 0 44 44",
              className: className,
              style: _extends({}, style, {
                opacity: opacity,
                transform: "translate(-50%,-50%)scale(" + scale + ")"
              }) }),
            React__default.createElement(_default$4, { size: size })
          );
        }
      );
    }
  }]);
  return FormSpin;
}(React.Component), _class2$a.propTypes = {
  visible: PropTypes.bool
}, _class2$a.defaultProps = {
  size: 16,
  visible: true
}, _temp2$8);

function getDecorator$4(withArgs, defaultProps) {
  return function (Comp) {
    var _class, _temp;

    return mobxReact.inject("form")(mobxReact.observer((_temp = _class = function (_Component) {
      inherits(_class, _Component);

      function _class(props) {
        classCallCheck(this, _class);

        var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          form: new FormStore(_this.props.form, _this)
        };
        return _this;
      }

      createClass(_class, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.state.form.tearDownForm();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.fieldName !== this.props.fieldName) {
            console.error("不支持动态改变 fieldName", prevProps.fieldName);
          }

          if (prevProps.rules !== this.props.rules || prevProps.labelStyle !== this.props.labelStyle || prevProps.containerStyle !== this.props.containerStyle) {
            this.state.form.updateFormConfig();
          }
        }
      }, {
        key: "removeBlackListProps",
        value: function removeBlackListProps() {
          var _this2 = this;

          //移除黑名单的字段;
          var blackList = ["form", "label", "initialValue", "rules", "labelStyle", "containerStyle", "onChange", "hint", "fieldName", "isMobXReactObserver", "propTypes"];
          var newProps = {};

          Object.keys(this.props).forEach(function (key) {
            if (blackList.includes(key)) return;
            newProps[key] = _this2.props[key];
          });

          return newProps;
        }
      }, {
        key: "render",
        value: function render() {
          var _props = this.props,
              label = _props.label,
              hint = _props.hint;
          var _state$form = this.state.form,
              labelStyle = _state$form.labelStyle,
              isRequired = _state$form.isRequired,
              errorMessage = _state$form.errorMessage,
              containerStyle = _state$form.containerStyle;


          return React__default.createElement(
            mobxReact.Provider,
            { form: this.state.form },
            React__default.createElement(
              FormFieldContainer,
              { style: containerStyle },
              React__default.createElement(
                LabelItem,
                { required: isRequired, style: labelStyle },
                " ",
                label
              ),
              React__default.createElement(
                FormField,
                { tabIndex: 0, hasError: !!errorMessage },
                React__default.createElement(Comp, _extends({}, this.removeBlackListProps(), { form: this.state.form })),
                React__default.createElement(
                  FormMessage,
                  { hasError: !!errorMessage },
                  errorMessage ? errorMessage : hint
                )
              )
            )
          );
        }
      }]);
      return _class;
    }(React.Component), _class.propTypes = {
      fieldName: PropTypes.string,
      initialValue: PropTypes.any,
      rules: PropTypes.array.isRequired,
      label: PropTypes.any,
      labelStyle: PropTypes.object,
      containerStyle: PropTypes.object,
      onChange: PropTypes.func,
      hint: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
    }, _class.defaultProps = _extends({
      rules: [],
      containerStyle: {}
    }, defaultProps), _temp)));
  };
}

function withForm () {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isReactElement = typeof arguments[0] === "function";
  var decorator = getDecorator$4(!isReactElement, defaultProps);
  return decorate(!isReactElement, decorator, arguments);
}

var _class$r, _class2$b, _temp2$9;

var FormInput = withForm(_class$r = mobxReact.observer(_class$r = (_temp2$9 = _class2$b = function (_Component) {
  inherits(FormInput, _Component);

  function FormInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnChange = function (e) {
      _this.props.form.changeValue(e.target.value);
    }, _this.handleBlur = function () {
      _this.props.form.validate();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FormInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.form.value,
          rest = objectWithoutProperties(_props, ["form"]);


      return React__default.createElement(_Input, _extends({
        value: value,
        onChange: this.handleOnChange,
        onBlur: this.handleBlur
      }, rest));
    }
  }]);
  return FormInput;
}(React.Component), _class2$b.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}, _temp2$9)) || _class$r) || _class$r;

var _dec$h, _class$s, _class2$c, _temp$9;

var FormCheckGroup = (_dec$h = withForm({
  initialValue: []
}), _dec$h(_class$s = mobxReact.observer(_class$s = (_temp$9 = _class2$c = function (_Component) {
  inherits(FormCheckGroup, _Component);

  function FormCheckGroup() {
    classCallCheck(this, FormCheckGroup);
    return possibleConstructorReturn(this, (FormCheckGroup.__proto__ || Object.getPrototypeOf(FormCheckGroup)).apply(this, arguments));
  }

  createClass(FormCheckGroup, [{
    key: "handleOptionOnChange",
    value: function handleOptionOnChange(_ref) {
      var value = _ref.value;
      var form = this.props.form;

      return function (event) {
        var isChecked = event.target.checked;
        var currentValue = form.value;
        form.changeValue(isChecked ? [].concat(toConsumableArray(currentValue), [value]) : currentValue.filter(function (val) {
          return val !== value;
        }));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.form.value,
          options = _props.options;

      return React__default.createElement(
        Flex,
        { wrap: "wrap" },
        options.map(function (option) {
          return React__default.createElement(
            Item,
            { key: option.value },
            React__default.createElement(
              _Checkbox,
              {
                checked: value.includes(option.value),
                onChange: _this2.handleOptionOnChange(option),
                disabled: option.disabled },
              option.label
            )
          );
        })
      );
    }
  }]);
  return FormCheckGroup;
}(React.Component), _class2$c.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool
  })).isRequired
}, _temp$9)) || _class$s) || _class$s);

var _class$t, _class2$d, _temp$a;

var _default$g = withForm(_class$t = mobxReact.observer(_class$t = (_temp$a = _class2$d = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    classCallCheck(this, _default$$1);
    return possibleConstructorReturn(this, (_default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).apply(this, arguments));
  }

  createClass(_default$$1, [{
    key: "handleOptionOnChange",
    value: function handleOptionOnChange(_ref) {
      var value = _ref.value;
      var form = this.props.form;

      return function (event) {
        form.changeValue(value);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.form.value,
          options = _props.options;

      return React__default.createElement(
        Flex,
        { wrap: "wrap" },
        options.map(function (option) {
          return React__default.createElement(
            Item,
            { key: option.value },
            React__default.createElement(
              _Radio,
              {
                checked: value === option.value,
                onChange: _this2.handleOptionOnChange(option),
                disabled: option.disabled },
              option.label
            )
          );
        })
      );
    }
  }]);
  return _default$$1;
}(React.Component), _class2$d.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool
  })).isRequired
}, _temp$a)) || _class$t) || _class$t;

var _class$u, _class2$e, _temp2$a;

var _default$h = withForm(_class$u = mobxReact.observer(_class$u = (_temp2$a = _class2$e = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnChange = function (value) {
      _this.props.form.changeValue(value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.form.value,
          options = _props.options,
          rest = objectWithoutProperties(_props, ["form", "options"]);

      return React__default.createElement(
        _Select,
        _extends({}, rest, { onChange: this.handleOnChange, value: value, style: { width: "100%" } }),
        options.map(function (option) {
          return React__default.createElement(
            _Select.Option,
            { value: option.value, key: option.value, disabled: option.disabled },
            option.label
          );
        })
      );
    }
  }]);
  return _default;
}(React.Component), _class2$e.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool
  })).isRequired
}, _temp2$a)) || _class$u) || _class$u;

var _dec$i, _class$v, _class2$f, _temp2$b;

var _default$i = (_dec$i = withForm({
  initialValue: []
}), _dec$i(_class$v = mobxReact.observer(_class$v = (_temp2$b = _class2$f = function (_Component) {
  inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnChange = function (value) {
      _this.props.form.changeValue(value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.form.value,
          options = _props.options;

      return React__default.createElement(_Cascader, {
        onChange: this.handleOnChange,
        value: mobx.toJS(value),
        style: { width: "100%" },
        options: options,
        expandTrigger: "hover"
      });
    }
  }]);
  return _default;
}(React.Component), _class2$f.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.array
  })).isRequired
}, _temp2$b)) || _class$v) || _class$v);

var _dec$j, _class$w, _class2$g, _temp$b;

var _default$j = (_dec$j = mobxReact.inject("form"), _dec$j(_class$w = mobxReact.observer(_class$w = (_temp$b = _class2$g = function (_Component) {
  inherits(_default, _Component);

  function _default(props) {
    classCallCheck(this, _default);

    var _this = possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = {
      form: new FormStore(_this.props.form, _this)
    };
    return _this;
  }

  createClass(_default, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.form.tearDownForm();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.fieldName !== this.props.fieldName) {
        console.error("不支持动态改变 fieldName", prevProps.fieldName);
      }

      if (prevProps.rules !== this.props.rules || prevProps.labelStyle !== this.props.labelStyle || prevProps.containerStyle !== this.props.containerStyle) {
        this.state.form.updateFormConfig();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          children = _props.children,
          hint = _props.hint;
      var _state$form = this.state.form,
          labelStyle = _state$form.labelStyle,
          isRequired = _state$form.isRequired,
          errorMessage = _state$form.errorMessage,
          containerStyle = _state$form.containerStyle;

      var component = children(this.state.form);

      //如果不存在, 那么不渲染任何组件
      if (!component) {
        return null;
      }
      return React__default.createElement(
        mobxReact.Provider,
        { form: this.state.form },
        React__default.createElement(
          FormFieldContainer,
          { style: containerStyle },
          React__default.createElement(
            LabelItem,
            { required: isRequired, style: labelStyle },
            " ",
            label
          ),
          React__default.createElement(
            FormField,
            { tabIndex: 0, hasError: !!errorMessage },
            component,
            React__default.createElement(
              FormMessage,
              { hasError: !!errorMessage },
              errorMessage ? errorMessage : hint
            )
          )
        )
      );
    }
  }]);
  return _default;
}(React.Component), _class2$g.propTypes = {
  fieldName: PropTypes.string,
  initialValue: PropTypes.any,
  rules: PropTypes.array.isRequired,
  label: PropTypes.any,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  children: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
}, _class2$g.defaultProps = {
  rules: [],
  containerStyle: {}
}, _temp$b)) || _class$w) || _class$w);

var _class$x, _temp$c;

var Form = (_temp$c = _class$x = function (_Component) {
  inherits(Form, _Component);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.checkIsKeyEnterPress = function (_ref) {
      var keyCode = _ref.keyCode,
          target = _ref.target;

      if (keyCode === 13 && _this.props.onPressEnter) {
        var domTarget = reactDom.findDOMNode(_this);
        if (domTarget === target || domTarget.contains(target)) {
          _this.props.onPressEnter(target);
        }
      }
    };

    _this.state = {
      form: new FormStore(null, _this)
    };
    return _this;
  }

  createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.checkIsKeyEnterPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.form.tearDownForm();
      document.removeEventListener("keydown", this.checkIsKeyEnterPress);
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return this.state.form;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(
        mobxReact.Provider,
        { form: this.state.form },
        React__default.createElement(
          React.Fragment,
          null,
          this.props.children
        )
      );
    }
  }]);
  return Form;
}(React.Component), _class$x.propTypes = {
  labelStyle: PropTypes.object,
  onPressEnter: PropTypes.func
}, _class$x.defaultProps = {
  labelStyle: {
    width: "30%",
    paddingRight: 10
  }
}, _temp$c);


Form.FormCascader = _default$i;
Form.FormSelect = _default$h;
Form.FormRadioGroup = _default$g;
Form.CheckGroup = FormCheckGroup;
Form.Input = FormInput;
Form.Box = FormBox;
Form.Connect = _default$j;
Form.Clear = FormClear;
Form.Spin = FormSpin;

var _dec$k, _dec2$8, _dec3$7, _dec4$5, _class$y, _descriptor$5, _descriptor2$5;

function _initDefineProp$5(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$7(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var TreeStore = (_dec$k = mobx.action.bound, _dec2$8 = mobx.action.bound, _dec3$7 = mobx.action.bound, _dec4$5 = mobx.action.bound, (_class$y = function () {
  function TreeStore(props) {
    classCallCheck(this, TreeStore);

    _initDefineProp$5(this, "props", _descriptor$5, this);

    _initDefineProp$5(this, "expandKeys", _descriptor2$5, this);

    this.props = props;
  }

  createClass(TreeStore, [{
    key: "updateProps",
    value: function updateProps(nextProps) {
      this.props = nextProps;
    }
  }, {
    key: "toggleExpandTree",
    value: function toggleExpandTree(value) {
      if (this.expandKeys.includes(value)) {
        this.expandKeys = this.expandKeys.filter(function (v) {
          return v !== value;
        });
      } else {
        this.expandKeys = [].concat(toConsumableArray(this.expandKeys), [value]);
      }
    }
  }, {
    key: "selectNode",
    value: function selectNode(option) {
      this.props.onSelect(option);
    }
  }, {
    key: "expandAllNodes",
    value: function expandAllNodes() {
      var expandKeys = [];

      var addKeyToExpand = function addKeyToExpand(options) {
        options.forEach(function (option) {
          if (option.children && option.children.length > 0) {
            expandKeys.push(option.value);
            addKeyToExpand(option.children);
          }
        });
      };

      addKeyToExpand(this.options);

      this.expandKeys = expandKeys;
    }
  }, {
    key: "options",
    get: function get$$1() {
      return this.props.options;
    }
  }, {
    key: "checkedKeys",
    get: function get$$1() {
      return this.props.checkedKeys;
    }
  }, {
    key: "checked",
    get: function get$$1() {
      return this.props.checked;
    }
  }, {
    key: "height",
    get: function get$$1() {
      return this.props.height;
    }
  }, {
    key: "width",
    get: function get$$1() {
      return this.props.width;
    }
  }, {
    key: "selectedKeys",
    get: function get$$1() {
      return this.props.value;
    }
  }, {
    key: "searchString",
    get: function get$$1() {
      return this.props.search;
    }
  }, {
    key: "searchRegExp",
    get: function get$$1() {
      return this.searchString && this.searchString.trim().length > 0 ? new RegExp(this.searchString) : new RegExp("");
    }
  }, {
    key: "inSearchMode",
    get: function get$$1() {
      return this.searchString && this.searchString.trim().length > 0;
    }
  }, {
    key: "flattenOptions",
    get: function get$$1() {
      var _this = this;

      var options = [];
      var getFlattenOptions = function getFlattenOptions(option, level, parent) {
        options.push(_extends({}, option, {
          __level__: level,
          __parent__: parent
        }));

        if (_this.expandKeys.includes(option.value) && option.children && option.children.length > 0) {
          option.children.map(function (opt) {
            return getFlattenOptions(opt, level + 1, option);
          });
        }
      };

      this.options.forEach(function (option) {
        return getFlattenOptions(option, 0, null);
      });

      return options;
    }
  }]);
  return TreeStore;
}(), (_descriptor$5 = _applyDecoratedDescriptor$7(_class$y.prototype, "props", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2$5 = _applyDecoratedDescriptor$7(_class$y.prototype, "expandKeys", [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor$7(_class$y.prototype, "options", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "options"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "checkedKeys", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "checkedKeys"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "checked", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "checked"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "height", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "height"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "width", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "width"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "selectedKeys", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "selectedKeys"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "searchString", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "searchString"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "searchRegExp", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "searchRegExp"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "inSearchMode", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "inSearchMode"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "flattenOptions", [mobx.computed], Object.getOwnPropertyDescriptor(_class$y.prototype, "flattenOptions"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "updateProps", [_dec$k], Object.getOwnPropertyDescriptor(_class$y.prototype, "updateProps"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "toggleExpandTree", [_dec2$8], Object.getOwnPropertyDescriptor(_class$y.prototype, "toggleExpandTree"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "selectNode", [_dec3$7], Object.getOwnPropertyDescriptor(_class$y.prototype, "selectNode"), _class$y.prototype), _applyDecoratedDescriptor$7(_class$y.prototype, "expandAllNodes", [_dec4$5], Object.getOwnPropertyDescriptor(_class$y.prototype, "expandAllNodes"), _class$y.prototype)), _class$y));

var _templateObject$k = taggedTemplateLiteral(["\n  cursor: ", ";\n  padding: 0 8px;\n  transition: background-color 0.3s;\n    margin-left: 4px;\n  ", ";\n"], ["\n  cursor: ", ";\n  padding: 0 8px;\n  transition: background-color 0.3s;\n    margin-left: 4px;\n  ", ";\n"]),
    _templateObject2$f = taggedTemplateLiteral(["\n          background-color: #1890ff;\n          color: #efefef;\n        "], ["\n          background-color: #1890ff;\n          color: #efefef;\n        "]),
    _templateObject3$f = taggedTemplateLiteral(["\n          &:hover {\n            background-color: #efefef;\n          }\n        "], ["\n          &:hover {\n            background-color: #efefef;\n          }\n        "]);

var NodeLabel = styled__default(Item)(_templateObject$k, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
}, function (props) {
  return props.selected ? styled.css(_templateObject2$f) : styled.css(_templateObject3$f);
});

var _dec$l, _class$z, _class3$6, _temp2$c;

var RootNode = (_dec$l = mobxReact.inject("tree"), _dec$l(_class$z = mobxReact.observer(_class$z = function (_Component) {
  inherits(RootNode, _Component);

  function RootNode() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RootNode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RootNode.__proto__ || Object.getPrototypeOf(RootNode)).call.apply(_ref, [this].concat(args))), _this), _this.renderHighlightSpan = function () {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var regExp = arguments[1];
      var searchString = _this.props.tree.searchString;


      var arr = text.split(regExp);
      var labelArr = [];
      for (var i = 0; i < arr.length; i++) {
        labelArr.push(React__default.createElement(
          "span",
          { key: searchString + "_" + i + "_" + arr[i] },
          arr[i]
        ));
        if (i !== arr.length - 1) {
          labelArr.push(React__default.createElement(
            "span",
            { key: searchString + "_" + i + "_" + searchString, style: { color: "red" } },
            searchString
          ));
        }
      }

      return labelArr;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RootNode, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$tree = this.props.tree,
          flattenOptions = _props$tree.flattenOptions,
          height = _props$tree.height,
          width = _props$tree.width,
          selectedKeys = _props$tree.selectedKeys,
          expandKeys = _props$tree.expandKeys,
          toggleExpandTree = _props$tree.toggleExpandTree,
          searchRegExp = _props$tree.searchRegExp,
          inSearchMode = _props$tree.inSearchMode,
          checkedKeys = _props$tree.checkedKeys,
          checked = _props$tree.checked,
          _props$tree$props = _props$tree.props,
          onChecked = _props$tree$props.onChecked,
          isChecked = _props$tree$props.isChecked,
          onSelect = _props$tree$props.onSelect;


      if (inSearchMode && flattenOptions.length === 0) return React__default.createElement(
        "div",
        { style: { textAlign: "center" } },
        "\u627E\u4E0D\u5230\u7ED3\u679C"
      );

      return React__default.createElement(reactVirtualized.List, {
        height: height,
        width: width,
        rowCount: flattenOptions.length,
        rowHeight: 30,
        style: { outline: "none" },
        rowRenderer: function rowRenderer(_ref2) {
          var key = _ref2.key,
              index = _ref2.index,
              isScrolling = _ref2.isScrolling,
              isVisible = _ref2.isVisible,
              style = _ref2.style;

          var option = flattenOptions[index];
          var selected = selectedKeys.includes(option.value);
          var disabled = !!option.disabled;
          var expand = expandKeys.includes(option.value);
          return React__default.createElement(
            Flex,
            {
              key: key,
              alignItems: "center",
              style: _extends({}, style, {
                paddingLeft: (option.__level__ ? option.__level__ * 22 : 0) + 5,
                paddingRight: 5
              }) },
            React__default.createElement(
              Item,
              null,
              option.children ? React__default.createElement(_Icon, {
                onClick: function onClick() {
                  return toggleExpandTree(option.value);
                },
                type: expand ? "minus-square-o" : "plus-square-o",
                style: { cursor: "pointer" }
              }) : null
            ),
            React__default.createElement(
              Item,
              null,
              checked ? React__default.createElement(_Checkbox, {
                disabled: disabled,
                onChange: function onChange(_ref3) {
                  var checked = _ref3.target.checked;

                  onChecked(checked, option);
                },
                checked: isChecked(checkedKeys, option),
                style: { marginLeft: 5 }
              }) : null
            ),
            React__default.createElement(
              NodeLabel,
              {
                disabled: disabled,
                onClick: disabled ? null : function () {
                  return onSelect(option, !selected);
                },
                selected: selected },
              inSearchMode ? _this2.renderHighlightSpan(option.label, searchRegExp) : option.label
            )
          );
        }
      });
    }
  }]);
  return RootNode;
}(React.Component)) || _class$z) || _class$z);

var _default$k = (_temp2$c = _class3$6 = function (_Component2) {
  inherits(_default, _Component2);

  function _default(props) {
    classCallCheck(this, _default);

    var _this3 = possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this3.state = {
      treeStore: new TreeStore(_this3.props)
    };
    if (_this3.props.search && _this3.props.search.length > 0) {
      _this3.state.treeStore.expandAllNodes();
    }
    return _this3;
  }

  createClass(_default, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.state.treeStore.updateProps(nextProps);
      if (nextProps.search !== this.props.search) {
        if (!this.props.search && nextProps.search) {
          //用户开始搜索, 展开所有的节点
          this.state.treeStore.expandAllNodes();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.props.style;

      return React__default.createElement(
        mobxReact.Provider,
        { tree: this.state.treeStore },
        React__default.createElement(
          "div",
          { style: style },
          React__default.createElement(RootNode, null)
        )
      );
    }
  }]);
  return _default;
}(React.Component), _class3$6.propTypes = {
  search: PropTypes.string,
  options: mobxReact.PropTypes.arrayOrObservableArray.isRequired,
  value: mobxReact.PropTypes.arrayOrObservableArray.isRequired,
  style: PropTypes.object,
  onSelect: PropTypes.func,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onChecked: PropTypes.func,
  checkedKeys: PropTypes.array,
  checked: PropTypes.bool,
  formatter: PropTypes.func,
  isChecked: PropTypes.func
}, _class3$6.defaultProps = {
  checkedKeys: [],
  checked: false,
  formatter: function formatter(option) {
    return option;
  },
  onChecked: function onChecked() {},
  isChecked: function isChecked(checkedKeys, option) {
    return checkedKeys.includes(option.value);
  }
}, _temp2$c);

var _templateObject$l = taggedTemplateLiteral(["\n  fill: #b9b9b9;\n  transition: all 0.3s;\n  will-change: fill;\n  cursor: pointer;\n  &:hover {\n    fill: ", ";\n  }\n"], ["\n  fill: #b9b9b9;\n  transition: all 0.3s;\n  will-change: fill;\n  cursor: pointer;\n  &:hover {\n    fill: ", ";\n  }\n"]),
    _templateObject2$g = taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 40px;\n  color: #fff;\n  fill: #fff;\n  position: fixed;\n  right: 30px;\n  top: 30px;\n"], ["\n  cursor: pointer;\n  font-size: 40px;\n  color: #fff;\n  fill: #fff;\n  position: fixed;\n  right: 30px;\n  top: 30px;\n"]),
    _templateObject3$g = taggedTemplateLiteral(["\n  display: inline;\n  vertical-align: middle;\n"], ["\n  display: inline;\n  vertical-align: middle;\n"]);

var StyledPath$1 = styled__default.svg(_templateObject$l, variable.primary);
var View = function View(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      onClick = _ref.onClick;

  return React__default.createElement(
    StyledPath$1,
    {
      className: "view-icon",
      viewBox: "0 0 1024 1024",
      width: size,
      height: size,
      onClick: onClick },
    React__default.createElement("path", {
      d: "M512 113.8C146.3 113.8 0 512 0 512s146.3 398.2 512 398.2S1024 512 1024 512 877.6 113.8 512 113.8z m0 672.3C237.7 786.1 128 512 128 512s109.7-274.1 384-274.1c274.2 0 384 274.1 384 274.1S786.3 786.1 512 786.1z m0-444.8c-94.3 0-170.7 76.4-170.7 170.7 0 94.3 76.4 170.7 170.7 170.7S682.7 606.3 682.7 512c0-94.3-76.4-170.7-170.7-170.7z"
    })
  );
};

var StyleCloseIcon = styled__default.svg(_templateObject2$g);

var Close = function Close(_ref2) {
  var onClick = _ref2.onClick;

  return React__default.createElement(
    StyleCloseIcon,
    { onClick: onClick, viewBox: "0 0 1024 1024", width: "40", height: "40" },
    React__default.createElement("path", { d: "M721.6 753.6c-8 0-16-3.2-22.4-9.6L280 324.8c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l419.2 419.2c12.8 12.8 12.8 32 0 44.8-6.4 6.4-14.4 9.6-22.4 9.6z" }),
    React__default.createElement("path", { d: "M302.4 753.6c-8 0-16-3.2-22.4-9.6-12.8-12.8-12.8-32 0-44.8l419.2-419.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L324.8 744c-6.4 6.4-14.4 9.6-22.4 9.6z" })
  );
};

var StyleActionIcon = styled__default.svg.attrs({
  className: "action-icon",
  viewBox: "0 0 1024 1024",
  width: 20,
  height: 20
})(_templateObject3$g);

var Small = function Small() {
  return React__default.createElement(
    StyleActionIcon,
    null,
    React__default.createElement("path", { d: "M924.8 905.6L720 694.4c67.2-67.2 108.8-158.4 108.8-260.8C828.8 228.8 662.4 64 459.2 64S89.6 228.8 89.6 433.6s164.8 369.6 369.6 369.6c78.4 0 152-24 211.2-67.2l208 214.4c6.4 6.4 14.4 9.6 22.4 9.6 8 0 16-3.2 22.4-9.6 14.4-11.2 14.4-32 1.6-44.8zM153.6 433.6C153.6 265.6 291.2 128 459.2 128s305.6 137.6 305.6 305.6c0 168-137.6 305.6-305.6 305.6S153.6 601.6 153.6 433.6z" }),
    React__default.createElement("path", { d: "M640 465.6H278.4c-17.6 0-32-14.4-32-32s14.4-32 32-32H640c17.6 0 32 14.4 32 32s-14.4 32-32 32z" })
  );
};

var Big = function Big() {
  return React__default.createElement(
    StyleActionIcon,
    null,
    React__default.createElement("path", { d: "M924.8 905.6L720 694.4c67.2-67.2 108.8-158.4 108.8-260.8C828.8 228.8 662.4 64 459.2 64S89.6 228.8 89.6 433.6s164.8 369.6 369.6 369.6c78.4 0 152-24 211.2-67.2l208 214.4c6.4 6.4 14.4 9.6 22.4 9.6 8 0 16-3.2 22.4-9.6 14.4-11.2 14.4-32 1.6-44.8zM153.6 433.6C153.6 265.6 291.2 128 459.2 128c168 0 305.6 137.6 305.6 305.6s-137.6 305.6-305.6 305.6c-168 0-305.6-137.6-305.6-305.6z" }),
    React__default.createElement("path", { d: "M640 401.6h-148.8v-148.8c0-17.6-14.4-32-32-32s-32 14.4-32 32v148.8h-148.8c-17.6 0-32 14.4-32 32s14.4 32 32 32h148.8v148.8c0 17.6 14.4 32 32 32s32-14.4 32-32v-148.8H640c17.6 0 32-14.4 32-32s-14.4-32-32-32z" })
  );
};

var FitScreen = function FitScreen() {
  return React__default.createElement(
    StyleActionIcon,
    null,
    React__default.createElement("path", { d: "M560.222793 381.509017 738.680231 203.323778 599.320253 63.962777l357.480764 0 0 357.482811L817.440016 282.08254 639.254777 460.542025 560.222793 381.509017zM560.222793 640.113843l178.458461 178.185238L599.320253 957.661106l357.480764 0 0-357.481787L817.440016 739.541343 639.254777 561.082882 560.222793 640.113843zM459.678866 640.113843 281.221428 818.299081l139.362025 139.362025L63.100642 957.661106l0-357.481787 139.362025 139.362025 178.185238-178.458461L459.678866 640.113843zM459.678866 381.509017 281.221428 203.323778 420.583452 63.962777 63.100642 63.962777l0 357.482811 139.362025-139.362025L380.647905 460.542025 459.678866 381.509017zM459.678866 381.509017" })
  );
};

var RotateIcon = function RotateIcon() {
  return React__default.createElement(
    StyleActionIcon,
    null,
    React__default.createElement("path", { d: "M908.8 64c-12.8 0-32 12.8-32 32v172.8l-25.6-25.6c-51.2-44.8-128-108.8-192-128-108.8-38.4-224-32-326.4 12.8-102.4 51.2-185.6 140.8-224 256-83.2 224 32 467.2 262.4 550.4 51.2 19.2 96 25.6 147.2 25.6 172.8 0 339.2-108.8 403.2-288 6.4-12.8 0-32-19.2-38.4-12.8-6.4-32 0-38.4 19.2-76.8 192-281.6 294.4-473.6 224-192-76.8-294.4-281.6-224-473.6 38.4-96 102.4-172.8 198.4-217.6 83.2-38.4 185.6-38.4 275.2-12.8 51.2 19.2 121.6 70.4 166.4 115.2l38.4 38.4H640c-12.8 0-32 12.8-32 32s12.8 32 32 32h268.8c19.2 0 32-12.8 32-32V96c0-19.2-19.2-32-32-32z" })
  );
};

var PresentMode = function PresentMode() {
  return React__default.createElement(
    StyleActionIcon,
    null,
    React__default.createElement("path", { d: "M928 86.4H96c-17.6 0-32 14.4-32 32s14.4 32 32 32h22.4v500.8c0 52.8 43.2 96 96 96h161.6L297.6 880c-9.6 14.4-4.8 35.2 11.2 43.2 4.8 3.2 11.2 4.8 16 4.8 11.2 0 20.8-4.8 27.2-16l99.2-164.8h123.2L673.6 912c6.4 9.6 16 16 27.2 16 6.4 0 11.2-1.6 16-4.8 14.4-9.6 20.8-28.8 11.2-43.2l-78.4-131.2h161.6c52.8 0 96-43.2 96-96V150.4H928c17.6 0 32-14.4 32-32s-14.4-32-32-32z m-84.8 564.8c0 17.6-14.4 32-32 32H214.4c-17.6 0-32-14.4-32-32V150.4h660.8v500.8z" }),
    React__default.createElement("path", { d: "M331.2 628.8c17.6 0 32-14.4 32-32v-158.4c0-17.6-14.4-32-32-32s-32 14.4-32 32v158.4c0 17.6 12.8 32 32 32zM515.2 628.8c17.6 0 32-14.4 32-32V259.2c0-17.6-14.4-32-32-32s-32 14.4-32 32v337.6c0 17.6 14.4 32 32 32zM694.4 628.8c17.6 0 32-14.4 32-32V350.4c0-17.6-14.4-32-32-32s-32 14.4-32 32v246.4c0 17.6 14.4 32 32 32z" })
  );
};

var _class$A, _class2$h, _temp2$d;

var _templateObject$m = taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 48px;\n  transform: translate(-50%, 0);\n  left: 50%;\n  display: inline-block;\n  background-color: #1f2532;\n  padding: 0px 10px;\n  border-radius: 5px;\n"], ["\n  position: fixed;\n  bottom: 48px;\n  transform: translate(-50%, 0);\n  left: 50%;\n  display: inline-block;\n  background-color: #1f2532;\n  padding: 0px 10px;\n  border-radius: 5px;\n"]),
    _templateObject2$h = taggedTemplateLiteral(["\n  color: #576175;\n  fill: #576175;\n  width: 40px;\n  height: 45px;\n  outline: none;\n  border: 1px solid transparent;\n  background-color: transparent;\n  cursor: pointer;\n  transition: color 0.3s;\n\n  &:hover {\n    color: ", ";\n    fill: ", ";\n    border-top-color: ", ";\n  }\n"], ["\n  color: #576175;\n  fill: #576175;\n  width: 40px;\n  height: 45px;\n  outline: none;\n  border: 1px solid transparent;\n  background-color: transparent;\n  cursor: pointer;\n  transition: color 0.3s;\n\n  &:hover {\n    color: ", ";\n    fill: ", ";\n    border-top-color: ", ";\n  }\n"]),
    _templateObject3$h = taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #6e7079;\n  background-color: rgba(110, 112, 121, 0.9);\n  height: 100%;\n  z-index: 500;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #6e7079;\n  background-color: rgba(110, 112, 121, 0.9);\n  height: 100%;\n  z-index: 500;\n"]),
    _templateObject4$f = taggedTemplateLiteral(["\n    from{\n        opacity: 1;\n    }\n    \n    to{\n        opacity: 0;\n    }\n"], ["\n    from{\n        opacity: 1;\n    }\n    \n    to{\n        opacity: 0;\n    }\n"]),
    _templateObject5$d = taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 500;\n  overflow: auto;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 500;\n  overflow: auto;\n"]),
    _templateObject6$c = taggedTemplateLiteral(["\n  transition: transform, height, width 0.3s, 0.3s, 0.3s;\n  text-align: center;\n  user-select: none;\n  position: relative;\n"], ["\n  transition: transform, height, width 0.3s, 0.3s, 0.3s;\n  text-align: center;\n  user-select: none;\n  position: relative;\n"]),
    _templateObject7$b = taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  cursor: -webkit-grab;\n"], ["\n  width: 100%;\n  height: 100%;\n  cursor: -webkit-grab;\n"]),
    _templateObject8$b = taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 200px;\n  color: #fff;\n  text-align: center;\n  z-index: 10;\n  font-size: 20px;\n  line-height: 200px;\n\n  .download {\n    color: #ff2c66;\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 200px;\n  color: #fff;\n  text-align: center;\n  z-index: 10;\n  font-size: 20px;\n  line-height: 200px;\n\n  .download {\n    color: #ff2c66;\n  }\n"]),
    _templateObject9$9 = taggedTemplateLiteral(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  font-size: 40px;\n  color: #fff;\n  background-color: rgba(181, 181, 181, 0.4);\n  padding: 15px 30px;\n  letter-spacing: 5px;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  user-select: none;\n  pointer-events: none;\n"], ["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  font-size: 40px;\n  color: #fff;\n  background-color: rgba(181, 181, 181, 0.4);\n  padding: 15px 30px;\n  letter-spacing: 5px;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  user-select: none;\n  pointer-events: none;\n"]);
var PreviewActionWrap = styled__default.div(_templateObject$m);

var PreviewActionBtn = styled__default.button(_templateObject2$h, variable.primary, variable.primary, variable.primary);

var Mask = styled__default.div(_templateObject3$h);
var fadeOut = styled.keyframes(_templateObject4$f);
var Wrap = styled__default(Flex)(_templateObject5$d);

var ImgWrap = styled__default(Item).attrs({
  shrink: 0
})(_templateObject6$c);

var StyledImg = styled__default.img(_templateObject7$b);

var ImgUnavaible = styled__default.div(_templateObject8$b);
var ScaleNumber = styled__default.div(_templateObject9$9, function (props) {
  return props.fadeOut ? fadeOut : null;
});

var PreviewImage = portal(_class$A = (_temp2$d = _class2$h = function (_Component) {
  inherits(PreviewImage, _Component);

  function PreviewImage() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PreviewImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PreviewImage.__proto__ || Object.getPrototypeOf(PreviewImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scale: 1,
      rotate: 0,
      loaded: false
    }, _this.handleShortcut = function (e) {
      if (e.keyCode === 27) {
        _this.props.onClose();
      } else if (e.keyCode === 122) {
        fullScreen();
      } else if (e.ctrlKey) ;
      e.stopPropagation();
      e.preventDefault();
      return false;
    }, _this.handleZoomWheel = function (e) {
      //    const isZoomout = e.wheelDelta ? e.wheelDelta > 0 : e.detail > 0;
      //    isZoomout ? this.zoomOut() : this.zoomIn();
    }, _this.imgLoaded = function () {
      _this.setState({
        error: false,
        loaded: true
      }, function () {
        _this.fixImgToScreen({
          maxScale: 1
        });
      });
    }, _this.fixImgToScreen = function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$rotate = _ref2.rotate,
          rotate = _ref2$rotate === undefined ? _this.state.rotate : _ref2$rotate,
          maxScale = _ref2.maxScale,
          _ref2$minScale = _ref2.minScale,
          minScale = _ref2$minScale === undefined ? 0.1 : _ref2$minScale;

      var width = _this.img && _this.img.naturalWidth ? _this.img.naturalWidth : 1200,
          height = _this.img && _this.img.naturalHeight ? _this.img.naturalHeight : 600;
      var swapWidthHeight = rotate % 2 === 1;

      var ratioH = (window.innerHeight - 250) / (swapWidthHeight ? width : height),
          ratioW = (window.innerWidth - 150) / (swapWidthHeight ? height : width);

      var scale = ratioH > ratioW ? ratioW : ratioH;
      if (maxScale) {
        scale = Math.min(scale, maxScale);
      }
      if (minScale) {
        scale = Math.max(scale, minScale);
      }
      _this.setState({
        rotate: rotate,
        scale: scale
      });
    }, _this.zoomIn = function () {
      if (_this.checkImgAvaiable()) {
        _this.setState({
          scale: Math.max(0.1, _this.state.scale / 1.2)
        });
      }
    }, _this.zoomOut = function () {
      if (_this.checkImgAvaiable()) {
        _this.setState({
          scale: Math.min(5, _this.state.scale * 1.2)
        });
      }
    }, _this.rotate = function () {
      if (_this.checkImgAvaiable()) {
        _this.fixImgToScreen({
          rotate: _this.state.rotate + 1,
          maxScale: 1
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PreviewImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleShortcut);
      document.addEventListener("mousewheel", this.handleZoomWheel);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleShortcut);
      document.removeEventListener("mousewheel", this.handleZoomWheel);
    }
  }, {
    key: "checkImgAvaiable",
    value: function checkImgAvaiable() {
      return this.state.loaded && !this.state.error;
    }
  }, {
    key: "getImageAlignProps",
    value: function getImageAlignProps(_ref3) {
      var width = _ref3.width,
          height = _ref3.height,
          scale = _ref3.scale,
          imgAvaiable = _ref3.imgAvaiable,
          rotate = _ref3.rotate;

      if (!imgAvaiable) return {
        justifyContent: "center",
        alignItems: "center"
      };

      var alignItems = "center";
      var justifyContent = "center";

      if (rotate % 2 === 0) {
        if (window.innerHeight < height * scale) {
          alignItems = "flex-start";
        }

        if (window.innerWidth < width * scale) {
          justifyContent = "flex-start";
        }
      } else {
        if (window.innerHeight < width * scale) {
          alignItems = "flex-start";
        }

        if (window.innerWidth < height * scale) {
          justifyContent = "flex-start";
        }
      }

      return {
        justifyContent: justifyContent,
        alignItems: alignItems
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          scale = _state.scale,
          loaded = _state.loaded,
          rotate = _state.rotate,
          error = _state.error;

      var imgAvaiable = this.checkImgAvaiable();
      var zIndex = this.props.zIndex;

      var width = imgAvaiable ? this.img.naturalWidth : 600,
          height = imgAvaiable ? this.img.naturalHeight : 300;

      return React__default.createElement(
        "div",
        null,
        React__default.createElement(Mask, { style: { zIndex: zIndex } }),
        React__default.createElement(
          Wrap,
          _extends({
            style: { zIndex: zIndex }
          }, this.getImageAlignProps({ width: width, height: height, scale: scale, imgAvaiable: imgAvaiable, rotate: rotate })),
          React__default.createElement(
            ImgWrap,
            {
              style: {
                width: scale * width,
                height: scale * height,
                transform: "rotate(" + (loaded ? rotate : 0) * 90 + "deg)"
              } },
            React__default.createElement(StyledImg, {
              alt: "预览图片",
              draggable: false,
              innerRef: function innerRef(img) {
                return _this2.img = img;
              },
              src: this.props.src,
              style: {
                display: imgAvaiable ? "inline-block" : "none"
              },
              onLoad: this.imgLoaded,
              onError: function onError() {
                _this2.setState({
                  error: true,
                  loaded: true
                });
              }
            })
          ),
          imgAvaiable ? React__default.createElement(
            reactSpring.Spring,
            { from: { scale: 1 }, to: { scale: scale } },
            function (style) {
              return React__default.createElement(
                ScaleNumber,
                { fadeOut: scale === style.scale },
                Number(style.scale * 100).toFixed(0),
                "%"
              );
            }
          ) : React__default.createElement(
            ImgUnavaible,
            null,
            error ? React__default.createElement(
              "span",
              null,
              "\u65E0\u6CD5\u9884\u89C8\uFF0C\u8BF7",
              React__default.createElement(
                "a",
                { href: this.props.src, download: true, className: "download" },
                "\u4E0B\u8F7D"
              ),
              "\u67E5\u770B"
            ) : loaded ? "" : React__default.createElement(_default$4, { size: 30 })
          ),
          React__default.createElement(Close, { onClick: this.props.onClose }),
          React__default.createElement(
            reactSpring.Spring,
            { form: { opacity: 0 }, to: { opacity: imgAvaiable ? 1 : 0 } },
            function (style) {
              return React__default.createElement(
                reactSpring.animated.div,
                { style: { opacity: style.opacity, position: "fixed" } },
                React__default.createElement(
                  PreviewActionWrap,
                  null,
                  React__default.createElement(
                    _Tooltip,
                    { title: "缩小" },
                    React__default.createElement(
                      PreviewActionBtn,
                      { onClick: _this2.zoomIn },
                      React__default.createElement(Small, null)
                    )
                  ),
                  React__default.createElement(
                    _Tooltip,
                    { title: "放大" },
                    React__default.createElement(
                      PreviewActionBtn,
                      { onClick: _this2.zoomOut },
                      React__default.createElement(Big, null)
                    )
                  ),
                  React__default.createElement(
                    _Tooltip,
                    { title: "适配屏幕" },
                    React__default.createElement(
                      PreviewActionBtn,
                      { onClick: _this2.fixImgToScreen },
                      React__default.createElement(FitScreen, null)
                    )
                  ),
                  React__default.createElement(
                    _Tooltip,
                    { title: "旋转" },
                    React__default.createElement(
                      PreviewActionBtn,
                      { onClick: _this2.rotate },
                      React__default.createElement(RotateIcon, null)
                    )
                  ),
                  React__default.createElement(
                    _Tooltip,
                    { title: "演示" },
                    React__default.createElement(
                      PreviewActionBtn,
                      { onClick: fullScreen },
                      React__default.createElement(PresentMode, null)
                    )
                  )
                )
              );
            }
          )
        )
      );
    }
  }]);
  return PreviewImage;
}(React.Component), _class2$h.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  zIndex: PropTypes.number
}, _temp2$d)) || _class$A;

var _class$B, _temp2$e;

var _templateObject$n = taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: transparent;\n"], ["\n  display: inline-block;\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: transparent;\n"]),
    _templateObject2$i = taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: transparent;\n  transition: background-color 0.3s;\n  pointer-events: ", ";\n  & .view-icon {\n    opacity: 0;\n  }\n\n  &:hover {\n    background-color: rgba(51, 51, 51, 0.7);\n    & .view-icon {\n      opacity: 1;\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: transparent;\n  transition: background-color 0.3s;\n  pointer-events: ", ";\n  & .view-icon {\n    opacity: 0;\n  }\n\n  &:hover {\n    background-color: rgba(51, 51, 51, 0.7);\n    & .view-icon {\n      opacity: 1;\n    }\n  }\n"]);
var Wrap$1 = styled__default.div(_templateObject$n);

var Mask$1 = styled__default(Flex).attrs({ alignItems: "center", justifyContent: "center" })(_templateObject2$i, function (props) {
  return props.disabled ? "none" : "initial";
});

var _default$l = (_temp2$e = _class$B = function (_Component) {
  inherits(_default$$1, _Component);

  function _default$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, _default$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _default$$1.__proto__ || Object.getPrototypeOf(_default$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      avai: false,
      inPreview: false
    }, _this.handleOnLoad = function () {
      var onLoad = _this.props.onLoad;

      if (onLoad) {
        onLoad();
      }
      _this.setState({
        avai: true
      });
    }, _this.handleOnError = function (e) {
      var onError = _this.props.onError;


      if (onError) {
        onError.apply(_this, [e]);
      }

      _this.setState({
        avai: false
      });
    }, _this.handleOnClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          preview = _this$props.preview;


      if (onClick) {
        onClick.apply(_this, [e]);
      }
      if (preview) {
        _this.showPreview();
      }
    }, _this.hidePreview = function () {
      _this.setState({
        inPreview: false
      });
    }, _this.showPreview = function () {
      _this.setState({
        inPreview: true
      });
    }, _this.getIconSize = function () {
      if (!_this.container) return 0;

      var _this$container$getBo = _this.container.getBoundingClientRect(),
          width = _this$container$getBo.width,
          height = _this$container$getBo.height;

      return Math.max(16, Math.min(30, Math.min(width, height) * 0.2));
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(_default$$1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          src = _props.src,
          onClick = _props.onClick,
          preview = _props.preview,
          zIndex = _props.zIndex,
          previewSrc = _props.previewSrc,
          onError = _props.onError,
          onLoad = _props.onLoad,
          style = _props.style,
          imgProps = objectWithoutProperties(_props, ["src", "onClick", "preview", "zIndex", "previewSrc", "onError", "onLoad", "style"]);
      var _state = this.state,
          avai = _state.avai,
          inPreview = _state.inPreview;

      var hasCursor = preview || !!onClick;
      var showPreview = preview && avai && src && inPreview;

      return React__default.createElement(
        Wrap$1,
        { innerRef: function innerRef(container) {
            return _this2.container = container;
          } },
        React__default.createElement("img", _extends({
          alt: "图片",
          src: src
        }, imgProps, {
          style: _extends({ cursor: hasCursor ? "pointer" : null }, style),
          onClick: this.handleOnClick,
          onLoad: this.handleOnLoad,
          onError: this.handleOnError
        })),
        preview && avai && src ? React__default.createElement(
          Mask$1,
          null,
          React__default.createElement(View, { size: this.getIconSize(), onClick: this.showPreview })
        ) : null,
        showPreview ? React__default.createElement(PreviewImage, {
          zIndex: zIndex,
          src: previewSrc ? previewSrc : src,
          onClose: this.hidePreview
        }) : null
      );
    }
  }]);
  return _default$$1;
}(React.Component), _class$B.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.bool,
  previewSrc: PropTypes.string,
  zIndex: PropTypes.number
}, _class$B.defaultProps = {
  preview: false,
  zIndex: 1000
}, _temp2$e);

var _class$C, _temp$d;

var Script = (_temp$d = _class$C = function (_React$Component) {
  inherits(Script, _React$Component);

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  function Script(props) {
    classCallCheck(this, Script);

    var _this = possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, props));

    _this.scriptLoaderId = "id" + _this.constructor.idCount++; // eslint-disable-line space-unary-ops, no-plusplus
    _this.state = {
      load: _this.constructor.loadedScripts[_this.props.url],
      hasError: !!_this.constructor.erroredScripts[_this.props.url]
    };
    return _this;
  }

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.


  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.


  createClass(Script, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = this.props.url;
      var _state = this.state,
          load = _state.load,
          hasError = _state.hasError;


      if (load || hasError) return;

      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this;
        return;
      }

      this.constructor.scriptObservers[url] = defineProperty({}, this.scriptLoaderId, this);

      this.createScript();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];

      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      if (observers) {
        delete observers[this.scriptLoaderId];
      }
    }
  }, {
    key: "handleOnLoad",
    value: function handleOnLoad() {
      this.props.onLoad();
      this.setState({
        load: true,
        hasError: false
      });
    }
  }, {
    key: "handleOnError",
    value: function handleOnError() {
      this.props.onError();
      this.setState({
        load: true,
        hasError: true
      });
    }
  }, {
    key: "createScript",
    value: function createScript() {
      var _this2 = this;

      var _props = this.props,
          onCreate = _props.onCreate,
          url = _props.url,
          attributes = _props.attributes;

      var script = document.createElement("script");

      onCreate();

      // add 'data-' or non standard attributes to the script tag
      if (attributes) {
        Object.keys(attributes).forEach(function (prop) {
          return script.setAttribute(prop, attributes[prop]);
        });
      }

      script.src = url;

      // default async to true if not set with custom attributes
      if (!script.hasAttribute("async")) {
        script.async = 1;
      }

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        Object.keys(observers).forEach(function (key) {
          if (shouldRemoveObserver(observers[key])) {
            delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
          }
        });
      };
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.handleOnLoad();
          return true;
        });
      };

      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.handleOnError();
          return true;
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          load = _state2.load,
          hasError = _state2.hasError;

      return load && children ? children(hasError) : null;
    }
  }]);
  return Script;
}(React__default.Component), _class$C.propTypes = {
  attributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onCreate: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  url: PropTypes.string.isRequired,
  children: PropTypes.func
}, _class$C.defaultProps = {
  attributes: {},
  onCreate: function onCreate() {},
  onError: function onError() {},
  onLoad: function onLoad() {}
}, _class$C.scriptObservers = {}, _class$C.loadedScripts = {}, _class$C.erroredScripts = {}, _class$C.idCount = 0, _temp$d);

exports.Item = Item;
exports.item = item;
exports.Flex = Flex;
exports.flex = flex;
exports.onlyOneReq = onlyOneReq;
exports.portal = portal;
exports.lastReq = lastReq;
exports.Memorize = _default;
exports.createModal = createModal;
exports.confirmCompose = confirmCompose;
exports.randomStr = randomStr;
exports.Overlay = Overlay;
exports.createProvider = createProvider;
exports.deepEqual = deepEqual;
exports.Spin = _default$4;
exports.ContentLoader = ContentLoader;
exports.Card = _default$5;
exports.TagSelect = _default$6;
exports.Tag = _default$7;
exports.App = App;
exports.Cascader = _default$a;
exports.Table = Table;
exports.Form = Form;
exports.configuration = configuration;
exports.Tree = _default$k;
exports.Image = _default$l;
exports.NavLink = NavLink;
exports.Redirect = Redirect;
exports.Script = Script;
