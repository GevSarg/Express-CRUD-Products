function checkBody(req, res, next) {
  let { title, price, description, category, image, rating } = req.body;

  if (title) {
    req.body.title = title.trim();
  }
  if (description) {
    req.body.description = description.trim();
  }
  if (category) {
    req.body.category = category.trim();
  }
  if (image) {
    req.body.image = image.trim();
  }

  if (req.body.title === "") {
    req.body.title = "Empty Title";
  }
  if (req.body.description === "") {
    req.body.description = "Empty Description";
  }

  if (req.method === "PUT" || req.method === "POST") {
    if (price && category && image && rating) {
      res.locals.newProduct = {
        title: req.body.title,
        price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating,
      };
      return next();
    } else {
      return res.status(422).json({ msg: "Invalid data format" });
    }
  } else if (req.method === "PATCH") {
    let updateFields = {};
    if (title) updateFields.title = req.body.title;
    if (price) updateFields.price = price;
    if (description) updateFields.description = req.body.description;
    if (category) updateFields.category = req.body.category;
    if (image) updateFields.image = req.body.image;
    if (rating) updateFields.rating = rating;

    if (Object.keys(updateFields).length > 0) {
      res.locals.newProduct = updateFields;
      return next();
    } else {
      return res.status(422).json({
        msg: "Invalid Data: At least one field (title, price, description, category, image, rating) is required",
      });
    }
  }
}

module.exports = checkBody;
