const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./public"));
app.use(logger("dev"));
app.use()

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyc-scraper",
  { useMongoClient: true }
);
const db = mongoose.connection;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});