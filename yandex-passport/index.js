const express = require('express');
const serverless = require('serverless-http');
const rootRouter = require('./routes/root');
const init = require('./boot/init');

const app = express();
init(app);
app.use('/', rootRouter);

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};
