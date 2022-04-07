const express = require("express");
const router = express.Router();
const {
  getRating,
  updateRating,
} = require("../controllers/ratingsController");

router
  .route("/:name")
  .get(getRating)
  .put(updateRating);

module.exports = router;
