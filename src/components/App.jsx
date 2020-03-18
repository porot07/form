import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import SidebarNav from './SidebarNav';
import Groups from './Groups';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <Switch>
      <Route exact path="/" component={Auth} />
      <PrivateRoute path="/main" component={SidebarNav} />
      {/* <PrivateRoute path="/main/groups" component={Groups} /> */}
    </Switch>
);

export default App;
