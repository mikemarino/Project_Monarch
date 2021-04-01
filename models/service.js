const {Model, }= require ('sequelize');
const sequelize= require ('../config/connection');

class Service extends Model {}
Service.init(
    {
id:{
type: DataType.INTEGER,
allowNull: false, 
primaryKey:true,
},
service_name:{
    type: DatatType.STRING,
    allowNull: false
},
has_limit:{
    type:DataType.BOOLEAN,
    allowNull: true,
},
unit_id:{
    type: DataType.INTEGER,
    allowNull:false,
// add foreign key here
},
Cost_per_unit:{
    type: DataType.DECIMAL,
    // its asking to range decimal from (10,2)
    allowNull: false,
},
},
{
sequelize,
timestamp: false,
freezeTableName: true,

}

);
Model.exports= Service;