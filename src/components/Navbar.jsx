import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse clear" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
               <li><Link to='games' activeClassName='navbar-active'>Browse</Link></li>
               <li><Link to='events' activeClassName='navbar-active'>Events</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='#'>sign up</Link></li>
              <li><Link to='login'>login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
