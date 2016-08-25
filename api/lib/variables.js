const bcrypt = require('bcrypt');

exports.salt = bcrypt.genSaltSync(10);
