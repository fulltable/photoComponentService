/* eslint-disable */
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'test'});

client.connect(function(err) {
    if (err) {
        console.log('Error');
    } else {
        var query = `CREATE KEYSPACE IF NOT EXISTS test WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1}`;
        return client.execute(query);
    }
});

module.exports = client;