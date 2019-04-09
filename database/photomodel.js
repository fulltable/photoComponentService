const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  restaurantId: Number,
  image: [{
    imageUrl: String,
    comment: String,
    date: Date,
  }],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  Photo,
};
