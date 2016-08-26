import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import router from './routes/routes.jsx';

import { config } from './store/config.jsx';

require('!style!css!sass!resolve-url!sass?sourceMap!applicationStyles');

const store = config();

ReactDOM.render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
)
