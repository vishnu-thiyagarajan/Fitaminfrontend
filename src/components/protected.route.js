import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute ({
  component: Component,
  ...rest
}){
  const user = useSelector(state => state.user)
  return (
    <Route
      {...rest}
      render={props => {
        if (user.isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to='/signin' />
      }}
    />
  );
};

export default ProtectedRoute