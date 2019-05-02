const redis = require('redis');
const models = require('./models');

// Create Redis Client
const client = redis.createClient({
  host: 'ec2-13-57-242-190.us-west-1.compute.amazonaws.com',
  port: 6379,
});

client.on('ready', () => {
  console.log('Redis is ready');
});

client.on('error', () => {
  console.log('Error in Redis');
});

module.exports = {
  restaurants: {
    get: (req, res) => {
      const params = req.params.id;
      client.get(params, (err, result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          models.restaurants.get(params, (data) => {
            client.setex(params, 60, JSON.stringify(data));
            return res.status(200).send(data);
          });
        }
      });
    },
    post: (req, res) => {
      const params = req.params.id;
      models.restaurants.post(params, () => {
        res.status(200).send('Success!');
      });
    },
    delete: (req, res) => {
      const params = req.params.id;
      models.restaurants.delete(params, (err) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send('Deleted');
        }
      });
    },
  },
  restaurant: {
    post: (req, res) => {
      const params = [req.params.id, [req.body.comment, req.body.date, req.body.imageUrl]];
      models.restaurant.post(params, () => {
        res.status(200).send('Success!');
      });
    },
    put: (req, res) => {
      const params = [req.query.id, req.query.comment];
      models.restaurant.put(params, () => {
        res.send('Updated!');
      });
    },
    delete: (req, res) => {
      const params = req.query.id;
      models.restaurant.delete(params, (err) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send('Deleted');
        }
      });
    },
  },
};
