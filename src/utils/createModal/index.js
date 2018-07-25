import React, { isValidElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Modal } from "antd";

export const createModal = ({
  id = null,
  children,
  onOk = () => {},
  onCancel = () => {},
  ...modalProps
} = {}) => {
  if (!isValidElement(children)) {
    throw new Error("你必须输入一个有效的react element");
  }

  if (id) {
    let existDiv = document.getElementById(id);
    if (existDiv) {
      unmountComponentAtNode(existDiv);
      existDiv.remove();
    }
  }

  const div = document.createElement("div");
  if (id) {
    div.setAttribute("id", id);
  }
  document.body.appendChild(div);

  const unmountModal = () => {
    unmountComponentAtNode(div);
    div.remove();
  };

  const tryResolveModal = () => {
    let result = onOk();

    if (result instanceof Promise) {
      result.then(unmountModal);
    } else {
      unmountModal();
    }
  };

  const tryRejectModal = () => {
    let result = onCancel();

    if (result instanceof Promise) {
      result.then(unmountModal);
    } else {
      unmountModal();
    }
  };

  render(
    <Modal {...modalProps} visible={true} onOk={tryResolveModal} onCancel={tryRejectModal}>
      <div>{children}</div>
    </Modal>,
    div
  );

  return unmountModal;
};
