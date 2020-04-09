'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    name: DataTypes.STRING,
    history: DataTypes.TEXT,
    oneLineDescr: DataTypes.TEXT,
    characteristics: DataTypes.TEXT,
    origins: DataTypes.TEXT,
    relatedGenres: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    genre.belongsToMany(models.user, {
      through: "userFavGenre",
      foreignKey: "genreId",
    });
  };
  return genre;
};