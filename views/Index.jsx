import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/components/App.jsx';
import Layout from './Layout.jsx';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const contentString = ReactDOMServer.renderToString(<App />);

    return (
      <Layout>
        <div id="app" dangerouslySetInnerHTML={{ __html: contentString }}>
        </div>
      </Layout>
    )
  }
}
