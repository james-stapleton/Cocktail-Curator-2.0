const router = require('express').Router();
const { use } = require('passport');
const { Users, Cocktails, UserCocktails } = require('../../models');

router.get('/', (req,res) => {
    Users.findAll( {include: Cocktails, through: UserCocktails})
}).then((userData) => {
    if (!userData) {
        res.send(404).json({message: "No users found"});
    }
    res.send(200).json(userData);
}).catch(err => res.send(err));

router.get('/:id', (req,res) => {
    Users.findByPk(req.params.id, {include: Cocktails, through: UserCocktails })
}).then((userData) => {
    if (!userData) {
        res.send(404).json({message: "No user found by that id"});
    }
    res.send(200).json(userData);
}).catch(err => res.send(err));