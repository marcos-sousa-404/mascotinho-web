import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, Component, exact }) => (
        <Route key={path} path={path} exact={exact} component={Component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
