const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class SitterReview extends Model {}
SitterReview.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        PS_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'pet_sitter',
            //     key: 'id',
            // }
        },
        R_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'review',
            //     key: 'id',
            // }
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sitterReview'

    }

);
module.exports = SitterReview;