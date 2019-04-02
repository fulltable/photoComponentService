const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const photoSchema = mongoose.Schema({
  id: Number,
  image: {
    imageUrl: String,
    comment: String,
    date: Date,
  },
});
const getPhotos = () => {

}

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
