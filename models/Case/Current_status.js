const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Current_status extends Model {}

Current_status.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    case_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'case',
            key: 'id',
        }
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'status',
            key: 'id',
        }
    },
    notes: {
        type: DataTypes.STRING,
    },
    insert_time: {
        type: DataTypes.TIME,
        timestamps: true
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'current_status',
});

module.exports = Current_status;