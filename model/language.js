var mongoose = require("mongoose");

var languageSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("language", languageSchema);
