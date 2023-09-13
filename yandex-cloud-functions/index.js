const express = require("express");
const serverless = require('serverless-http');
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');
const { dbUrl } = require('./config');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  return await handler(event, context);
};
