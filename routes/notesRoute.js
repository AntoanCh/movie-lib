const express = require("express");
const router = express.Router();
const {
  getNote,
  updateNote,
} = require("../controllers/notesController");

router
  .route("/:name")
  .get(getNote)
  .put(updateNote);

module.exports = router;
