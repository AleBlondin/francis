// @flow
// $FlowFixMe flow is not ready for Suspense or lazy today
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

// https://m33.gitbook.io/standards/technical-gesture/performance/how-to-build-a-performant-javascript-application/how-to-split-your-code-with-webpack
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Avatar = lazy(() => import('./pages/Avatar'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/avatar" component={Avatar} />
    </Switch>
  </Suspense>
);

export default routes;
