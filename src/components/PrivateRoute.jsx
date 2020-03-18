import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, rest }) => {
  const stateLogin = useSelector((state) => state.loadingTokenUI.loadingState);
  return (
  <Route
    {...rest}
      render={(props) => (localStorage.getItem('token') !== null || stateLogin !== 'failure' ? <Component {...props} /> : <Redirect to='/' />) }
  />);
};

export default PrivateRoute;
