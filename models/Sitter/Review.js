const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Review extends Model {}
Review.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        sitterRating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'review'

    }

);
module.exports = Review;