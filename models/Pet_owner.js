const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Pet_owner extends Model {}

Pet_owner.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pet_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'pet',
            key: 'id',
        },
    },
    owner_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'owner',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Pet_owner'
});

module.exports = Pet_owner;
