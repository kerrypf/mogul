import { Modal } from "antd";

export const confirmCompose = ({ onOk, ...restConfirmProps } = {}) => {
  return fn => {
    return () => {
      Modal.confirm({
        ...restConfirmProps,
        onOk() {
          return fn();
        }
      });
    };
  };
};
