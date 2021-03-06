const router = require('express').Router();
// const {
//     Project,
//     User
// } = require('../models');

// const { Case, Current_status, Note, Status_category, Status } = require('../models/Case/Case');

//const { Owner, Pet_owner, Pet, Species } = require('../models/Pet');

const User = require('../models/User/User');
const Case = require('../models/Case/Case');
const Current_status = require('../models/Case/Current_status');
const Note = require('../models/Case/Note');
const Status_category = require('../models/Case/Status_category');
const Status = require('../models/Case/Status');
const Owner = require('../models/Pet/Owner');
const Pet_owner = require('../models/Pet/Pet_owner');
const Species = require('../models/Pet/Species');
const Pet = require('../models/Pet/Pet');

const Invoice = require('../models/Plan_Provide/Invoice');
const Service_planned = require('../models/Plan_Provide/Service_planned');
const Service_provided = require('../models/Plan_Provide/Service_provided');
const Available_for = require('../models/Sitter/Available_for');
const Pet_sitter = require('../models/Sitter/Pet_sitter');
const Provides = require('../models/Sitter/Provides');
const Service = require('../models/Sitter/Service');
const Skill = require('../models/Sitter/Skills');
const Unit = require('../models/Sitter/Unit');
const withAuth = require('../utils/auth');



router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/registerSitter');
        return;
    }

    res.render('login');
});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/registerSitter');
        return;
    }

    res.render('login');
});

router.get('/registerSitter', async (req, res) => {

    try {
        // Get all service and JOIN with user data
        const serviceData = await Service.findAll({
            // include: [{
            //     model: Service,
            //     attributes: ['service_name'],
            // }, ],
        });

        // Serialize data so the template can read it
        const services = serviceData.map((service) => service.get({
            plain: true
        }));

        const skillData = await Skill.findAll({
            // include: [{
            //     model: Service,
            //     attributes: ['service_name'],
            // }, ],
        });


        const skills = skillData.map((skill) => skill.get({
            plain: true
        }));


        // Pass serialized data and session flag into template
        res.render('registerSitter', {
            services,
            skills,
            logged_in: req.session.logged_in
        });
        return;
    } catch (err) {
        res.status(500).json(err);
    }

    res.render('registerSitter');

    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/registerSitter');
        return;
    }
});


router.get('/sitters', async (req, res) => {

    try {
        // Get all service and JOIN with user data
        const sitterData = await Pet_sitter.findAll({
            // include: [{
            //     model: Service,
            //     attributes: ['service_name'],
            // }, ],
        });

        // Serialize data so the template can read it
        const sitters = sitterData.map((sitter) => sitter.get({
            plain: true
        }));

        // const skillData = await Skill.findAll({
        //     // include: [{
        //     //     model: Service,
        //     //     attributes: ['service_name'],
        //     // }, ],
        // });


        // const skills = skillData.map((skill) => skill.get({
        //     plain: true
        // }));


        // Pass serialized data and session flag into template
        res.render('sitters', {
            sitters,
            logged_in: req.session.logged_in
        });
        return;
    } catch (err) {
        res.status(500).json(err);
    }

    res.render('sitters');

    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/registerSitter');
        return;
    }
});

router.get('/profile/:id', async (req, res) => {
    try {
        const profileData = await Pet_sitter.findByPk(req.params.id, {
            // include: [{
            //     model: Service,
            //     attributes: ['name'],
            // }, ],
        });
        const profile = profileData.get({
            plain: true
        });
        res.render('profile', {
            ...profile,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

// router.get('/', async (req, res) => {
//     // find all pets
//     try {
//         const petData = await Pet.findAll({
//             include: [{
//                 model: Species
//             }]
//             // include: [{
//             //     model: Species,
//             //     through: Species
//             // },
//             //     // {
//             //     // model: Tag,
//             //     // through: ProductTag,
//             //     // }
//             // ],
//         });
//         if (!petData) {
//             res.status(404).json({
//                 message: 'No Pets! :('
//             });
//             return;
//         }
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/', async (req, res) => {
//     try {
//         // Get all projects and JOIN with user data
//         const projectData = await Project.findAll({
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             }, ],
//         });

//         // Serialize data so the template can read it
//         const projects = projectData.map((project) => project.get({
//             plain: true
//         }));

//         // Pass serialized data and session flag into template
//         res.render('homepage', {
//             projects,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/project/:id', async (req, res) => {
//     try {
//         const projectData = await Project.findByPk(req.params.id, {
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             }, ],
//         });

//         const project = projectData.get({
//             plain: true
//         });

//         res.render('project', {
//             ...project,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Use withAuth middleware to prevent access to route
/*
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Project
            }],
        });

        const user = userData.get({
            plain: true
        });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
*/