const express = require('express');
const initModels = require("../init/initModels");
const charactersStore = require("../store/CharactersStore");
const error404Middleware = require("../middleware/api404");
const router = express.Router();

initModels();

router.get('/characters', (req, res) => {
  res.json(charactersStore.getAll());
});

router.get('/character',
  (req, res, next) => {
    const id = req.query.id;
    const item = charactersStore.get(id);
    if (!item) {
      return next();
    }
    return res.json(item);
  },
  error404Middleware,
);

module.exports = router;
