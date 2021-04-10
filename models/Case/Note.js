const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Note extends Model { }

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        note_text: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        case_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'case',
                key: 'id',
            }

        },
        insert_time: {
            type: DataTypes.TIME,
            timestamps: true,
            
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;