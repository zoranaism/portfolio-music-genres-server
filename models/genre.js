"use strict";
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define(
    "genre",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      oneLineDescr: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      history: DataTypes.TEXT,
      characteristics: DataTypes.TEXT,
      origins: DataTypes.TEXT,
    },
    {}
  );
  genre.associate = function (models) {
    genre.belongsToMany(models.user, {
      through: "userFavGenre",
      foreignKey: "genreId",
    });
    genre.belongsToMany(models.genre, {
      as: "relations",
      through: "genreRelations",
      foreignKey: "genreId"
    });
    genre.belongsToMany(models.genre, {
      as: "otherRelations",
      through: "genreRelations",
      foreignKey: "otherGenreId"
    });
  };
  return genre;
};
