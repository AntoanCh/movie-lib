const asyncHandler = require("express-async-handler");

const getFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get favorites" });
});

const setFavorite = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("please add a name");
  }
  res.status(200).json({ message: "Post a new favorite" });
});

const updateFavorite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update favorite ${req.params.id}` });
});

const deleteFavorite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete favorite ${req.params.id}` });
});
module.exports = {
  getFavorites,
  setFavorite,
  updateFavorite,
  deleteFavorite,
};
