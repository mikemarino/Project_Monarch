const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Size extends Model {}
Size.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'size'

    }

);
module.exports = Size;