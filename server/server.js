const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { Photo } = require('../database/photomodel');
const { db } = require('../database/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
const port = 3002;

app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/restaurants/:id/photos', (req, res) => {
  Photo.findOne({ restaurantId: req.params.id }, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
