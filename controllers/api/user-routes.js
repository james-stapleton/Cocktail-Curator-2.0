const router = require('express').Router();
const { use } = require('passport');
const { Users, Cocktails, UserCocktails } = require('../../models');


// User get methods
router.get('/', async (req,res) => {
    try {
        const userData = await Users.findAll({include: Cocktails, through: UserCocktails});
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res) => {
    try {
        const userData = await Users.findByPk( req.params.id, {include: Cocktails, through: UserCocktails } );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//User create method
router.post('/', async (req,res) => {
    try {
        const userData = await Users.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//User update method
router.put('/:id', async (req,res) => {
    try {
    const updateData = await Users.update(req.body, {where: {id: req.params.id} }); 
    // res.send(200).json(updateData);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;