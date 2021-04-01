const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        is_closing_status: {
            type: DataTypes.BOOLEAN,
            
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'status',
    }
);

module.exports = Status;