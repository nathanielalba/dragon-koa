const koa = require('koa');
const app = koa();
const path = require('path');
const register = require('babel-register');
const staticCache = require('koa-static-cache');
const react = require('koa-react-view');
const subdomain = require('koa-subdomain')();
const json = require('koa-json');

const PORT = process.env.PORT || 8000

const router = require('./routes/routes');
const v1APIRouter = require('./api/router/router');

const viewPath = path.join(__dirname, 'views');
const assetsPath = path.join(__dirname, 'public');

react(app, { views: viewPath });

register({
  presets: [ 'es2015', 'react' ],
  extensions: [ '.jsx' ]
});

app.use(router.routes()).use(router.allowedMethods());
subdomain.use('api', v1APIRouter.routes());
app.use(subdomain.routes());

app.use(staticCache(assetsPath));
app.use(json({ pretty: false, param: 'pretty' }));

app.listen(PORT);
console.log('Koa Server running on port:', PORT);
