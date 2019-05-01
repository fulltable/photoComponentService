const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
// const redis = require('redis');
const router = require('./routes');

// Create Redis Client
// const client = redis.createClient({
//   host: 'localhost',
//   port: 6379,
// });

// client.on('ready', function() {
//   console.log('Redis is ready');
// });

// client.on('error', function() {
//   console.log('Error in Redis');
// });

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

// For loader.io
app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// module.exports = {
//   client,
// };
