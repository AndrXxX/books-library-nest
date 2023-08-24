const express = require('express');
const passport = require('passport');
const YandexStrategy = require('passport-yandex').Strategy;
const config = require('./config');
const rootRouter = require('./routes/root');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new YandexStrategy({
    clientID: config.yandexClientId,
    clientSecret: config.yandexClientSecret,
    callbackURL: config.yandexCallbackUrl,
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      return done(null, profile);
    });
  }
));

const app = express();
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: config.cookieSecret }));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

app.use('/', rootRouter);

app.listen(config.port, () => {
  console.log(`server start http://localhost:${config.port}`)
});
