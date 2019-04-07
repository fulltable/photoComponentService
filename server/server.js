const express = require('express');
const bodyParser = require('body-parser');
const Photo = require('../database/photomodel');
const db = require('../database/index');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
const port = 3000;

app.use(express.static(__dirname + "/../client/dist"));
// path.join(__dirname, '/client/src/index.jsx') fix later

app.get('/api/restaurants/:id/photos', (req, res) => {
  console.log('get request received');
  Photo.find({ restaurantId: req.params.id })
    .then((results) => {
      console.log(results);
      res.send(results);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
