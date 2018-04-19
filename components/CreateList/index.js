import React from 'react';
import { List, Row, Col } from 'antd';
import styles from './index.module.less';

const CreateList = (columns = [], options = {}) => {
  return record => {
    columns = columns.filter(({ filter }) => {
      if (filter === undefined) {
        return true;
      } else {
        return filter(record);
      }
    });
    const data = columns.map(({ key, dataIndex, title, render }) => {
      let value;
      if (dataIndex !== undefined) {
        value =
          record[
            Object.keys(record).find(recordKey => recordKey === dataIndex)
          ];
        if (value === undefined) {
          value = '-';
        }
      }
      return {
        title,
        key: dataIndex === undefined ? key : dataIndex,
        value,
        render
      };
    });
    const { labelCol = 8, contentCol = 16, column = 4, gutter = 24 } = options;
    return (
      <List
        grid={{ gutter, column }}
        key={record.id}
        dataSource={data}
        renderItem={item => {
          const { title, value, render } = item;
          return (
            <List.Item className={styles.listItem}>
              <Row gutter={4}>
                <Col span={labelCol}>
                  <label className={styles.label}>{title}:</label>
                </Col>
                <Col span={contentCol}>
                  {render === undefined ? <span>{value}</span> : render(record)}
                </Col>
              </Row>
            </List.Item>
          );
        }}
      />
    );
  };
};

export default CreateList;
