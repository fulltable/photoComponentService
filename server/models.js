/* eslint-disable */
// Written for Postgres
const Image = require('../database/index_postgres');

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
    post: (params, callback) => {
      Image.create({
        comment: null,
        date: null,
        imageurl: null,
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
        comment: params[1][0],
        date: params[1][1],
        imageurl: params[1][2],
        userid: params[0]
      }).then(function(result) {
        callback(result);
      }).catch(function(err) {
        callback(err)
      })
    },
    put: (params, callback) => {
      Image.update({
        comment: params[1]
      }, {
        where: {
          id: params[0]
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
          id: parseInt(params)
        }
      }).then(function(err, result) {
        callback(err, result);
      })
    }
  }
}


