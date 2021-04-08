const router = require('express').Router();
const {
    Pet_sitter
} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const caseData = await Pet_sitter.findAll({  });
        if (!caseData) {
            res.status(404).json({
                message: 'No Pet Sitter!'
            });
            return;
        }
        res.status(200).json(caseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data

    try {
        const caseData = await Pet_sitter.findByPk(req.params.id, {   });
        if (!caseData) {
            res.status(404).json({
                message: 'No Pet Sitter!'
            });
            return;
        }
        res.status(200).json(caseData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// create new Pet_sitter
router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "sitter_name": "Hanz Moleman",
        "address": "89 Sweeny St",
        "mobile": "141-151-1515",
        "email": "kingofmoles@simp.com",
        "phone": "321-252-1252"
    },
    */
    try {
        const caseData = await Pet_sitter.create(req.body);
        res.status(200).json(caseData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a Pet_sitter's name by its `id` value
    try {
        const caseData = await Pet_sitter.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true
        });
        if (!caseData[0]) {
            res.status(404).json({
                message: 'No Pet_sitter with this id!'
            });
            return;
        }
        res.status(200).json(caseData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
        const caseData = await Pet_sitter.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!caseData) {
            res.status(404).json({
                message: 'No tags found with this id!'
            });
            return;
        }

        res.status(200).json(caseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;