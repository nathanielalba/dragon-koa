import React from 'react';

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
          <div className="container">
            {this.props.children}
          </div>
          <script src="bundle.js"></script>
        </body>
      </html>
    )
  }
}
