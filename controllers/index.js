const router = require('express').Router();
const withAuth = require('../utils/auth');

const userRoutes = require('./api/userRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;
