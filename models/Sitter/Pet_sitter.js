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
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sitter_first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sitter_last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        addressLine1: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        addressLine2: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        zipcode_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // defaultValue: 0,
            references: {
                model: 'zipcode',
                key: 'id',
            }
        },
        mobile: {
            type: DataTypes.STRING,
            defaultValue: "No Phone",
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: "No email",
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // defaultValue: 0,
            references: {
                model: 'service',
                key: 'id',
            }
        },
        skill_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // defaultValue: 0,
            references: {
                model: 'skills',
                key: 'id',
            }
        },
        aboutTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutText: {
            type: DataTypes.STRING,
            allowNull: true
        },
        watch: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        watchSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // defaultValue: 1,
            references: {
                model: 'size',
                key: 'id',
            }
        },
        host: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        hostSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // defaultValue: 0,
            references: {
                model: 'size',
                key: 'id',
            }
        },
        // review_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'sitterReview',
        //         key: 'id',
        //     }
        // },
    }, {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        modelName: 'pet_sitter'

    }

);
module.exports = Pet_sitter;