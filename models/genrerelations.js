'use strict';
module.exports = (sequelize, DataTypes) => {
  const genreRelations = sequelize.define('genreRelations', {
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inspired_genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  genreRelations.associate = function(models) {
    genreRelations.belongsTo(models.genre);
    genreRelations.belongsTo(models.genre);
  };
  return genreRelations;
};