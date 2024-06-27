var mongoose = require("mongoose");

var aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "language",
  },
  section1: {
    type: String,
    require: true,
  },
  section2: {
    type: String,
    require: true,
  },
  section3: {
    type: String,
    require: true,
  },
  shortDescription: {
    type: String,
    require: true,
  },
 s
});

module.exports = mongoose.model("about", aboutSchema);
