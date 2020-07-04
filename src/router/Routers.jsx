import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import notfound from '../components/404/NotFound';

const Routers = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Home" exact component={Home} />
        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  </>
);
export default Routers;
