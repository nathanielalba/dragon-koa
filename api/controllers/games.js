const parse = require('co-body');
const gamesDB = require('../models/games').db;

exports.index = function *() {
  const res = yield gamesDB.find({});
  this.body = res;
  // this.body = yield games;
}

exports.post = function *() {
  const postData = yield parse(this);
  this.body = postData;
}
