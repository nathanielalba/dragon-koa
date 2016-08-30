import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// import Layout from '../components/Layout.jsx';
import Home from '../containers/Home.jsx';
import IndexPage from '../components/Index.jsx';
import GameDashboard from '../components/GameDashboard.jsx';
import GameDetails from '../components/GameDetails.jsx';
import GameList from '../components/GameList.jsx';
import Events from '../components/Events.jsx';
import Login from '../components/Login.jsx';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={IndexPage}/>
      <Route path='/events' components={Events} name='events' />
    </Route>
    <Route path='/games' component={GameDashboard}>
      <IndexRoute component={GameList} />
      <Route path='/games/:slug' component={GameDetails} />
    </Route>
    <Route path='/login' component={Login} />
  </Router>
);
