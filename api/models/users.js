const passwordHash = require('password-hash');
const validator = require('validator');

function User(email, password) {
  if (validator.isEmail(email) && !validator.isNull(password)) {
    const hash = passwordHash.generate(password);
    this.email = validator.normalizeEmail(email);
    this.password = hash;
  }
}

module.exports = User;
