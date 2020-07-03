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
        { model: Genre, as: "relations" },
        { model: Genre, as: "otherRelations" },
      ],
    });

    // const relation = await genreRelations.findByPk()

    if (!genre) {
      return res.status(404).send({ message: "Genre not found" });
    }

    res.json({ genre });
  } catch (e) {
    next(e);
  }
});

// dont allow relation duplication
// one line decr limit character number FE and BE warning 

router.post("/", auth, async (req, res, next) => {
  const { name, oneLineDescr, img, relations } = req.body;

  if (!name || !oneLineDescr || !img) {
    return res.status(400).send({
      message:
        "You have to write the genre name, one line decription and add image link",
    });
  }

  const existingName = await Genre.findOne({ where: { name } });

  if (existingName) {
    return res.status(409).send({
      message:
        "This Genre entty conflicts with the existing one. Try with another Genre name.",
    });
  }

  try {
    const genre = await Genre.create({
      name,
      oneLineDescr,
      img,
    })
    
    if (relations) {
      
    }
    
    // const allNewRel = async(relations, genre) => {
   
        let relObjects = relations.map((relationId) => ({
          genreId: genre.id,
          otherGenreId: relationId,
        }));
        const newRelations = await GenreRelations.bulkCreate(relObjects, {
          plain: true,
        });
        // .then((newRelations) => {
        //   // const dataObj = newRelations.get({plain:true})
        // })
        // return newRelations;
        
      // }
      console.log("ALL NEW RELATIONS", newRelations);

    return res
      .status(201)
      .json({ message: "Genre created successfully.", genre, newRelations });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
