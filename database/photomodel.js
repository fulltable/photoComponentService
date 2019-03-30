const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const photoSchema = mongoose.Schema({
  id: Number,
  image: [{
    imageUrl: String,
    comment: String,
    date: Date,
  }],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
