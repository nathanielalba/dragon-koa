import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

require('!style!css!sass!resolve-url!sass?sourceMap!applicationStyles');

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
