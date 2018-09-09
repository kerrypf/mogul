/* eslint-disable */

export const fullScreen = () => {
  const el = document,
    domEl = document.documentElement,
    isFullscreen =
      el.fullScreen ||
      el.mozFullScreen ||
      el.webkitIsFullScreen ||
      domEl.fullScreen ||
      domEl.mozFullScreen ||
      domEl.webkitIsFullScreen;
  let rfs = null;
  if (isFullscreen) {
    rfs =
      el.exitFullscreen || el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen;
    if (rfs) {
      rfs.call(el);
      return;
    }
    rfs =
      domEl.exitFullscreen ||
      domEl.webkitExitFullscreen ||
      domEl.mozCancelFullScreen ||
      domEl.msExitFullscreen;

    if (rfs) {
      rfs.call(domEl);
      return;
    }
  } else {
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen;
    if (rfs) {
      rfs.call(el);
      return;
    }
    rfs =
      domEl.requestFullScreen ||
      domEl.webkitRequestFullScreen ||
      domEl.mozRequestFullScreen ||
      domEl.msRequestFullScreen;

    if (rfs) {
      rfs.call(domEl);
      return;
    }
  }
  // try run script
  if (typeof window.ActiveXObject !== "undefined") {
    const wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
};
