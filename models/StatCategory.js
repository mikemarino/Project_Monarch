const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StatCategory extends Model { }

StatCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status_category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'statcategory',
    }
);

module.exports = StatCategory;