const yandexAuth = require("./yandex-auth");
const config = require("../config");
const passport = require("passport");

module.exports = (app) => {
  yandexAuth();
  app.use(require('cookie-parser')());
  app.use(require('express-session')({secret: config.cookieSecret}));

  app.set('view engine', 'ejs');
  app.use(passport.initialize());
  app.use(passport.session());
}
