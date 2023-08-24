const express = require('express');
const passport = require("passport");
const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/', (req, res) => {
  res.render('index', {user: req.user});
});

router.get('/profile',
  isAuthenticated,
  (req, res) => {
    res.json({user: req.user});
  }
);

router.get('/login',
  passport.authenticate('yandex')
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

router.get('/auth/yandex/callback',
  passport.authenticate('yandex', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
