const express = require('express');
const bodyParser = require('body-parser');
const Photos = require('../database/photomodel');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/api/restaurants/:id/photos', (req, res) => {
  Photos.find({ id: req.params.id })
    .then((results) => {
      res.send(results);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
