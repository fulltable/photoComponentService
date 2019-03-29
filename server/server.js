const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 1300;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
