// Using Mongoose/MongoDB
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photowheel';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = db;


// Using Cassandra
// const cassandra = require('cassandra-driver');
// const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });

// client.connect(function(err) {
//   console.log(err);
// });

// module.exports = client;
