/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  const Login = lazy(() => import('./pages/Login'));
  const SignUp = lazy(() => import('./pages/SignUp'));

  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
