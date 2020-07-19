import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';

const Notfound = lazy(() => import('../components/404/NotFound'));
const App = lazy(() => import('../components/App'));

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={App} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Route component={Notfound} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  </>
);
export default Routes;
