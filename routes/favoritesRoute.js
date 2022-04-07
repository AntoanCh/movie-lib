const express = require("express");
const router = express.Router();
const {
  getFavorites,
  setFavorite,
  getOneFavorite,
  deleteFavorite,
} = require("../controllers/favoritesController");

router
  .route("/")
  .get(getFavorites)
  .post(setFavorite);
router
  .route("/:name")
  .get(getOneFavorite)
  .delete(deleteFavorite);

module.exports = router;
