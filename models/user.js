"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      about: {
        type: DataTypes.TEXT
      }, 
      music: {
        type: DataTypes.TEXT
      }, 
      image: {
        type: DataTypes.STRING
      },
      isAdmin: {
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  user.associate = function(models) {
    user.belongsToMany(models.genre, {
      through: "userFavGenre",
      foreignKey: "userId",
    });
  };
  return user;
};
