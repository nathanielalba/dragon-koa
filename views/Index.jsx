import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import Home from '../src/containers/Home.jsx';
import Layout from './Layout.jsx';
import { config } from '../src/store/config.jsx';

const store = config();

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const contentString = ReactDOMServer.renderToString(<Provider store={store}><Home /></Provider>);

    return (
      <Layout>
        <div id="app" dangerouslySetInnerHTML={{ __html: contentString }} className="app-container">
        </div>
      </Layout>
    )
  }
}
