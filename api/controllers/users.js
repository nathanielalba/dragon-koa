const parse = require('co-body');

const usersDB = require('../lib/connection')('users');
const User = require('../models/users');


exports.signup = function *() {
  const res = yield parse(this);
  const user = new User(res.email, res.password);
  usersDB.insert(user);
}

exports.login = function *() {
  yield console.log('login');
}
