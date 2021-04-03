const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Provides extends Model {}
Provides.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sitter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pet_sitter',
                key: 'id',
            }
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Service',
                key: 'id',
            }
        },
        service_limit: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        currently_used: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'provides'

    }

);
module.exports = Provides;