const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    species_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'species',
            key: 'id',
        },
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Pet'
});

module.exports = Pet;
