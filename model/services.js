var mongoose = require("mongoose");

var servicesSchema = new mongoose.Schema({
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "language",
  },
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
});

module.exports = mongoose.model("services", servicesSchema);
