'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "userFavGenres",
      [
        {
          genreId: 3, 
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 1, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 6, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 12, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 10, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 5, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 8, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 11, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 6, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 12, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 9, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("userFavGenres", null, {});
  },
};
