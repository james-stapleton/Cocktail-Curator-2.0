const router = require('express').Router();
const {Cocktails, Users, UserCocktails} = require('../../models');


//cocktail get routes
router.get('/', async (req,res) => {
    try {
        const cocktailData = await Cocktails.findAll();
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cocktailData = await Cocktails.findByPk(req.params.id);
        if (!cocktailData) {
            res.status(404).json({message: "No cocktail with that id"});
        }
        else {
        res.status(200).json(cocktailData);
    }
    } catch (err) {
        res.status(500).json(err);
    }
});

//cocktail create route
router.post('/', async (req, res) => {
    try {
        const cocktailData = await Cocktails.create(req.body);
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

router.put('/:id', async (req,res) => {
    try {
        const cocktailData = await Cocktails.update(req.body, {where: {id: req.params.id}});
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const cocktailData = await Cocktails.destroy({where: {id: req.params.id}});
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;