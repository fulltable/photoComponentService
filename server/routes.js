const router = require('express').Router();
const controllers = require('./controllers');

// GET all photos for specific restaurant
router.get('/restaurants/:id/photos', controllers.restaurants.get);

// POST a photo container for specific restaurant
router.post('/restaurants/:id/photos', controllers.restaurants.post);

// DELETE all photos for specific restaurant
router.delete('/restaurants/:id/photos', controllers.restaurants.delete);


// POST a photo for specific restaurant
router.post('/restaurant/:id/photos', controllers.restaurant.post);

// PUT a comment of photo for specific restaurant
router.put('/restaurant/:id/photos', controllers.restaurant.put);

// DELETE a photo out of multiple photos for specific restaurant
router.delete('/restaurant/:id/photos', controllers.restaurant.delete);

module.exports = router;
