/* eslint-disable */
const client = require('./index_cassandra');

var execute = function(query) {
    return new Promise((resolve, reject) => {
        resolve(client.execute(query));
    });
}

var query1 = `CREATE TABLE IF NOT EXISTS images (id INT, comment TEXT, date TEXT, imageurl TEXT, userid INT, PRIMARY KEY ((imageurl, userid), id)) WITH CLUSTERING ORDER BY (id ASC)`;
// var query2 = `COPY images (id, comment, date, imageurl, userid) FROM '~/Desktop/photoComponentService/database/dataImage.csv' WITH DELIMITER='@'`;
var q1 = execute(query1);

Promise.all([q1]).then(() => {
    console.log('exit');
    process.exit();
});
