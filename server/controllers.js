const models = require('./models');

module.exports = {
  restaurants: {
    get: (req, res) => {
      const params = req.params.id;
      models.restaurants.get(params, (err, result) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send(result);
        }
      });
    },
    post: (req, res) => {
      const params = req.params.id;
      models.restaurants.post(params, (err) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send('Success');
        }
      });
    },
    delete: (req, res) => {
      const params = req.params.id;
      models.restaurants.delete(params, (err, result) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send(result);
        }
      });
    },
  },
  restaurant: {
    post: (req, res) => {
      const params = [req.params.id, req.body];
      models.restaurant.post(params, (err) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send('Success!');
        }
      });
    },
    put: (req, res) => {
      const params = [req.params.id, req.query.imageUrl, req.query.comment];
      models.restaurant.put(params, (err) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send('Updated!');
        }
      });
    },
    delete: (req, res) => {
      const params = [req.params.id, req.query.imageUrl];
      models.restaurant.delete(params, (err, result) => {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send(result);
        }
      });
    },
  },
};
