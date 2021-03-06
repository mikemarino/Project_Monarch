const router = require('express').Router();
const {
    Pet,
    Species
} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: {
                model: Species
            }
        });
        if (!petData) {
            res.status(404).json({
                message: 'No pets!'
            });
            return;
        }
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data

    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [{
                model: Species
            }],
        });
        if (!petData) {
            res.status(404).json({
                message: 'No pets!'
            });
            return;
        }
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// create new pet
router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "name": "Lil Bub",
        "birth_date": "2014-07-18",
        "species_id": 3,
        "notes": "internet cat"
    }
    */
    try {
        const petData = await Pet.create(req.body);
        res.status(200).json(petData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a pet's name by its `id` value
    try {
        const petData = await Pet.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true
        });
        if (!petData[0]) {
            res.status(404).json({
                message: 'No Pet with this id!'
            });
            return;
        }
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
        const petData = await Pet.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!petData) {
            res.status(404).json({
                message: 'No tags found with this id!'
            });
            return;
        }

        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;