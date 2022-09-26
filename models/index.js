// TODO import tables/classes, define relationships, export
// users, drinks, savedDrinks (many to many table)
//Need to figure out where to store data for rankings, views, etc. 

const Users = require('./Users');
const Cocktails = require('./Cocktails');
const UserCocktails = require('./UserCocktails');

Users.belongsToMany(Cocktails, {through: UserCocktails});
Cocktails.belongsToMany(Users, {through: UserCocktails});

module.exports = {Users, Cocktails, UserCocktails};

