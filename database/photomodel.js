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

// Photo.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
// });

module.exports = {
  Photo,
};
