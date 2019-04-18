const Photo = require('../database/photomodel');
const client = require('../database/index');

module.exports = {
  restaurants: {
    get: (params, callback) => {
      Photo.findOne({ restaurantId: params }, (err, result) => {
        callback(err, result);
      });
    },
    post: (params, callback) => {
      Photo.create({ restaurantId: params }, (err, result) => {
        callback(err, result);
      });
    },
    delete: (params, callback) => {
      Photo.deleteOne({ restaurantId: params }, (err, result) => {
        callback(err, result);
      });
    },
  },
  restaurant: {
    post: (params, callback) => {
      Photo.findOneAndUpdate({ restaurantId: params[0] }, { $push: { image: params[1] } }, (err, result) => {
        callback(err, result);
      });
    },
    put: (params, callback) => {
      Photo.update({ restaurantId: params[0], image: { $elemMatch: { imageUrl: params[1] } } }, { $set: { 'image.$.comment': params[2] } }, (err, result) => {
        callback(err, result);
      });
    },
    delete: (params, callback) => {
      Photo.update({ restaurantId: params[0] }, { $pull: { image: { imageUrl: params[1] } } },
        (err, result) => {
          callback(err, result);
        });
    },
  },
};
