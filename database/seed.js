const database = require('./index');

const samplePhotos = [{
  id: 1,
  imageUrl: 'https://source.unsplash.com/1600x900/?cat',
  comment: [{ body: 'hola', date: '2014-02-10T10:50:42.389Z' }],
  restaurant_id: 'hola',

}]

const insertSamplePhotos = function() {
  database.Photo.create(samplePhotos)
    .then(() => database.db.disconnect());
};

insertSamplePhotos();
