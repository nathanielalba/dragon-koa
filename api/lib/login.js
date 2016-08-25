const validator = require('validator');
const bcrypt = require('bcrypt');

const usersDB = require('../lib/connection')('users');
const salt = require('./variables').salt;

function *userLogin(email, password) {
  if(validator.isEmail(email) && !validator.isNull(password)) {
    const user = yield usersDB.findOne({ email: email });
    if (user) {
      yield bcrypt.hashSync(password, salt) === user.password;
    }
  }
}

module.exports = userLogin;
