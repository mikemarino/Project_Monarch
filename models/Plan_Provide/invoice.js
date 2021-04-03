const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Invoice extends Model {}

Invoice.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    invoice_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    case_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'case',
            key: 'id',
        },
    },
    time_generated: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    invoice_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    time_charged: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount_charged: {
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

module.exports = Invoice;