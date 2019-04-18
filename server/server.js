const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

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

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
