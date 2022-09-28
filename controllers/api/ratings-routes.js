const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Ratings, Users, Cocktails } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const [results, metadata] = await sequelize.query("SELECT cocktail_id, AVG(rating) from ratings GROUP BY cocktail_id;");
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;