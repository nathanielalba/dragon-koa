import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// import Layout from '../components/Layout.jsx';
import Home from '../containers/Home.jsx';
import IndexPage from '../components/Index.jsx';
import Directory from '../components/Directory.jsx';
import Events from '../components/Events.jsx';
import Browse from '../components/Browse.jsx';
import Error404NotFound from '../components/404.jsx';

import { fetchData } from '../actions/index_actions.jsx';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={IndexPage}/>
      <Route path='/browse' components={Browse} name='browse' />
      <Route path='/directory' components={Directory} name='directory' />
      <Route path='/events' components={Events} name='events' />
    </Route>
  </Router>
);
