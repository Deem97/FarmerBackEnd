const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Stock = mongoose.model("Stock");

router.post("/addStock", (req, res) => {
  const { productName, quantity, kgPrice, city } = req.body;

  const stock = new Stock({ productName, quantity, kgPrice, city });
  stock.save();
  res.send("successfully added");
});

module.exports = router;
