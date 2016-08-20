const koa = require('koa');
const app = koa();
const path = require('path');
const register = require('babel-register');
const staticCache = require('koa-static-cache');
const react = require('koa-react-view');

const PORT = process.env.PORT || 8000

const router = require('./routes/routes');

const viewPath = path.join(__dirname, 'views');
const assetsPath = path.join(__dirname, 'public');

react(app, { views: viewPath });

register({
  presets: [ 'es2015', 'react' ],
  extensions: [ '.jsx' ]
});

app.use(router.routes()).use(router.allowedMethods());
app.use(staticCache(assetsPath));

app.listen(PORT);
console.log('Koa Server running on port:', PORT);
