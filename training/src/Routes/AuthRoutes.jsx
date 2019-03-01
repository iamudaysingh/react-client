import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthLayout } from '../layouts';


export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <AuthLayout>
        <Component {...matchProps} />
      </AuthLayout>
    )}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.isRequired,
};
