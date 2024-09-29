function checkValidation(req, res, next) {
  const { newProduct } = res.locals;

  if (!newProduct) {
    return res.status(422).json({ msg: "Data is empty" });
  }

  if (newProduct.price !== undefined) {
    if (isNaN(newProduct.price) || newProduct.price < 0) {
      return res.status(422).send("Price must be a positive number");
    }
  }

  if (newProduct.image !== undefined) {
    const validImageFormats = /\.(jpg|jpeg|png|gif|webp)$/i;
    if (!validImageFormats.test(newProduct.image)) {
      return res.status(422).send("Image format is invalid");
    }
  }

  if (newProduct.title !== undefined) {
    if (newProduct.title.trim() === "") {
      return res.status(422).json({ msg: "Title cannot be empty" });
    }
    if (newProduct.title.length > 100) {
      return res
        .status(422)
        .json({ msg: "Title cannot exceed 100 characters" });
    }
  }

  if (newProduct.category !== undefined) {
    if (newProduct.category.trim() === "") {
      return res.status(422).json({ msg: "Category cannot be empty" });
    }
    const validCategories = [
      "clothing",
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    if (!validCategories.includes(newProduct.category)) {
      return res
        .status(422)
        .json({ msg: "Category must be one of the predefined categories" });
    }
  }

  if (newProduct.description !== undefined) {
    if (newProduct.description.trim() === "") {
      return res.status(422).json({ msg: "Description cannot be empty" });
    }
    if (newProduct.description.length > 500) {
      return res
        .status(422)
        .json({ msg: "Description cannot exceed 500 characters" });
    }
  }

  if (newProduct.rating !== undefined) {
    if (typeof newProduct.rating !== "object" || newProduct.rating === null) {
      return res.status(422).json({ msg: "Rating must be an object" });
    }

    if (newProduct.rating.rate !== undefined) {
      if (
        isNaN(newProduct.rating.rate) ||
        newProduct.rating.rate < 0 ||
        newProduct.rating.rate > 5
      ) {
        return res
          .status(422)
          .json({ msg: "Rating rate must be a number between 0 and 5" });
      }
    }

    if (newProduct.rating.count !== undefined) {
      if (isNaN(newProduct.rating.count) || newProduct.rating.count < 0) {
        return res
          .status(422)
          .json({ msg: "Rating count must be a positive number" });
      }
    }
  }

  res.locals.newProduct = newProduct;
  next();
}

module.exports = checkValidation;
