var mongoose = require("mongoose");

var servicesSchema = new mongoose.Schema({
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

module.exports = mongoose.model("services", servicesSchema);
