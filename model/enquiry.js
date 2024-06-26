var mongoose = require("mongoose");

var enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: Number,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("enquiry", enquirySchema);
