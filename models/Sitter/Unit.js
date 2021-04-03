// all units we'll use: e.g. working hours, days, etc.

const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Unit extends Model {}
Unit.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        unit_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'unit'

    }

);
module.exports = Unit;