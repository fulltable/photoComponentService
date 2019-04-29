const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const router = require('./routes');

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
const port = 3002;

app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
