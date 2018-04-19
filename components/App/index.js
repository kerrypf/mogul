import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = ({ routing, children }) => {
  const browserHistory = createBrowserHistory();
  const history = syncHistoryWithStore(browserHistory, routing);
  return (
    <Router history={history}>
      <LocaleProvider locale={zhCN}>{children}</LocaleProvider>
    </Router>
  );
};

export default App;
