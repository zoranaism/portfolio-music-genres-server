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
      include: [{ model: User }, { model: Genre, as: "relations" }],
    });

    const allGenreRelations = await GenreRelations.findAll({
      raw: true,
      attributes: ["id", "genreId", "otherGenreId"],
    });

    // console.log("ALL GENRE RELATIONS", allGenreRelations);

    res.status(200).json({ allGenres, allGenreRelations });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const genre = await Genre.findByPk(id, {
      include: [
        { model: User },
        {
          model: Genre,
          as: "relations",
        },
      ],
    });

    const otherRelations = await GenreRelations.findAll({
      include: [
        {
          model: Genre,
          // as: "relations",
        },
      ],
      raw: true,
      attributes: ["genreId", "otherGenreId", "id"],
      where: {
        otherGenreId: id,
      },
    });

    if (!genre) {
      return res.status(404).send({ message: "Genre not found" });
    }

    res.status(200).json({ genre, otherRelations });
  } catch (e) {
    next(e);
  }
});

// genre name, relations, name should be unique,
// relations how many relations, that's how many rows, genreId and otherGenreId
// auth/ YES!!
// chek if there is already a genre with that name
// dont allow relation duplication
// one line decr limit character number FE and BE

router.post("/", async (req, res, next) => {
  const { name, oneLineDescr } = req.body;

  if (!name || !oneLineDescr) {
    return res.status(400).send({
      message: "You have to write the genre name and one line decription",
    });
  }

  try {
    const genre = await Genre.create({
      name,
      oneLineDescr,
    });

    return res.status(201).json({ message: "New genre created.", genre });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
