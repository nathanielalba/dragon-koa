import React, { Component } from 'react';

export default class App extends Component {
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
        <p>Hello</p>
        <a onClick={this.onClickTest}>CLICK ME PREASE</a>
      </div>
    )
  }
}
