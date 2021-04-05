const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Skills extends Model {}
Skills.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        skill_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'skills'

    }

);
module.exports = Skills;