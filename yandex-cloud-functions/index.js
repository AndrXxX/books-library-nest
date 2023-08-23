const express = require("express");
const serverless = require('serverless-http');
const comicsStore = require('./store/ComicsStore');
const initModels = require('./init/initModels');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
initModels();

app.get('/api/characters', (req, res) => {
  res.json(comicsStore.getAll());
});

app.get('/api/character', (req, res) => {
  const id = req.query.id;
  const item = comicsStore.get(id);
  if (item) {
    return res.json(item);
  }
  res.code(404).json(null);
});

module.exports.handler = serverless(app);
