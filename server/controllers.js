const models = require('./models');

module.exports = {
  restaurants: {
    get: (req, res) => {
      const params = req.params.id;
      models.restaurants.get(params, (result) => {
        return res.status(200).send(result);
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
