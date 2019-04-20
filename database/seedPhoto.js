/* eslint-disable */
// Using Mongoose/MongoDB
const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('dataPhoto.csv');

function writeTenMillionTimes(writer, dataGenerator, encoding, callback, i) {
  function write() {
    let ok = true;
    do {
      i++;
      let result = dataGenerator(i) + '\n';
      if(i === 100) {
        writer.write(result, encoding, callback);
      } else {
        ok = writer.write(result, encoding);
      }
    } while (i < 100 && ok);
    if(i < 100) {
      writer.once('drain', write);
    }
  }
  write();
}

const dataGenerator = (i) => {
  let photoArr = [];
  photoArr.push(
    i
  );
  return photoArr.join(',')
};

writeTenMillionTimes(stream, dataGenerator, encoding = 'UTF-8', callback = () => {}, i = 0);