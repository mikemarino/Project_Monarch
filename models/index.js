const User = require('./User/User');

const Case = require('./Case/Case');
const Current_status = require('./Case/Current_status');
const Note = require('./Case/Note');
const Status_category = require('./Case/Status_category');
const Status = require('./Case/Status');

const Owner = require('./Pet/Owner');
const Pet_owner = require('./Pet/Pet_owner');
const Species = require('./Pet/Species');
const Pet = require('./Pet/Pet');


const Invoice = require('./Plan_Provide/Invoice');
const Service_planned = require('./Plan_Provide/Service_planned');
const Service_provided = require('./Plan_Provide/Service_provided');

const Available_for = require('./Sitter/Available_for');
const Pet_sitter = require('./Sitter/Pet_sitter');
const Provides = require('./Sitter/Provides');
const Service = require('./Sitter/Service');
const Unit = require('./Sitter/Unit');

// Pet belongsTo Species
// Pet.hasOne(Species, {
//     foreignKey: 'species_id',
// });




module.exports = {
    User,

    Available_for,
    Pet_sitter,
    Provides,
    Service,
    Unit,

    Case,
    Current_status,
    Note,
    Status_category,
    Status,

    Owner,
    Pet_owner,
    Species,
    Pet,

    Invoice,
    Service_planned,
    Service_provided,

};