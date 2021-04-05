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
    },
    species_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'species',
            key: 'id',
        },
    },
    address: {
        type: DataTypes.STRING,
    },
    zipcode: {
        type: DataTypes.STRING,
        // references: {
        //     model: 'zipcode',
        //     key: 'id',
        // }
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
        type: DataTypes.BOOLEAN
    },
    notes: {
        type: DataTypes.TEXT,
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