import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import MyForm from './MyForm';

const Header = () => {
  return (
    <Switch>
      <Route path="/failure">
        <Failure />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/topics">
        <Topics/>
      </Route>
      <Route path="/">
        <div id="components-form-login"><MyForm/></div>
      </Route>
    </Switch>
  );
};

const About = () => {
  return <h2>Hello HacoonaMatata</h2>;
};

const Failure = () => {
  return <h2>403 Forbidden - Access Denied</h2>;
}

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
