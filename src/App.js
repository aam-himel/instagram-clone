/* eslint-disable react/jsx-filename-extension */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'; 

function App() {

  // eslint-disable-next-line arrow-body-style
  const Login = lazy(() => import ('./pages/Login'));

  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
      
    </Router>
  );
}

export default App;
