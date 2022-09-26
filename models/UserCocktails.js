const { Model, DataTypes } = require('sequelize');
const sequelize = require('sequelize');
const Cocktails = require('./Cocktails');
const User = require('./User');

class UserCocktails extends Model {} 
    UserCocktails.init (
        {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        cocktail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cocktails,
                key: "id"
            }
        }
    }
    );

module.exports = UserCocktails;