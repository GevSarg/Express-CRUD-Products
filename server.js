const express = require("express");
const home = require("./routes/home.js");
const users = require("./routes/users.js");
const products = require("./routes/products.js");

const app = express();

app.use(express.json());
app.use("/", home);
app.use("/users", users);
app.use("/products", products);

app.use((req, res, next) => {
  res.status(400).json({ msg: "Invalid url" });
  next();
});

app.listen(4000, () => console.log("Server is running"));
