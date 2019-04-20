/* eslint-disable */
// Using Mongoose/MongoDB
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

const stream = fs.createWriteStream('dataImage.csv');

function writeTenMillionTimes(writer, dataGenerator, encoding, callback, i) {
  function write() {
    let ok = true;
    do {
      i++;
      let result = dataGenerator(i) + '\n';
      if(i === 1000000) {
        writer.write(result, encoding, callback);
      } else {
        ok = writer.write(result, encoding);
      }
    } while (i < 1000000 && ok);
    if(i < 1000000) {
      writer.once('drain', write);
    }
  }
  write();
}

const generatePhotos = (i) => {
    let photoArr = [];
    const pictureID = (Math.floor(Math.random() * 100) + 1).toString();
      
    photoArr.push(
        i, 
        faker.lorem.sentence(),
        moment(faker.date.recent()).format('MMMM Do YYYY, h:mm:ss a'),
        `https://s3-us-west-1.amazonaws.com/photowheelopentabs/Photo/s${pictureID}_tn.jpg`, 
        Math.floor((i - 1)/10) + 1
      );

    return photoArr.join('@');  
};

writeTenMillionTimes(stream, generatePhotos, encoding = 'UTF-8', callback = () => {}, i = 0);
