const express = require('express');
const bodyParser = require('body-parser');
const Photos = require('../database/photomodel');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/api/restaurants/:id/photos', (req, res) => {
  // console.log(req.params.id);
  // console.log(Photos.find);
  Photos.find({ id: req.params.id }).select('image')
    .then((results) => {
      console.log('this is my data', results);
      
      res.send(results);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
