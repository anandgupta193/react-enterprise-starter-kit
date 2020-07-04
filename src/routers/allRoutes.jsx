import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';

const Router = () => (
  <>
    <HashRouter>
      <Route path="/" exact component={App} />
      <Route path="/Home" exact component={Home} />
    </HashRouter>
  </>
);
export default Router;
