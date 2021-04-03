const router = require('express').Router();
const { Pet } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            // include: [{
            //     model: Category
            // }, {
            //     model: Tag,
            //     through: ProductTag,
            // }],
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

module.exports = router;