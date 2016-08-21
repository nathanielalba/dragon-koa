import React from 'react';

import Navbar from './Navbar.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <title>dragonKoa</title>
        </head>
        <body>
          <Navbar />
          <div className="container">
            {this.props.children}
          </div>
          <script src="bundle.js"></script>
        </body>
      </html>
    )
  }
}
