// delete Product
function deleteProduct(req, res, next) {
  const { id } = req.params;
  const { products } = res.locals;
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex === -1) {
    return res.status(404).json({ msg: "Product not found" });
  }

  products.splice(productIndex, 1);
  res.locals.products = products;
  next();
}

module.exports = deleteProduct;
