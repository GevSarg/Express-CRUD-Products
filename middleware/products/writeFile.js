const fs = require("fs");
const path = require("path");

function writeFile(req, res, next) {
  const { products } = res.locals;
  fs.writeFileSync(
    path.join(__dirname, "../../db/products.json"),
    JSON.stringify(products, null, 2)
  );
  next();
}
module.exports = writeFile;
