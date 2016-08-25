const bcrypt = require('bcrypt');
const validator = require('validator');

const salt = require('../lib/variables').salt;

function User(email, password) {
  if (validator.isEmail(email) && !validator.isNull(password)) {
    const hash = bcrypt.hashSync(password, salt);
    this.email = validator.normalizeEmail(email);
    this.password = hash;
  }
}

module.exports = User;
