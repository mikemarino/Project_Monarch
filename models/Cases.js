const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Case extends Model {}

Case.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    facility_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    notes: {
      type: DataTypes.STRING,
    },
    closed: {
        type: DataTypes.BOOLEAN
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cases',
  }
);

module.exports = Case;