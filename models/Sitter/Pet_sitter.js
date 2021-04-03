const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Pet_sitter extends Model {}
Pet_sitter.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sitter_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'pet_sitter'

    }

);
module.exports = Pet_sitter;