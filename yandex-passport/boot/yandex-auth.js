const passport = require("passport");
const YandexStrategy = require('passport-yandex').Strategy;
const config = require("../config");

module.exports = () => {
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
};
