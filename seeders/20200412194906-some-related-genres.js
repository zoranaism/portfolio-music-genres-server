'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "genreRelations",
      [
        {
          genreId: 1, 
          otherGenreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 1, 
          otherGenreId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          otherGenreId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          otherGenreId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          otherGenreId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 2, 
          otherGenreId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 3, 
          otherGenreId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 3, 
          otherGenreId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 3, 
          otherGenreId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          otherGenreId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          otherGenreId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 4, 
          otherGenreId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 5, 
          otherGenreId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 5, 
          otherGenreId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 6, 
          otherGenreId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 7, 
          otherGenreId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genreId: 10, 
          otherGenreId: 12,
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
