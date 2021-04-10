const router = require('express').Router();
const speciesRoutes = require('./speciesRoutes');
const caseRoutes = require('./caseRoutes');
const petRoutes = require('./petRoutes');
const planProvideRoutes = require('./planProvideRoutes');
const sitterRoutes = require('./sitterRoutes');
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/case', caseRoutes);
router.use('/pet', petRoutes);
router.use('/species', speciesRoutes);
// router.use('/planProvide', planProvideRoutes);
router.use('/sitter', sitterRoutes);
router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
