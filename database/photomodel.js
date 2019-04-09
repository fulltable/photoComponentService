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

// const findRestaurantbyID = (id, cb) => {
//   Photo.findById(id, (err, success) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, success);
//     }
//   });
// };


module.exports = {
  Photo,
};
