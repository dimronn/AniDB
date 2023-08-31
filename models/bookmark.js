'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookmark.init({
    userId: DataTypes.INTEGER,
    animeId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    image: DataTypes.STRING,
    rating: DataTypes.STRING,
    score: DataTypes.STRING,
    status: DataTypes.STRING,
    genre: DataTypes.ARRAY(DataTypes.STRING),
    trailer: DataTypes.STRING



  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};