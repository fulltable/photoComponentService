/* eslint-disable */
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('images', {
        id: {
            type: Sequelize.INTEGER,
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

// Images.sync({force: true}).then(function () {
//     return Images.create();
// });

// var query = `\COPY images FROM '~/Desktop/photoComponentService/database/dataImage.csv' DELIMITER '@'`;
