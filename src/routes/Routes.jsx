import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import { NotFound, App } from './Routes.lazy';

const Routes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routes;
