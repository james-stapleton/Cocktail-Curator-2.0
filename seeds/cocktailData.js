const { Cocktails } = require('../models');

const cocktailData = [
  {
    name: 'Old-Fashioned',
    ingredients: '2oz bourbon, .25oz simply syrup, 4 dashes angostura bitters, orange peel',
    instructions: 'Stir the bourbon, syrup and bitters in a rocks glass with a large cube. Express the orange peel over the drink, rim the glass and drop it in',
    image: 'oldfashioned.jpg'
  },
  {
    name: 'Margarita',
    ingredients: '2oz tequila, 1oz fresh-squeezed lime juice, .5oz agave, .25 oz cointreau, salt',
    instructions: 'Wet the rim of a margarita glass with a lime wedge then coat in salt and fill with ice. Add the tequila, lime juice, agave and cointreau to a shaker, shake hard for 10-12 seconds until chilled and diluted, then strain into glass. Garnish with lime wedge',
    image: 'margarita.jpg'
  },
];

const seedCocktails = () => Cocktails.bulkCreate(cocktailData);

module.exports = seedCocktails;