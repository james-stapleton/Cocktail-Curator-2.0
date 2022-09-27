// TODO

const router = require('express').Router();

const userRoutes = require('./user-routes');
const cocktailRoutes = require('./cocktail-routes');

router.use('/users', userRoutes);
router.use('/cocktails', cocktailRoutes);

module.exports = router;
