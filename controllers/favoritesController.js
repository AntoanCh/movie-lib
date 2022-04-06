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
    });
    res.status(200).json(favorite);
  }
);
// PUT favorites
const updateFavorite = asyncHandler(
  async (req, res) => {
    const favorite = await Favorite.findById(
      req.params.id
    );
    if (!favorite) {
      res.status(400);
      throw new Error("Favorite not found");
    }
    const updated =
      await Favorite.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
    res.status(200).json(updated);
  }
);
// DELETE favorites
const deleteFavorite = asyncHandler(
  async (req, res) => {
    const favorite = await Favorite.findById(
      req.params.id
    );
    if (!favorite) {
      res.status(400);
      throw new Error("Favorite not found");
    }
    await favorite.remove();
    res.status(200).json({ id: req.params.id });
  }
);
module.exports = {
  getFavorites,
  setFavorite,
  updateFavorite,
  deleteFavorite,
};
