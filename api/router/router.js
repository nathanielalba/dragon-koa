const router = require('koa-router')();

router.get('/test', function *(next) {
  this.body = { shit: 'fuck' };
});

module.exports = router;
