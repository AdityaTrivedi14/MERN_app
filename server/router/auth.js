const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World!!2");
});

// Promises
router.post("/register", (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all the required field" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exists" });
      }

      const user = new User({ name, email, phone, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered Successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => res.status(500).json({ message: "Failed to register" }));
});

// Async Await
// router.post("/register", async (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "Fill all the required fields" });
//   }

//   try{
//     const response = await User.findOne({ email: email })
//         .then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exists" });
//         }

//         const user = new User({ name, email, phone, password, cpassword });

//         user
//             .save()
//             .then(() => {
//             res.status(201).json({ message: "User registered Successfully" });
//             })
//             .catch((err) => {
//             console.log(err);
//             });
//         })

//   }catch(err){
//     console.log(err);
//   }

// });

router.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

router.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

router.get("/login", (req, res) => {
  res.send("Welcome to login page");
});

// router.get("/register", (req, res) => {
//   res.send("Welcome to register page");
// });

module.exports = router;
