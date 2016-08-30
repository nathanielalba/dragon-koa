import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-box">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" />
          </div>
          <button className="btn btn-default">Log In</button>
        </form>
      </div>
    )
  }
}
