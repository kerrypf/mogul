import { Modal } from "antd";
import configuration from "../components/configuration";

export const confirmCompose = ({ onOk, ...restConfirmProps } = {}) => {
  return fn => {
    return () => {
      Modal.confirm({
        ...configuration.confirmComposeProps,
        ...restConfirmProps,
        onOk() {
          return fn();
        }
      });
    };
  };
};
