import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import MyForm from './MyForm';
import Side from './Side';

const Header = () => {
  return (
    <Switch>
      <Route path="/main">
        <Side />
      </Route>
      <Route path="/topics">
        <Topics/>
      </Route>
      <Route path="/">
        <div id="components-form-login"><MyForm /></div>
      </Route>
    </Switch>
  );
};


const Topics = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic/>
        </Route>
        <Route path={`${match.path}`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  const { topicId } = useParams();
  return <h3>Requested Topic ID: {topicId}</h3>;
};

export default Header;
