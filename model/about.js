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
  Description: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("about", aboutSchema);
