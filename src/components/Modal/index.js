import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

class CustomModal extends Component {
  static propTypes = {
    onConfirm: PropTypes.func,
    title: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
    onShow: PropTypes.func,
    inline: PropTypes.bool,
    hideFooter: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    confirmLoading: PropTypes.bool,
    autoHide: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.hide = this.hide.bind(this);
  }
  showModal() {
    if (this.props.onShow !== undefined) {
      this.props.onShow();
    }
    this.setState({
      visible: true
    });
  }
  handleOk() {
    if (this.props.onConfirm !== undefined) {
      this.props.onConfirm(this.hide);
    }
    if (this.props.autoHide === true || this.props.autoHide === undefined) {
      this.hide();
    }
  }
  hide() {
    this.setState({
      visible: false
    });
  }
  render() {
    const trigger = this.props.inline ? (
      <span onClick={this.showModal}>{this.props.children}</span>
    ) : (
      <div onClick={this.showModal}>{this.props.children}</div>
    );
    const footer = this.props.hideFooter ? null : undefined;
    const modal = (
      <Modal
        confirmLoading={this.props.confirmLoading}
        title={this.props.title}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.hide}
        footer={footer}
        width={this.props.width}
      >
        {this.props.content}
      </Modal>
    );
    return this.props.inline ? (
      <span>
        {trigger}
        {modal}
      </span>
    ) : (
      <div>
        {trigger}
        {modal}
      </div>
    );
  }
}

export default CustomModal;
