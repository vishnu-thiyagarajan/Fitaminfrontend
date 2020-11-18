import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from "./components/Home";
import ProtectedRoute from "./components/protected.route";
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
