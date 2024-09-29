const express = require("express");
const readFile = require("../middleware/products/readFile.js");
const writeFile = require("../middleware/products/writeFile.js");
const addProduct = require("../middleware/products/addProduct.js");
const checkBody = require("../middleware/products/checkBody.js");
const checkValidation = require("../middleware/products/checkValidation.js");
const updateProduct = require("../middleware/products/updateProduct.js");
const deleteProduct = require("../middleware/products/deleteProduct.js");
const sortProducts = require("../middleware/products/sortProducts.js"); // Import the sorting middleware

const router = express.Router();

router.get("/", readFile, sortProducts, (req, res) => {
  const { sortedProducts } = res.locals;
  res.status(200).json(sortedProducts);
});

// POST product
router.post(
  "/",
  readFile,
  checkBody,
  checkValidation,
  addProduct,
  writeFile,
  (req, res) => {
    res.status(201).json({ msg: "Success", product: res.locals.newProduct });
  }
);

// PUT product
router.put(
  "/:id",
  readFile,
  checkBody,
  checkValidation,
  updateProduct,
  writeFile,
  (req, res) => {
    res.status(200).json({
      msg: "Product updated successfully",
      product: res.locals.updatedProduct,
    });
  }
);

// PATCH product
router.patch(
  "/:id",
  readFile,
  checkBody,
  checkValidation,
  updateProduct,
  writeFile,
  (req, res) => {
    res.status(200).json({
      msg: "Product updated successfully",
      product: res.locals.updatedProduct,
    });
  }
);

// DELETE product
router.delete("/:id", readFile, deleteProduct, writeFile, (req, res) => {
  res.status(204).send("Product deleted");
});

module.exports = router;
