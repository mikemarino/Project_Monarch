const sequelize = require('../config/connection');

const User = require('../models/User/User');

const Case = require('../models/Case/Case');
const Current_status = require('../models/Case/Current_status');
const Note = require('../models/Case/Note');
const Status_category = require('../models/Case/Status_category');
const Status = require('../models/Case/Status');

const Owner = require('../models/Pet/Owner');
const Pet_owner = require('../models/Pet/Pet_owner');
const Pet = require('../models/Pet/Pet');
const Species = require('../models/Pet/Species');

const Invoice = require('../models/Plan_Provide/Invoice');
const Service_planned = require('../models/Plan_Provide/Service_planned');
const Service_provided = require('../models/Plan_Provide/Service_provided');

const Available_for = require('../models/Sitter/Available_for');
const Pet_sitter = require('../models/Sitter/Pet_sitter');
const Provides = require('../models/Sitter/Provides');
const Service = require('../models/Sitter/Service');
const Unit = require('../models/Sitter/Unit');
const Zipcode = require('../models/Sitter/Zipcode');
const Skills = require('../models/Sitter/Skills');
const Size = require('../models/Pet/Size')
const sitterReview = require('../models/Sitter/sitterReview')

//--------------- BEGIN SEED DATA --------------------


const caseData = require('../seeds/case-seeds.json');
const sitterData = require('../seeds/pet_sitter_seed.json');
const petData = require('../seeds/pet_seeds.json');
const speciesData = require('../seeds/species_seeds.json');
const unitData = require('../seeds/unit_seed.json');
const zipData = require('../seeds/zipcode.json');

// THE ORDER OF SEED IS IMPORTANT - START WITH REFERENCE TABLES OR FACE FOREIGN KEY ERROR
const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });

    const zipcode = await Zipcode.bulkCreate(zipData, {
        individualHooks: true,
        returning: true,
    });

    const species = await Species.bulkCreate(speciesData, {
        individualHooks: true,
        returning: true,
    });

    const pet = await Pet.bulkCreate(petData, {
        individualHooks: true,
        returning: true,
    });

    const sitter = await Pet_sitter.bulkCreate(sitterData, {
        individualHooks: true,
        returning: true,
    });
    const cases = await Case.bulkCreate(caseData, {
        individualHooks: true,
        returning: true,
    });

    const unit = await Unit.bulkCreate(unitData, {
        individualHooks: true,
        returning: true,
    });



    const skills = await Skills.bulkCreate(skillData, {
        individualHooks: true,
        returning: true,
    });

    const size = await Size.bulkCreate(sizeData, {
        individualHooks: true,
        returning: true,
    });

    const sitRev = await sitterReview.bulkCreate(sitterReviewData, {
        individualHooks: true,
        returning: true,
    });

    // for (const project of projectData) {
    //     await Project.create({
    //         ...project,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }
    process.exit(0);
};

seedDatabase();