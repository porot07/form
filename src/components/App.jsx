import React from 'react';
import { Row } from 'antd';
import 'antd/dist/antd.css';

import Header from './Header';

const App = () => {
  return (
    <div className="container">
      <Row type="flex" justify="center" align="bottom">
        <Header />
      </Row>
    </div>
  );
};

export default App;
