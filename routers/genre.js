const { Router } = require("express");
const Genre = require("../models").genre;
const User = require("../models").user;
const GenreRelations = require("../models").genreRelations;
const auth = require("../auth/middleware");
const Sequelize = require("sequelize");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allGenres = await Genre.findAll({
      include: [{ model: User }, {model: Genre, as: "relations"}],
    });

    const allGenreRelations = await GenreRelations.findAll({  raw: true, attributes: ["genreId", "inspired_genre_id"]});

    console.log("ALL GENRE RELATIONS", allGenreRelations);
    
    res.status(200).json({allGenres, allGenreRelations});
  } catch (e) {
    next(e);
  }
});

module.exports = router;
