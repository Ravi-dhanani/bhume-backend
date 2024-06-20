var express = require("express");
var router = express.Router();

var inquiry = require("../model/inquiry");

exports.add_inquiry = async (req, res) => {
  try {
    var data = await inquiry.create(req.body);
    res.status(200).json({
      message: "Inquiry Add Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_inquiry = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await inquiry.find();
    res.status(200).json({
      message: "Inquiry List",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.update_inquiry = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await inquiry.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "Inquiry Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.delete_inquiry = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await inquiry.findByIdAndDelete(id);
    res.status(200).json({
      message: "Inquiry Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
