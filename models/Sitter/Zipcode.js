const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Zipcode extends Model {}
Zipcode.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: true
    },
        latitude: {
            type: DataTypes.INTEGER,
            allowNull: false
    },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull: false
    },
        city: {
            type: DataTypes.STRING,
            allowNull: false
    },
        state: {
            type: DataTypes.STRING,
            allowNull: false
    },
        county: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'zipcode'

    }

);
module.exports = Zipcode;