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
// var query = `\COPY images (comment, date, imageurl, userid) FROM '~/Desktop/photoComponentService/database/dataImage.csv' DELIMITER '@'`;
// var query1 = `CREATE INDEX idx_userid ON images(userid)`;


