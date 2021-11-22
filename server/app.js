const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
// Enabling CORS
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./models/userSchema");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// linking routers with app.js
app.use(require("./router/auth"));

// using cors
// app.use(cors({ origin: true }));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Middleware");
  next();
};

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
