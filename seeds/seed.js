const sequelize = require('../config/connection');
const seedCocktails = require('./cockTailData');
const seedUsers = require('./userData');
const seedUserCocktails = require('./userCocktailsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCocktails();

  await seedUsers();

  await seedUserCocktails();

  process.exit(0);
};

seedAll();
