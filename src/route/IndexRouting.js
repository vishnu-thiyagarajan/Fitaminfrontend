import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ProtectedRoute from './protected.route';
import PrivateRoutes from './PrivateRoutes';

function IndexRouting() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
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
