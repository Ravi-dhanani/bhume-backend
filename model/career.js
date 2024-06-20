var mongoose = require("mongoose");

var careersSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  shortDescription: {
    type: String,
    require: true,
  },
  longDescription: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("career", careersSchema);
