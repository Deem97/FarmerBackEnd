const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  telephoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },
});

mongoose.model('User',userSchema);
