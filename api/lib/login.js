const validator = require('validator');
const bcrypt = require('bcrypt');

const usersDB = require('../lib/connection')('users');
const salt = require('./variables').salt;

function *userLogin(email, password) {
  if(validator.isEmail(email) && !validator.isNull(password)) {
    const user = yield usersDB.findOne({ email: email });
    if (user) {
      if (bcrypt.hashSync(password, salt) === user.password) {
        console.log('password matches');
        return true;
      } else {
        console.log('password does not match');
        return false;
      }
    } else {
      console.log('user not found');
      return false;
    }
  }
}

module.exports = userLogin;
