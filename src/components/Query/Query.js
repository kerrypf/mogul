import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col, Button, Icon } from "antd";
import styled from "styled-components";

const SubmitBtn = styled.span`
  white-space: nowrap;
  margin-bottom: 24px;
`;

const TableListForm = styled.div`
  & .ant-form-item {
    margin-bottom: 24px !important;
    margin-right: 0;
    display: flex !important;
  }

  & .ant-form-item-label {
    line-height: 32px;
    padding-right: 8px;
  }

  & .ant-form-item-control {
    line-height: 32px;
  }

  & .ant-form-item-control-wrapper {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    & .ant-form-item {
      margin-right: 24px;
    }
  }

  @media screen and (max-width: 992px) {
    & .ant-form-item {
      margin-right: 8px;
    }
  }
`;

const FormItem = Form.Item;

class Query extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleFormReset: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    enableCollapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
  };

  static defaultProps = {
    enableCollapse: false
  };

  constructor(props) {
    super(props);
    this.state = {
      expandForm: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }
  toggleForm() {
    this.setState({
      expandForm: !this.state.expandForm
    });
  }
  handleSearch(event) {
    this.props.handleSearch(event);
  }
  handleFormReset() {
    this.props.handleFormReset();
  }
  handleRowCol(columnNum) {
    switch (columnNum) {
      case 1:
        return {
          md: 8,
          sm: 24
        };
      case 2:
        return {
          md: 12,
          sm: 24
        };
      case 3:
        return {
          md: 8,
          sm: 24
        };
      default:
        return {
          md: 8,
          sm: 24
        };
    }
  }
  handleGutter(columnNum) {
    switch (columnNum) {
      case 1:
        return 24;
      case 2:
        return 18;
      case 3:
        return 24;
      default:
        return 24;
    }
  }
  handleFormItemCol(columnNum) {
    switch (columnNum) {
      case 1:
        return {
          labelCol: {
            span: 6
          },
          wrapperCol: {
            span: 18
          }
        };
      case 2:
        return {
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 20
          }
        };
      case 3:
        return {
          labelCol: {
            span: 6
          },
          wrapperCol: {
            span: 18
          }
        };
      default:
        return {
          labelCol: {
            span: 6
          },
          wrapperCol: {
            span: 18
          }
        };
    }
  }
  renderSimpleForm() {
    const { form, data } = this.props;
    const { getFieldDecorator } = form;
    const simpleData = data
      .filter(row => row.find(({ simple }) => simple) !== undefined)
      .map(row => row.filter(({ simple }) => simple));
    const simpleItems = [];
    simpleData.forEach(row => {
      row.forEach(item => {
        simpleItems.push(item);
      });
    });
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={this.handleGutter(simpleItems.length)}>
          {simpleItems.map(({ label, dataIndex, render, options }, index) => {
            return (
              <Col {...this.handleRowCol(simpleItems.length + 1)} key={index}>
                <FormItem label={label} {...this.handleFormItemCol(simpleItems.length + 1)}>
                  {getFieldDecorator(dataIndex, options)(render(this.props))}
                </FormItem>
              </Col>
            );
          })}
          <Col {...this.handleRowCol(simpleItems.length + 1)}>
            <SubmitBtn>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </SubmitBtn>
          </Col>
        </Row>
      </Form>
    );
  }
  renderAdvancedForm() {
    const { form, data, enableCollapse } = this.props;
    const { getFieldDecorator } = form;

    let showCollapseBtn = typeof enableCollapse === "function" ? enableCollapse() : enableCollapse;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        {data.map((row, rowIndex) => (
          <Row gutter={this.handleGutter(row.length)} key={rowIndex}>
            {row.map((item, itemIndex) => {
              const { label, dataIndex, render, options } = item;
              if (label !== undefined) {
                return (
                  <Col {...this.handleRowCol(row.length)} key={itemIndex}>
                    <FormItem label={label} {...this.handleFormItemCol(row.length)}>
                      {getFieldDecorator(dataIndex, options)(render(this.props))}
                    </FormItem>
                  </Col>
                );
              } else {
                return <span key={itemIndex} />;
              }
            })}
          </Row>
        ))}
        <div style={{ overflow: "hidden" }}>
          <span style={{ float: "right", marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              重置
            </Button>
            {showCollapseBtn ? (
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                收起 <Icon type="up" />
              </a>
            ) : null}
          </span>
        </div>
      </Form>
    );
  }
  render() {
    const { enableCollapse } = this.props;
    let component = null;
    if (enableCollapse) {
      if (typeof enableCollapse === "function") {
        enableCollapse()
          ? this.state.expandForm
            ? this.renderAdvancedForm()
            : this.renderSimpleForm()
          : this.renderAdvancedForm();
      } else {
        component = this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
      }
    } else {
      component = this.renderAdvancedForm();
    }
    return <TableListForm>{component}</TableListForm>;
  }
}

export default Query;
