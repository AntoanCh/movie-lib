var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.json({ message: "users list" });
});
/* Create a new user */
router.post("/", (req, res) => {
  res.json({ message: "users list" });
});
/* Update a */
router.put("/:id", (req, res) => {
  res.json({ message: "users list" });
});
/* DELETE user*/
router.delete("/:id", (req, res) => {
  res.json({ message: "users list" });
});

module.exports = router;
