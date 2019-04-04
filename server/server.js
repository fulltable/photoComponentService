const express = require('express');
const bodyParser = require('body-parser');
const Photo = require('../database/photomodel');
const db = require('../database/index');
// const search = require('../database/index').search;

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

app.get('/api/restaurants/1/photos', (req, res) => {
  console.log('get request received');
  // { id: req.params.id }
  Photo.find()
    .then((results) => {
      console.log(results);
      res.send(results);
    });
});

// app.get('/api/restaurants/1/photos', (req, res) => {
//   Photo.find();
//   return db.search()
//   .then((result) => {
//     console.log('result of find', result);
//     res.send(result);
//   });
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
