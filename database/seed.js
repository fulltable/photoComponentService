// Using Mongoose/MongoDB
const faker = require('faker');
const db = require('./index');
const Photo = require('./photomodel');

const samplePhotos = [];

function generatePhotos() {
  for (let i = 1; i <= 100; i += 1) {
    const photoArray = [];
    const photoNumber = (Math.floor(Math.random() * 10) + 10);
    for (let j = 0; j < photoNumber; j += 1) {
      const pictureID = (Math.floor(Math.random() * 100) + 1).toString();
      photoArray.push({
        imageUrl: `https://s3-us-west-1.amazonaws.com/photowheelopentabs/Photo/s${pictureID}_tn.jpg`,
        comment: faker.lorem.sentence(),
        date: faker.date.recent(),
      });
    }
    samplePhotos.push({
      restaurantId: i,
      image: photoArray,
    });
  }
}

generatePhotos();
console.log(samplePhotos);

// const insertSamplePhotos = () => {
//   Photo.create(samplePhotos)
//     .then(() => db.close());
// };

// insertSamplePhotos();

// Using Cassandra
// const faker = require('faker');
// const client = require('./index');
