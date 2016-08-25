const router = require('koa-router')();

// --- Routes ---
// Games
const GamesIndex = require('../controllers/games').index;
const GamesPost = require('../controllers/games').post;

// Users
const UserLogin = require('../controllers/users').login;
const UserSignup = require('../controllers/users').signup;

router.get('/test', function *(next) {
  this.body = { shit: 'fuck' };
});

router.get('/games', GamesIndex);
router.post('/games/add', GamesPost);

router.post('/login', UserLogin);
router.post('/signup', UserSignup);

module.exports = router;
