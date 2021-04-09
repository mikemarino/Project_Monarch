const User = require('./User/User');

const Case = require('./Case/Case');
const Current_status = require('./Case/Current_status');
const Note = require('./Case/Note');
const Status_category = require('./Case/Status_category');
const Status = require('./Case/Status');


const Owner = require('./Pet/Owner');
const Pet_owner = require('./Pet/Pet_owner');
const Species = require('./Pet/Species');
const Size = require('./Pet/Size');
const Pet = require('./Pet/Pet');


const Invoice = require('./Plan_Provide/Invoice');
const Service_planned = require('./Plan_Provide/Service_planned');
const Service_provided = require('./Plan_Provide/Service_provided');


const Service = require('./Sitter/Service');
const Available_for = require('./Sitter/Available_for');
const Pet_sitter = require('./Sitter/Pet_sitter');
const Provides = require('./Sitter/Provides');
const Unit = require('./Sitter/Unit');
const Zipcode = require('./Sitter/Zipcode');
const Review = require('./Sitter/Review');
const sitterReview = require('./Sitter/sitterReview');
const Skills = require('./Sitter/Skills');
const Status_Category = require('./Case/Status_category');
// Pet belongsTo Species
// Species.belongsToMany(Pet, {
//     foreignKey: 'species_id',
// });

Pet.belongsTo(Species, {
    foreignKey: 'species_id'
});
// Pet.belongsTo(Zipcode, {
//     foreignKey: 'zipcode_id'
// })

//
Pet_sitter.belongsTo(Service, {
    foreignKey: 'service_id'
})
Case.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

//
Case.belongsTo(Pet_sitter, {
    foreignKey: 'pet_sitter_id'
});



Pet_sitter.belongsTo(Skills, {
    foreignKey: 'skill_id'
})

Pet_sitter.belongsTo(Size, {
    foreignKey: 'watchSize'
})
Pet_sitter.belongsTo(Size, {
    foreignKey: 'hostSize'
})
Pet_sitter.belongsTo(Zipcode, {
    foreignKey: 'zipcode_id'
})

Review.belongsToMany(Pet_sitter, {
    through: sitterReview,
    foreignKey: 'R_id'
})
Pet_sitter.belongsToMany(Review, {
    through: sitterReview,
    foreignKey: 'PS_id'
})

Status.belongsTo(Status_Category, {
    foreignKey: 'status_category_id'
})

module.exports = {
    User,

    Available_for,
    Pet_sitter,
    Provides,
    Service,
    Unit,
    Skills,
    Zipcode,

    Case,
    Current_status,
    Note,
    Status_category,
    Status,
    Review,
    sitterReview,

    Owner,
    Pet_owner,
    Species,
    Pet,
    Size,

    Invoice,
    Service_planned,
    Service_provided,

};