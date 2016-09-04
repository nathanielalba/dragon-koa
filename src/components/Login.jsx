import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(email, pass) {
    axios.post('http://api.lvh.me:8000/login', {
      params: {
        email: email,
        password: pass
      }
    })
    .then((response) => {
      console.log('here is the response');
      console.log(response);
    })
    .catch((error) => {
      console.log('there was an error');
      console.log(error);
    })
  }

  handleLogin(e) {
    e.preventDefault();

    this.loginUser(this.refs.email.value, this.refs.password.value);
  }

  render() {
    return (
      <div className="login-box">
        <form className="login-form" onSubmit={this.handleLogin}>
          <div className="form-group">
            <input type="email" className="form-control input-lg" id="email" ref="email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control input-lg" id="password" ref="password"/>
          </div>
          <button className="btn btn-default btn-block btn-lg">Log In</button>
        </form>
      </div>
    )
  }
}
