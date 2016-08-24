const db = require('../lib/db');
const wrap = require('co-monk');

module.exports = wrap(db.get('games'));
