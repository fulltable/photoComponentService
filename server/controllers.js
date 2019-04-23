const models = require('./models');

module.exports = {
  restaurants: {
    get: (req, res) => {
      const params = req.params.id;
      models.restaurants.get(params, (result) => {
        // if (err) {
        //   res.status(400).send('Error');
        // } else {
        res.status(200).json(result);
      });
    },
    post: (req, res) => {
      const params = req.params.id;
      models.restaurants.post(params, () => {
        // if (err) {
        //   res.status(400).send('Error');
        // } else {
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
        // if (err) {
        //   res.status(400).send('Error');
        // } else {
        res.status(200).send('Success!');
      });
    },
    put: (req, res) => {
      const params = [req.params.id, [req.body.comment, req.body.date, req.body.imageUrl]];
      models.restaurant.put(params, () => {
        // if (err) {
        //   res.send(err);
        // } else {
        res.send('Updated!');
      });
    },
    delete: (req, res) => {
      const params = [req.params.id, req.query.imageUrl];
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
