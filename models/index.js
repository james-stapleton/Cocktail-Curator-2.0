// TODO import tables/classes, define relationships, export
// users, drinks, savedDrinks (many to many table)
//Need to figure out where to store data for rankings, views, etc. 

const User = require('./User');
const Cocktails = require('./Cocktails');
const UserCocktails = require('./UserCocktails');

User.hasMany(Cocktails, {through: UserCocktails});
Cocktails.hasMany(Users, {through: UserCocktails});

module.exports = {User, Cocktails, UserCocktails};

