const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = mongoose.model("User");

router.post("/signup", (req, res) => {
  const { telephoneNumber, password } = req.body;
  const user = new User({ telephoneNumber, password });
  user.save();
});

module.exports = router;
