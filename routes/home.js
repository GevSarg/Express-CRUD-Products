const express = require("express");
const path = require("path");
const checkUser = require("../middleware/users/checkUser.js");
const readFile = require("../middleware/users/readFile.js");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../pages/home.html");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send("Page not found");
    }
  });
});

router.post("/", readFile, checkUser, (req, res) => {});

module.exports = router;
