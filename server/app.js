const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./models/userSchema");

app.use(express.json());

// linking routers with app.js
app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Middleware");
  next();
};

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
