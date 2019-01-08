import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <React.Fragment>
          <Header />
          <Component {...props} />
          <Footer />
        </React.Fragment>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )}
  />
);

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
});

export default connect(mapStateToProps)(PrivateRoute);
