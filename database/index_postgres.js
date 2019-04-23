/* eslint-disable */
// Using Postgres - uncomment to use
const Sequelize = require('sequelize');
const ImagesModel = require('./model_postgres');

const sequelize = new Sequelize(  
  'test',
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD, {
    dialect: 'postgres'
});

sequelize.authenticate()
  .then(function() {
    console.log('Databased connected.');
  })
  .catch(function(err) {
    console.log('Error connecting: ', err);
  });

const Images = ImagesModel(sequelize, Sequelize);

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = Images;
