const express = require('express');
const config = require('./config');
const rootRouter = require('./routes/root');
const init = require('./boot/init');

const app = express();
init(app);
app.use('/', rootRouter);

app.listen(config.port, () => {
  console.log(`server start http://localhost:${config.port}`)
});
