const router = require('koa-router')();

const GamesIndex = require('../controllers/games').index;

router.get('/test', function *(next) {
  this.body = { shit: 'fuck' };
});

router.get('/games', GamesIndex);

module.exports = router;
