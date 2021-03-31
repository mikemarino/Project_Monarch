const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Current extends Model { }

Current.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        case_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        notes: {
            type: DataTypes.STRING,
        },
        insert_time: {
            timestamps: true
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'current',
    }
);

module.exports = Current;