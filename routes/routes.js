const router = require('koa-router')();

router.get('/', function *() {
  this.render('Index', {});
});

router.get('/directory', function *() {
  this.render('Directory', {});
});


module.exports = router;
