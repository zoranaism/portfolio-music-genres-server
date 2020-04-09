const { Router } = require("express");
const Genre = require("../models").genre;
const User = require("../models").user;
const auth = require("../auth/middleware");
const Sequelize = require("sequelize");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allGenres = await Genre.findAll({
      include: [{ model: User }]
    });

    res.status(200).json(allGenres);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
