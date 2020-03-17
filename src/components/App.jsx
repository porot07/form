import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Side from './Side';

const App = () => (
    <Switch>
      <Route exact path="/" render={() => <Auth />} />
      <Route path="/main" render={() => <Side />} />
    </Switch>
);

export default App;
