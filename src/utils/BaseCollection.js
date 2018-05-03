import { Component } from 'react';

class BaseCollection extends Component {
  createHandleTableChange(store) {
    return (pagination, filtersArg, sorter) => {
      // 处理分页，排序，筛选的变化
      const { listTable } = store;
      const { formValues } = this.state;
      const getValue = obj =>
        Object.keys(obj)
          .map(key => obj[key])
          .join(',');
      const filters = Object.keys(filtersArg).reduce((obj, key) => {
        const newObj = { ...obj };
        newObj[key] = getValue(filtersArg[key]);
        return newObj;
      }, {});
      const params = {
        page: pagination.current,
        size: pagination.pageSize,
        ...formValues,
        ...filters
      };
      if (sorter.field) {
        params.sorter = `${sorter.field}_${sorter.order}`;
      }
      listTable(params);
    };
  }
  createComponentDidMount(store) {
    return () => {
      // 页面加载完成之后的初始化，axios获取list和options
      const { pagination, listTable, listOptions } = store;
      listTable({
        page: pagination.current,
        size: pagination.pageSize
      });
      listOptions();
    };
  }
  createHandleFormReset(store, initPage = 1) {
    return () => {
      // 处理表单重置操作
      const { form } = this.props;
      form.resetFields();
      this.setState({
        formValues: {}
      });
      const { pagination, listTable } = store;
      listTable({
        page: initPage,
        size: pagination.pageSize
      });
    };
  }
  createHandleSearch(store, formater, initPage = 1) {
    return event => {
      // 处理表单查询操作
      event.preventDefault();
      const { form } = this.props;
      form.validateFields((err, fieldsValue) => {
        if (err) {
          console.log(err);
          return;
        }
        const values = formater(fieldsValue);
        this.setState({
          formValues: values
        });
        const { pagination, listTable } = store;
        listTable({
          ...values,
          page: initPage,
          size: pagination.pageSize
        });
      });
    };
  }
}

export default BaseCollection;
