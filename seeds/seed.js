const sequelize = require('../config/connection');
const seedCocktails = require('./cockTailData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCocktails();

  await seedUsers();

  process.exit(0);
};

seedAll();
