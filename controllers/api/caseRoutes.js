const router = require('express').Router();
const {
    Case,
    Pet_sitter,
    Pet
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const caseData = await Case.findAll({
            include: [{
                    model: Pet
                },
                {
                    model: Pet_sitter
                }
            ]
        });
        if (!caseData) {
            res.status(404).json({
                message: 'No Cases!'
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
        const caseData = await Case.findByPk(req.params.id, {
            include: [
                // {
                //     model: Pet_sitter
                // },
                {
                    model: Pet
                }
            ]
        });
        if (!caseData) {
            res.status(404).json({
                message: 'No Cases!'
            });
            return;
        }
        res.status(200).json(caseData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// create new Case
router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "pet_sitter_id": 2,
        "pet_id": 2,
        "start_time": "2016-01-01 00:00:00",
        "end_time": "2016-01-01 08:00:00",
        "notes": "Leave Notes Here"
    }
    */
    try {
        const caseData = await Case.create(req.body);
        res.status(200).json(caseData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a Case's name by its `id` value
    try {
        const caseData = await Case.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true
        });
        if (!caseData[0]) {
            res.status(404).json({
                message: 'No Case with this id!'
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
        const caseData = await Case.destroy({
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