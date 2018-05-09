import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, Spin } from 'antd';

const { Option } = Select;

class RemoteSelect extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    dataIndex: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      currentOption: undefined,
      loading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearch(query) {
    this.setState({ options: [], loading: true });
    this.props.handleSearch(query).then(options => {
      this.setState({ options, loading: false });
    });
  }
  handleChange(currentOption) {
    this.props.form.setFieldsValue({
      [this.props.dataIndex]: currentOption.key
    });
    this.setState({
      currentOption,
      options: [],
      loading: false
    });
    if (this.props.afterSelect !== undefined) {
      this.props.afterSelect(currentOption.key, currentOption);
    }
  }
  render() {
    const { placeholder } = this.props;
    const { loading, options, currentOption } = this.state;
    return (
      <Select
        showSearch
        labelInValue
        value={currentOption}
        placeholder={placeholder === undefined ? '请搜索并选择' : placeholder}
        notFoundContent={loading ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {options.map(({ label, value }) => (
          <Option key={value}>{label}</Option>
        ))}
      </Select>
    );
  }
}

export default RemoteSelect;
