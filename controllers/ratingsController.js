const asyncHandler = require("express-async-handler");
const ratingModel = require("../models/ratingModel");

const Rating = require("../models/ratingModel");

// PUT rating
const updateRating = asyncHandler(
  async (req, res) => {
    const movie = await Rating.find({
      name: req.params.name,
    });

    if (!movie[0]) {
      const newRating = await Rating.create({
        name: req.params.name,
        rating: req.body.rating,
      });
      res.status(200).json(newRating);
    } else {
      const newRating =
        await Rating.findOneAndUpdate(
          { name: req.params.name },
          { rating: req.body.rating },
          { new: true }
        );
      res.status(200).json(newRating);
    }
  }
);
// GET one favorite
const getRating = asyncHandler(
  async (req, res) => {
    const rating = await Rating.find({
      name: req.params.name,
    });
    if (!rating[0]) {
      res
        .status(200)
        .json({ message: "no rating" });
    }
    res.status(200).json(rating);
  }
);

module.exports = {
  getRating,
  updateRating,
};
