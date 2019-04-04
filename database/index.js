const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photowheel';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  restaurantId: Number,
  image: [{
    imageUrl: String,
    comment: String,
    date: Date,
  }],
});

const Photo = mongoose.model('Photo', photoSchema);

const search = () => {
  console.log('inside search');
  return Photo.find();
};

// module.exports = Photo;
module.exports.search = search;
module.exports = db;
module.exports = Photo;
