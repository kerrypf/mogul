/* eslint-disable */

// Firefox 1.0+
export const isFirefox = typeof InstallTrigger !== "undefined";

// Safari 3.0+ "[object HTMLElementConstructor]"
export const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));

// Internet Explorer 6-11
export const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
export const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
export const isChrome = !!window.chrome && !!window.chrome.webstore;
