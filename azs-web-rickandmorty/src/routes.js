import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';
import Main from './layout/Main';
import EpisodeDetails from './pages/EpisodeDetails';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout exact path="/" component={Home} layout={Main} />
        <RouteWithLayout exact path="/details/:id" component={EpisodeDetails} layout={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
