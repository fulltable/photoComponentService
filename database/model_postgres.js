/* eslint-disable */
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('images', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true, 
            autoIncrement: true
        },
        comment: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
        imageurl: {
            type: Sequelize.STRING
        },
        userid: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
}

// Queries to seed and format image table
// var query = `CREATE TABLE IF NOT EXISTS images (id SERIAL PRIMARY KEY, comment VARCHAR(255), date VARCHAR(255), imageurl VARCHAR(255), userid INT)`;
// var query1 = `\COPY images (comment, date, imageurl, userid) FROM '~/Desktop/photoComponentService/database/dataImage.csv' DELIMITER '@'`;
// var query2 = `CREATE INDEX idx_userid ON images(userid)`;



