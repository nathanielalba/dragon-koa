const db = require('../lib/db');
const wrap = require('co-monk');

module.exports = function(dbName) {
  return wrap(db.get(dbName));
}
