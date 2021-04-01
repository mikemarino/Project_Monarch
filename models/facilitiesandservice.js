const {Model, }= require ('sequelize');
const sequelize= require ('../config/connection');

class FacilitiesAndService extends Model {}

FacilitiesAndService.init(
{
id:{
    type:DataType.INTEGER,
    primaryKey: true
},
speciec_name:{
    type: DataType.STRING
},
},
{
sequelize,
timestamps: false,
freeseTableName: true,
}
);
module.export= FacilitiesAndService;