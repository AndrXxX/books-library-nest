const express = require("express");
const serverless = require('serverless-http');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/characters', (req, res) => {
  res.json([]);
});

app.get('/api/character', (req, res) => {
  const id = req.query.id;
  res.json([]);
});

module.exports.handler = serverless(app);
