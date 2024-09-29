const express = require("express");
const readFile = require("../middleware/users/readFile.js");

const router = express.Router();

router.get("/", readFile, (req, res) => {
  const { users } = res.locals;
  res.status(200).json(users);
});

module.exports = router;
