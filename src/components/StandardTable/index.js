import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Table, Alert, Radio, Button } from "antd";
//import styles from './index.module.less';
import styled, { injectGlobal } from "styled-components";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

injectGlobal`
    .ant-radio-group {
      margin-right: 8px;
    }
    .ant-table-pagination {
      margin-top: 24px;
    }
`;

const TableListOperator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  button {
    margin-right: 8px;
  }
`;

const StyledTableAlert = styled.div`
  margin-bottom: 16px;
`;

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  static propTypes = {
    selectedRows: PropTypes.array,
    onSelectRow: PropTypes.func,
    onChange: PropTypes.func,
    onExpand: PropTypes.func,
    data: PropTypes.shape({
      list: PropTypes.array,
      pagination: PropTypes.object
    }),
    loading: PropTypes.bool,
    columns: PropTypes.array,
    buttons: PropTypes.node,
    expandedRowRender: PropTypes.func
  };
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
      size: "small",
      showFullScreen: false
    };
    this.handleTableSize = this.handleTableSize.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
  }
  handleTableSize(event) {
    this.setState({ size: event.target.value });
  }
  hasSelection = this.props.selectedRows !== undefined && this.props.onSelectRow !== undefined;

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows !== undefined && nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      this.setState({
        selectedRowKeys: [],
        needTotalList
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let needTotalList = [...this.state.needTotalList];
    needTotalList = needTotalList.map(item => {
      return {
        ...item,
        total: selectedRows.reduce((sum, val) => {
          return sum + parseFloat(val[item.dataIndex], 10);
        }, 0)
      };
    });

    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  handleExpand = (expanded, record) => {
    if (this.props.onExpand !== undefined) {
      this.props.onExpand(expanded, record);
    }
  };
  handleFullScreen() {
    this.setState({
      showFullScreen: !this.state.showFullScreen
    });
  }
  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const {
      data: { list, pagination },
      loading,
      columns
    } = this.props;
    const { current, pageSize } = pagination;
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      hideOnSinglePage: true,
      showTotal: total => {
        const totalPages =
          parseInt(total / pageSize) === total / pageSize
            ? total / pageSize
            : parseInt(total / pageSize) + 1;
        return `共 ${total} 条记录 第 ${current} / ${totalPages} 页`;
      },
      ...pagination
    };
    let rowSelection = undefined;
    if (this.hasSelection) {
      rowSelection = {
        selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: record => ({
          disabled: record.disabled
        })
      };
    }
    const TableAlert = this.hasSelection ? (
      <StyledTableAlert>
        <Alert
          message={
            <Fragment>
              已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
              {needTotalList.map(item => (
                <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                  {item.title}总计&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    {item.render ? item.render(item.total) : item.total}
                  </span>
                </span>
              ))}
              <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                清空
              </a>
            </Fragment>
          }
          type="info"
          showIcon
        />
      </StyledTableAlert>
    ) : null;
    const fullScreenStyle = this.state.showFullScreen
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 11,
          backgroundColor: "white",
          padding: "1rem",
          overflow: "auto"
        }
      : {};
    return (
      <div style={fullScreenStyle}>
        <TableListOperator>
          <div>{this.props.buttons || null}</div>
          <div>
            <RadioGroup onChange={this.handleTableSize} value={this.state.size} size="small">
              <RadioButton value="small">小</RadioButton>
              <RadioButton value="middle">中</RadioButton>
              <RadioButton value="default">大</RadioButton>
            </RadioGroup>
            <Button
              size="small"
              icon={this.state.showFullScreen ? "shrink" : "arrows-alt"}
              onClick={this.handleFullScreen}
            />
          </div>
        </TableListOperator>
        <div>
          {TableAlert}
          <Table
            expandedRowKeys={
              loading ? [] : list.filter(({ expand }) => expand).map(({ key }) => key)
            }
            size={this.state.size}
            loading={loading}
            rowKey={record => record.key}
            rowSelection={rowSelection}
            dataSource={list}
            columns={columns}
            pagination={paginationProps}
            onChange={this.handleTableChange}
            onExpand={this.handleExpand}
            expandedRowRender={this.props.expandedRowRender}
          />
        </div>
      </div>
    );
  }
}

export default StandardTable;