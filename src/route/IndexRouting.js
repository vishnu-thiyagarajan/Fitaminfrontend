import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import ProtectedRoute from './protected.route';
import PrivateRoutes from './PrivateRoutes';
import { loginUserSuccess } from '../redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ForgotPswd from "../components/ForgotPassword";

function IndexRouting() {
  let dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(loginUserSuccess(foundUser));
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ foundUser.token;
    }
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          { PrivateRoutes.map((route, index)=>
            <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.component} requiredRoles={route.requiredRoles} /> 
          )}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default IndexRouting;
