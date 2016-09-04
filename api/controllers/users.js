const parse = require('co-body');
const validator = require('validator');

const usersDB = require('../lib/connection')('users');
const User = require('../models/users');
const userLogin = require('../lib/login');

const jwtSign = require('../lib/jwt').sign;
const jwtVerify = require('../lib/jwt').verify;


exports.signup = function *() {
  const res = yield parse(this);
  const user = new User(res.email, res.password);
  usersDB.insert(user);
}

exports.login = function *() {
  this.set('Access-Control-Allow-Origin', '*')
  this.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  const res = yield parse(this);
  const userFound = yield userLogin(res.params.email, res.params.password)
  if(userFound) {
    const token = jwtSign(res.params);
    console.log('correct');
    this.status = 200;
    this.body = { token: token }
  } else {
    console.log('bad login');
    this.status = 404
    this.body = { 'error': 'bad login' }
  }
}

exports.verify = function *() {
  const res = yield parse(this);
  console.log(res.token);
}
