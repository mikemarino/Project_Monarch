const router = require('express').Router();
const {
    Species
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const speciesData = await Species.findAll({
            // include: {
            //     model: Species
            // }
        });
        if (!speciesData) {
            res.status(404).json({
                message: 'No species!'
            });
            return;
        }
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new pet
router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "species_name": "Bird"
    }
    */
    try {
        const speciesData = await Species.create(req.body);
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a pet's name by its `id` value
    try {
        const speciesData = await Species.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true
        });
        if (!speciesData[0]) {
            res.status(404).json({
                message: 'No Pet with this id!'
            });
            return;
        }
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
        const speciesData = await Species.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!speciesData) {
            res.status(404).json({
                message: 'No tags found with this id!'
            });
            return;
        }

        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;