const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/connection');

class Pet extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

Pet.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: 01/01/2021,
    },
    species_id: {
        type: DataTypes.INTEGER,
        defaultValue: '0',
        references: {
            model: 'species',
            key: 'id',
        },
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: 'No address',
    },
    zipcode_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        references: {
            model: 'zipcode',
            key: 'id',
        }
    },
    age: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    breed: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    characteristics: {
        type: DataTypes.STRING
    },
    houseTrained: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    petShelter: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet'
});

module.exports = Pet;