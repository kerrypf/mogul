import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button, Icon } from 'antd';
import styles from './index.module.less';

const FormItem = Form.Item;

class Query extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleFormReset: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
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
                <FormItem
                  label={label}
                  {...this.handleFormItemCol(simpleItems.length + 1)}
                >
                  {getFieldDecorator(dataIndex, options)(render(this.props))}
                </FormItem>
              </Col>
            );
          })}
          <Col {...this.handleRowCol(simpleItems.length + 1)}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }
  renderAdvancedForm() {
    const { form, data } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        {data.map((row, rowIndex) => (
          <Row gutter={this.handleGutter(row.length)} key={rowIndex}>
            {row.map((item, itemIndex) => {
              const { label, dataIndex, render, options } = item;
              if (label !== undefined) {
                return (
                  <Col {...this.handleRowCol(row.length)} key={itemIndex}>
                    <FormItem
                      label={label}
                      {...this.handleFormItemCol(row.length)}
                    >
                      {getFieldDecorator(dataIndex, options)(
                        render(this.props)
                      )}
                    </FormItem>
                  </Col>
                );
              } else {
                return <span key={itemIndex} />;
              }
            })}
          </Row>
        ))}
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type="up" />
            </a>
          </span>
        </div>
      </Form>
    );
  }
  render() {
    return (
      <div className={styles.tableListForm}>
        {this.state.expandForm
          ? this.renderAdvancedForm()
          : this.renderSimpleForm()}
      </div>
    );
  }
}

export default Query;
