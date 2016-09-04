import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-box">
        <form className="login-form">
          <div className="form-group">
            <input type="email" className="form-control input-lg" id="email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control input-lg" id="password" />
          </div>
          <button className="btn btn-default btn-block btn-lg">Log In</button>
        </form>
      </div>
    )
  }
}
