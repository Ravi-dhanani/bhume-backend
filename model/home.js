var mongoose = require("mongoose");

var homeSchema = new mongoose.Schema({
  language_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "language",
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("home", homeSchema);
