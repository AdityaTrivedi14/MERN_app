const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log(err);
  });
