import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <Redirect to="/todos" />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
});

export default connect(mapStateToProps)(PublicRoute);
