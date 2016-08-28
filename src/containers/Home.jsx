import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
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

export default connect()(Home);
