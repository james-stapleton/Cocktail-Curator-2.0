const { UserCocktails, Cocktails } = require('../models');

const userCocktailsData = [
    {
        user_id: 1,
        cocktail_id: 1
    },
    {
        user_id: 1,
        cocktail_id: 2
    },
    {
        user_id: 2,
        cocktail_id: 1
    },
    {
        user_id: 3,
        cocktail_id: 2
    },
]

const seedUserCocktailsData = () => UserCocktails.bulkCreate(userCocktailsData);

module.exports = seedUserCocktailsData;