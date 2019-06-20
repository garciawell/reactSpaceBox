import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Company from '../pages/Company';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/empresa" component={Company} />
    <Route path="/servico" component={Services} />
    <Route path="/contato" component={Contact} />
  </Switch>
);

export default Routes;
