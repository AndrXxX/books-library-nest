const express = require("express");
const serverless = require('serverless-http');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);

module.exports.handler = serverless(app);
