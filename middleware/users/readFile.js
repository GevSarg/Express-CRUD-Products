const fs = require("fs");
const path = require("path");

function readFile(req, res, next) {
  fs.promises
    .readFile(path.join(__dirname, "../../db/users.json"), "utf-8")
    .then((data) => {
      res.locals.users = JSON.parse(data);
      next();
    })
    .catch((err) => {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
    });
}

module.exports = readFile;
