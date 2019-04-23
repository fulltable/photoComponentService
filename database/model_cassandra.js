/* eslint-disable */
const client = require('./index_cassandra');

var execute = function(query) {
    return new Promise((resolve, reject) => {
        resolve(client.execute(query));
    });
}

var query1 = `CREATE TABLE IF NOT EXISTS images (id INT, comment TEXT, date TEXT, imageUrl TEXT, userid INT, PRIMARY KEY ((imageUrl, userid), id))`;
// var query2 = `COPY images (id, comment, date, imageUrl, userid) FROM '~/Desktop/photoComponentService/database/dataImage.csv' WITH DELIMITER='@'`;
var q1 = execute(query1);

Promise.all([q1]).then(() => {
    console.log('exit');
    process.exit();
});
