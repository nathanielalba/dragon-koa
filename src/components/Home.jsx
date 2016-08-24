import React, { Component } from 'react';

import Navbar from './Navbar.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickTest = this.onClickTest.bind(this);
  }

  onClickTest() {
    alert('In react');
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
