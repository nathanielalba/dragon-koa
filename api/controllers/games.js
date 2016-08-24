const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/dragonChatKoa');

const games = require('../models/games');

exports.index = function *() {
  const res = yield games.find({});
  this.body = res;
  // this.body = yield games;
}
