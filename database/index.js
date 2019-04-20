/* eslint-disable */
// Using Postgres
const Sequelize = require('sequelize');

const db = new Sequelize('postgresql://localhost:5432/test', {
    dialect: 'postgres'
});

db.authenticate()
  .then(function() {
    console.log('Databased connected.');
  })
  .catch(function(err) {
    console.log('Error connecting: ', err);
  });

var Image = db.define('images', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    comment: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, { timestamps: false });

Image.sync().then(function () {
    return Image.create();
});

module.exports = db;

// Using Cassandra
// const cassandra = require('cassandra-driver');
// const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });

// client.connect(function(err) {
//   console.log(err);
// });

// module.exports = client;


// Using Postgres
// const pg = require('pg');

// const client = new pg.Client('postgresql://localhost:5432/test');
// client.connect((err) => {
//   if (err) {
//     console.error('connection error', err)
//   } else {
//     console.log('connected')
//   }
// })

// var count = 2;

// var query1 = client.query(
//     `CREATE TABLE IF NOT EXISTS images (
//         id INT PRIMARY KEY,
//         imageUrl TEXT,
//         comment TEXT,
//         date TEXT
//     )`);

// var query2 = client.query(
//     `CREATE TABLE IF NOT EXISTS photos (
//         id INT PRIMARY KEY,
//         id_image INT,
//         FOREIGN KEY (id_image) REFERENCES images (id)
//     )`);

// var query3 = client.query(
//     `\COPY images FROM '~/Desktop/photoComponentService/tmp/dataImage.csv' DELIMITER ','`
//     );

// var query4 = client.query(
//     `\COPY photos FROM '~/Desktop/photoComponentService/tmp/dataPhoto.csv' DELIMITER ','`
//     );

// function endHandler() {
//     count--;
//     if (count === 0) {
//         client.end();
//     }
// }    

// query1.on('end', endHandler);
// query2.on('end', endHandler);
// query3.on('end', endHandler);
// query4.on('end', endHandler);
    
// module.exports = client;
