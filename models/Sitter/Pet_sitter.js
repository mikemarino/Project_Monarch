const {
    Model,
    DataTypes
} = require('sequelize');
// const { sitterReview } = require('../Case/sitterReview');
const sequelize = require('../../config/connection');

class Pet_sitter extends Model {}
Pet_sitter.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        sitter_first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sitter_last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        zipcode_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'zipcode',
                key: 'id',
            }
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'service',
                key: 'id',
            }
        },
        skill_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'skills',
                key: 'id',
            }
        },
        aboutTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aboutText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        watch: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        watchSize: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'size',
                key: 'id',
            }
        },
        host: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        hostSize: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'size',
                key: 'id',
            }
        },
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'review',
                key: 'id',
            }
        },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'pet_sitter'

    }

);
module.exports = Pet_sitter;