import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import NotFound from './Routes.lazy';
import App from '../components/App';

const Routes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/notfound" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routes;
