'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "genreRelations",
      [
        {
          genreId: 1, 
          inspired_genre_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 1, 
          inspired_genre_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          inspired_genre_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("genreRelations", null, {});
  },
};
