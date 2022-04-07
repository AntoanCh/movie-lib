const asyncHandler = require("express-async-handler");

const Favorite = require("../models/favoritesModel");
// GET favorites
const getFavorites = asyncHandler(
  async (req, res) => {
    const favorites = await Favorite.find();
    console.log(favorites);
    res.status(200).json(favorites);
  }
);
// POST favorites
const setFavorite = asyncHandler(
  async (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error("please add a name");
    }
    const favorite = await Favorite.create({
      name: req.body.name,
      image: req.body.image,
    });
    res.status(200).json(favorite);
  }
);
// GET one favorite
const getOneFavorite = asyncHandler(
  async (req, res) => {
    const favorite = await Favorite.find({
      name: req.params.name,
    });
    if (!favorite[0]) {
      res.status(200).json({ name: "" });
    }
    res.status(200).json(favorite);
  }
);
// DELETE favorites
const deleteFavorite = asyncHandler(
  async (req, res) => {
    const deleted =
      await Favorite.findOneAndDelete({
        name: req.params.name,
      });
    if (!deleted) {
      res.status(400);
      throw new Error("Favorite not found");
    }

    res
      .status(200)
      .json({ name: req.params.name });
  }
);
module.exports = {
  getFavorites,
  setFavorite,
  getOneFavorite,
  deleteFavorite,
};
