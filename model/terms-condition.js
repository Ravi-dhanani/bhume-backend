var mongoose = require("mongoose");

var termsConditionSchema = new mongoose.Schema({
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "language",
  },
  title: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("terms-condition", termsConditionSchema);
