// add product
function addProduct(req, res, next) {
  const body = req.body;
  const products = res.locals.products;

  const id = Math.max(...products.map((prod) => prod.id)) + 1;

  const newProduct = { id, ...body };

  products.push(newProduct);
  res.locals.newUser = newProduct;

  next();
}

module.exports = addProduct;
