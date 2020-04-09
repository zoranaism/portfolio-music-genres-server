'use strict';
module.exports = (sequelize, DataTypes) => {
  const userFavGenre = sequelize.define('userFavGenre', {
    genreId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  userFavGenre.associate = function(models) {
    userFavGenre.belongsTo(models.user);
    userFavGenre.belongsTo(models.genre);
  };
  return userFavGenre;
};