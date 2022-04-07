const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: [true, "Favorite already exists"],
    },
    note: {
      type: String,
      required: [true, "Enter note"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Note",
  noteSchema
);
