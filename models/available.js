const {Model, }= require ('sequelize');
const sequelize= require ('../config/connection');

class Avalliable extends Model {}
Avalliable.init(
{
id:{
    type: DataType.INTEGER,
    allowNull: false,
    PrimaryKey: true,
},
Service_id:{
    type: DataType.INTEGER,
    allowNull: false,
// foreign key here
},
Species_id:{
    type: DataType.INTEGER, 
    allowNull: false,
// add foreign key
},
},
{
sequelize,
timestamps: true, 
freezeTableName: true, 
}
);

module.exports= Avalliable