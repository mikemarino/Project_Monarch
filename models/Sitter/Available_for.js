const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Avaliable_for extends Model {}
Avaliable_for.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // foreign key here
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'service',
            key: 'id',
        }
    },
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'species',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'available_for'
});

module.exports = Avaliable_for;