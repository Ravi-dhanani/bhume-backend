var mongoose = require("mongoose");

var languageSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  // cat_id:{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref:"category"
  // }
});

module.exports = mongoose.model("language", languageSchema);
