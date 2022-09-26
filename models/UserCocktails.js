const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cocktails = require('./Cocktails');
const User = require('./Users');

class UserCocktails extends Model {} 
    UserCocktails.init (
        {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        cocktailid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cocktails,
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_cocktails',
      },
    );

module.exports = UserCocktails;