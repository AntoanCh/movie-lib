const asyncHandler = require("express-async-handler");
const noteModel = require("../models/noteModel");

const Note = require("../models/noteModel");

// PUT note
const updateNote = asyncHandler(
  async (req, res) => {
    const movie = await Note.find({
      name: req.params.name,
    });

    if (!movie[0]) {
      const newNote = await Note.create({
        name: req.params.name,
        note: req.body.note,
      });
      res.status(200).json(newNote);
    } else {
      const newNote = await Note.findOneAndUpdate(
        { name: req.params.name },
        { note: req.body.note }
        // { new: true }
      );
      res.status(200).json(newNote);
    }
  }
);
// GET one favorite
const getNote = asyncHandler(async (req, res) => {
  const note = await Note.find({
    name: req.params.name,
  });
  if (!note[0]) {
    res.status(200).json({ message: "no note" });
  }
  res.status(200).json(note);
});

module.exports = {
  getNote,
  updateNote,
};
