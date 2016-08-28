import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import Home from '../src/containers/Home.jsx';
import Layout from './Layout.jsx';
import { config } from '../src/store/config.jsx';

import { fetchAPIData } from '../controllers/fetchData.jsx';

const store = config();


export default class Index extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const games = fetchAPIData('games');

    const preloadedState = { games }

    const store = config(games);

    const html = renderToString(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    return (
      <Layout>
        <div id="app">
          ${html}
        </div>
      </Layout>
    )
  }
}
