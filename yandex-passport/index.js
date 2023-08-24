const express = require('express');
const passport = require('passport');
const config = require('./config');
const rootRouter = require('./routes/root');
const yandexAuth = require('./boot/yandex-auth');

const app = express();
yandexAuth();
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: config.cookieSecret }));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

app.use('/', rootRouter);

app.listen(config.port, () => {
  console.log(`server start http://localhost:${config.port}`)
});
