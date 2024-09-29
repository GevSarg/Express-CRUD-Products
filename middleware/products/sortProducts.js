function sortProducts(req, res, next) {
  const { sort } = req.query;
  const { products } = res.locals;

  if (!products) {
    return res.status(422).json({ msg: "No products available" });
  }
  let sorted;
  if (sort) {
    if (sort === "low") {
      sorted = products.toSorted((a, b) => a.price - b.price);
    } else if (sort === "high") {
      sorted = products.toSorted((a, b) => b.price - a.price);
    } else {
      return res
        .status(422)
        .json({ msg: "Invalid sort option. Use 'low' or 'high'." });
    }
  }

  res.locals.sortedProducts = sorted;
  next();
}

module.exports = sortProducts;
