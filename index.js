const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const { mongoUrl } = require("./keys");

require("./models/User");
require("./models/Stocks");
const authRoutes = require("./routes/authRoutes");
const stockRoutes = require("./routes/stockRoutes");

mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.use(bodyParser.json());
app.use(authRoutes,stockRoutes);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
