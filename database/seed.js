const faker = require('faker');

const database = require('./index');
const Photo = require('./photomodel');

const samplePhotos = [];

function generatePhotos() {
  for (let id = 1; id <= 100; id += 1) {
    const photoArray = [];
    
    for (let i = 0; i < 10; i += 1) {
      const pictureID = (Math.floor(Math.random() * 100) + 1).toString();
      photoArray.push({
        imageUrl: `https://s3-us-west-1.amazonaws.com/photowheelopentabs/${pictureID}.jpg`,
        comment: faker.lorem.sentence(),
        date: faker.date.recent(),
      });
    }
    samplePhotos.push({
      id: id,
      image: photoArray,
    });
  }
}

generatePhotos();

const insertSamplePhotos = function () {
  Photo.create(samplePhotos)
    .then(() => database.disconnect());
};

insertSamplePhotos();
