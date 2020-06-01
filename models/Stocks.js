const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  kgPrice: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }
});

mongoose.model("Stock", stockSchema);
