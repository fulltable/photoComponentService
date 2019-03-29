const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/photowheel');

const photoSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
  comment: [{ body: String, date: Date }],
  restaurant_id: String,

});


const Photo = mongoose.model('Photo', photoSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!');
});

module.exports.Photo = Photo;
module.exports.db = db;
