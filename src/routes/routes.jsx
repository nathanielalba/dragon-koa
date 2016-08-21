import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// import Layout from '../components/Layout.jsx';
import Home from '../components/Home.jsx';
import Error404NotFound from '../components/404.jsx';

export default (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
