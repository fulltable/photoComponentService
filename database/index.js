const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photowheel';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
  db,
};
