const router = require('express').Router();
const userRoutes = require('./user');
const listItemRoutes = require('./listitem');

router.use('/user', userRoutes);
router.use('/listitem', listItemRoutes);

module.exports = router;