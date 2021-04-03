const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Status_Category extends Model {}

Status_Category.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    status_category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'status_category',
});

module.exports = Status_Category;