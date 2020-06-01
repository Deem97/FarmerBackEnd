const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = mongoose.model("User");

router.post("/signup", async (req, res) => {
  const { telephoneNumber, password } = req.body;

  try {
    const user = new User({ telephoneNumber, password });
    await user.save();
    res.send("successfully added");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

module.exports = router;
