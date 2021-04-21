import { Router, Switch, Route } from 'react-router-dom';
// utils
import history from './utils/history';
//components
import Login from './Home/Login';
import Register from './Home/Register';

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;