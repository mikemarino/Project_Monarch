const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Case extends Model {}

Case.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  pet_sitter_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pet_sitter',
      key: 'id',
    }
  },
  pet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pet',
      key: 'id',
    }
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
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'case',
});

module.exports = Case;