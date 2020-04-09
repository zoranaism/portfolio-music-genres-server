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
        
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("userFavGenres", null, {});
  },
};
