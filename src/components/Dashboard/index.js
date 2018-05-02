import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Sider from './Sider';
import styles from './index.module.less';

const { Header, Content, Footer } = Layout;

const Dashboard = props => {
  const { children, routing, tool, footer } = props;
  const { push, location } = routing;
  let pathname;
  if (location !== null) {
    ({ pathname } = location);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider push={push} pathname={pathname} {...props} />
      <Layout>
        <Header className={styles.header}>{tool}</Header>
        <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>{footer}</Footer>
      </Layout>
    </Layout>
  );
};

Dashboard.propTypes = {
  tool: PropTypes.element.isRequired,
  routing: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  logo: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired
};

export default Dashboard;
