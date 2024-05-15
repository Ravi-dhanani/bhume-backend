var mongoose = require("mongoose");

var privacyPolicySchema = new mongoose.Schema({
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "language",
  },
  title: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("privacy-policy", privacyPolicySchema);
