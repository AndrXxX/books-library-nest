const express = require('express');
const initModels = require("../init/initModels");
const charactersStore = require("../store/CharactersStore");
const error404Middleware = require("../middleware/api404");
const router = express.Router();

initModels();

router.get('/characters', async (req, res) => {
  res.json(await charactersStore.getAll());
});

router.get('/character',
  async (req, res, next) => {
    const id = req.query.id;
    const item = await charactersStore.get(id);
    if (!item) {
      return next();
    }
    return res.json(item);
  },
  error404Middleware,
);

module.exports = router;
