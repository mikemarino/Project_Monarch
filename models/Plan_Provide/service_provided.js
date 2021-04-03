const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Service_provided extends Model {}

Service_provided.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    case_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'case',
            key: 'id',
        },
    },
    service_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'service',
            key: 'id',
        },
    },
    start_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    units: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cost_per_unit: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    price_charged: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'service_provided'
});

module.exports = Service_provided;