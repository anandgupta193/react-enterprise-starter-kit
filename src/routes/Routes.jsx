import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';

const Notfound = lazy(() => import('../components/404/NotFound'));
const App = lazy(() => import('../components/App'));

const Routes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route component={Notfound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routes;
