/* eslint-disable */
// Using Postgres - uncomment to use
const Sequelize = require('sequelize');
const ImagesModel = require('./model_postgres');

const sequelize = new Sequelize(  
  'test',
  'postgres',
  '$password', {
    dialect: 'postgres',
    host: 'ec2-13-57-242-190.us-west-1.compute.amazonaws.com',
    port: 5432, 
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
