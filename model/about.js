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
  shortDescription: {
    type: String,
    require: true,
  },
  longDescription: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("about", aboutSchema);
