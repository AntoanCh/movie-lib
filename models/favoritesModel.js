const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: [true, "Favorite already exists"],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Favorite",
  favoriteSchema
);
