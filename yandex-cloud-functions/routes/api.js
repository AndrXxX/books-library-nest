const express = require('express');
const initModels = require("../init/initModels");
const charactersStore = require("../store/CharactersStore");
const router = express.Router();

initModels();

router.get('/characters', (req, res) => {
  res.json(charactersStore.getAll());
});

router.get('/character', (req, res) => {
  const id = req.query.id;
  const item = charactersStore.get(id);
  if (item) {
    return res.json(item);
  }
  res.status(404).json(null);
});

module.exports = router;
