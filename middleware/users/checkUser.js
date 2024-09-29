function checkUser(req, res, next) {
  const { email, password } = req.body;

  const user = res.locals.users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "True", success: true });
    // res.redirect("/products");
  } else {
    res
      .status(401)
      .json({ message: "Invalid email or password", success: false });
  }
}

module.exports = checkUser;
