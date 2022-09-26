const { UserCocktails, Cocktails } = require('../models');

const userCocktailsData = [
    {
        userid: 1,
        cocktailid: 1
    },
    {
        userid: 1,
        cocktailid: 2
    },
    {
        userid: 2,
        cocktailid: 1
    },
    {
        userid: 3,
        cocktailid: 2
    },
];

const seedUserCocktailsData = () => UserCocktails.bulkCreate(userCocktailsData);

module.exports = seedUserCocktailsData;