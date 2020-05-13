import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated, isAdministrator } from '../services/auth';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import CRUDCompany from '../pages/CRUDCompany';
import CRUDUsers from '../pages/CRUDUsers';
import error from '../pages/Error';

const PrivateRoute = ({ component: Component, ...rest }) => (
 <Route
  {...rest}
  render={props =>
   isAuthenticated() ? (
    <Component {...props} />
   ) : (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
   )
  }
 />
);

/*
const RootRoute = ({ component: Component, ...rest }) => (
 <Route
  {...rest}
  render={props =>
   isAuthenticated() && isAdministrator() ? (
    <Component {...props} />
   ) : (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
   )
  }
 />
);
*/
const Routes = () => (
 <BrowserRouter>
  <Switch>
   <PrivateRoute exact path="/home" component={Dashboard} />
   <PrivateRoute exact path="/jobs" component={CRUDCompany} />
   <PrivateRoute exact path="/users" component={CRUDUsers} />
   <Route exact path="/" component={SignIn} />
   <Route exact path="*" component={error} />
  </Switch>
 </BrowserRouter>
);
export default Routes;
