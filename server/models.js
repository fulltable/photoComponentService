/* eslint-disable */
// Written for Cassandra
// const client = require('../database/index_cassandra');

// module.exports = {
//   restaurants: {
//     get: (params, callback) => {
//       var query = `SELECT * FROM images WHERE userid=${params} ALLOW FILTERING`;
//       client.execute(query, (err, result) => {
//         callback(err, result);
//       });
//     },
//     // Possibly delete because very similar to one below
//     post: (params, callback) => {
//       var queries = [
//         {query: `INSERT INTO images (id, comment, date, imageUrl, userid) VALUES (?, ?, ?, ?, ?)`,
//          params: [1, undefined, undefined, '', params]
//         }
//       ];
//       client.batch(queries, { prepare: true }, (err, result) => {
//         callback(err, result);
//       });
//     },
//     delete: (params, callback) => {
//       var query = `DELETE FROM images WHERE userid=${params}`;
//       client.execute(query, (err, result) => {
//         callback(err, result);
//       });
//     },
//   },
//   restaurant: {
//     post: (params, callback) => {
//       var query = `INSERT INTO images (id, comment, date, imageUrl, userid) VALUES (1, '${params[1][0]}', '${params[1][1]}', '${params[1][2]}', ${params[0]})`;
//       client.execute(query, (err, result) => {
//         callback(err, result);
//       });
//     },
//     put: (params, callback) => {
//       var queries = [
//         {query: `DELETE FROM images WHERE userid=? AND imageUrl=?`,
//          params: [params[0], `${params[1][2]}`]
//         },
//         {query: `INSERT INTO images (id, comment, date, imageUrl, userid) VALUES (?, ?, ?, ?, ?)`,
//          params: [1, `'${params[1][0]}'`, `'${params[1][1]}'`, `'${params[1][2]}'`, params[0]]
//         }
//       ];
//       client.batch(queries, { prepare: true }, (err, result) => {
//         callback(err, result);
//       });
//     },
//     delete: (params, callback) => {
//       var query = `DELETE FROM images WHERE userid=${params[0]} AND imageUrl='${params[1]}'`;
//       client.execute(query, (err, result) => {
//           callback(err, result);
//         });
//     },
//   },
// };


// Written for Postgres
const Image = require('../database/index_postgres');
var randomize = require('randomatic');

module.exports = {
  restaurants: {
    get: (params, callback) => {
      Image.findAll({
        where: {
          userid: parseInt(params)
        }
      }).then(function (result) {
        callback(result);
      }).catch(function(err) {
        callback(err)
      });
    },
    // Figure out how to make unique id or get rid of id
    post: (params, callback) => {
      Image.create({
        id: parseInt(randomize('0', 9)),
        comment: null,
        date: null,
        imageUrl: null,
        userid: params
      }).then(function(result) {
          callback(result);
      }).catch(function(err) {
        callback(err)
      });
    },
    delete: (params, callback) => {
      Image.destroy({
        where: {
          userid: parseInt(params)
        }
      }).then(function(err, result) {
        callback(err, result);
      })
    }
  },
  restaurant: {
    post: (params, callback) => {
      Image.create({
        // Figure out how to make unique id or get rid of id
        id: parseInt(randomize('0', 9)),
        comment: params[1][0],
        date: params[1][1],
        imageUrl: params[1][2],
        userid: params[0]
      }).then(function(result) {
        callback(result);
      }).catch(function(err) {
        callback(err)
      })
    },
    put: (params, callback) => {
      Image.update({
        comment: params[1][0]
      }, {
        where: {
          userid: params[0],
          imageUrl: params[1][2]
        }
      }).then(function(result) {
        callback(result);
      }).catch(function(err) {
        callback(err);
      })
    },
    delete: (params, callback) => {
      Image.destroy({
        where: {
          userid: parseInt(params[0]),
          imageUrl: params[1]
        }
      }).then(function(err, result) {
        callback(err, result);
      })
    }
  }
}


