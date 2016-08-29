const parse = require('co-body');
const gamesDB = require('../models/games').db;

exports.index = function *() {
  const res = yield gamesDB.find({});
  this.set('Access-Control-Allow-Origin', '*')
  this.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  this.body = res;
  // this.body = yield games;
}

exports.post = function *() {
  const postData = yield parse(this);
  this.body = postData;
}

exports.detailsParam = function *(slug, next) {
  this.game = yield gamesDB.findOne({ "slug": slug });
  if (!this.game) return this.status = 404;
  yield next;
}

exports.details = function *(next) {
  this.body = this.game;
  // const game = yield gamesDB.findOne()
}
