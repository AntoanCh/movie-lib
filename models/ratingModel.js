const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: [true, "Favorite already exists"],
    },
    rating: {
      type: Number,
      required: [true, "Enter rating"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Rating",
  ratingSchema
);
