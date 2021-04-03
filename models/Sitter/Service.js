const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Service extends Model {}
Service.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        has_limit: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        unit_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // add foreign key here
            references: {
                model: 'unit',
                key: 'id',
            }

        },
        Cost_per_unit: {
            type: DataTypes.DECIMAL,
            // its asking to range decimal from (10,2)
            allowNull: false,
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'service'

    }

);
module.exports = Service;