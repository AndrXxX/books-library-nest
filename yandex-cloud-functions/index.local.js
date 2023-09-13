const express = require('express');
const apiRouter = require('./routes/api');
const { port, dbUrl } = require('./config');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRouter);

try {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  app.listen(port);
} catch (e) {
  console.error(e);
}
