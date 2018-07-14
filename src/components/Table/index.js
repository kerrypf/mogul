import React, { Component } from "react";
import { Provider, PropTypes as MobxPropTypes } from "mobx-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableStore from "./TableStore";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableContainer = styled.div`
  width: 100%;
  position: relative;
  //overflow-x: auto;
`;

const TableInner = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
`;

class Table extends Component {
  static propTypes = {
    style: PropTypes.object,
    data: MobxPropTypes.arrayOrObservableArray.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.any.isRequired,
        key: PropTypes.string.isRequired,
        render: PropTypes.func,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ),
    bordered: PropTypes.bool,
    rowKey: PropTypes.string.isRequired,
    fixHeader: PropTypes.bool,
    headerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
    scrollY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])])
  };

  static defaultProps = {
    bordered: true,
    scrollY: "auto",
    rowHeight: "auto",
    headerHeight: "auto",
    fixHeader: true
  };

  constructor(props) {
    super(props);
    this.state = {
      store: new TableStore(this.props)
    };
  }

  render() {
    const { scrollY, style } = this.props;
    return (
      <Provider table={this.state.store}>
        <TableContainer style={style}>
          <TableInner style={{ height: scrollY }}>
            <TableHeader />
            <TableBody />
          </TableInner>
        </TableContainer>
      </Provider>
    );
  }
}

export default Table;
