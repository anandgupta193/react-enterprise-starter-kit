import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Notfound from '../components/404/NotFound';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  </>
);
export default Routes;
