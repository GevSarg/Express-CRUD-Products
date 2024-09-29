// Update the product
function updateProduct(req, res, next) {
  const { id } = req.params;
  const { products } = res.locals;
  const productIndex = products.findIndex((prod) => prod.id === +id);

  if (productIndex === -1) {
    return res.status(404).json({ msg: "Product not found" });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...res.locals.newProduct,
  };
  res.locals.updatedProduct = products[productIndex];
  next();
}

module.exports = updateProduct;
