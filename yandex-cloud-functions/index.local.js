const express = require('express');
const apiRouter = require('./routes/api');
const { port } = require('./config');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRouter);

app.listen(port);
