const parse = require('co-body');
const validator = require('validator');

const usersDB = require('../lib/connection')('users');
const User = require('../models/users');
const userLogin = require('../lib/login');


exports.signup = function *() {
  const res = yield parse(this);
  const user = new User(res.email, res.password);
  usersDB.insert(user);
}

exports.login = function *() {
  const res = yield parse(this);
  const login = userLogin(res.email, res.password);
  if(login) {
    console.log('logged in successfully');
  }
}
