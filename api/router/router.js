const router = require('koa-router')();

// --- Routes ---
// Games
const GamesIndex = require('../controllers/games').index;
const GamesPost = require('../controllers/games').post;
const GamesDetail = require('../controllers/games').details;
const GamesDetailParams = require('../controllers/games').detailsParam;

// Users
const UserLogin = require('../controllers/users').login;
const UserSignup = require('../controllers/users').signup;
const TokenVerify = require('../controllers/users').verify;


router.get('/test', function *(next) {
  this.body = { shit: 'fuck' };
});

router.get('/games', GamesIndex);
router.param('slug', GamesDetailParams).get('/games/:slug', GamesDetail);
router.post('/games/add', GamesPost);

router.post('/login', UserLogin);
router.post('/signup', UserSignup);
router.post('/verify', TokenVerify);

module.exports = router;
