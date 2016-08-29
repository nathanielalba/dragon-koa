import React, { Component } from 'react';

export default class GameDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          This is the game dashboard
        </p>
        {this.props.children}
      </div>
    )
  }
}
