var express = require("express");
var router = express.Router();

var language = require("../model/language");

exports.add_Language = async (req, res) => {
  try {
    var data = await language.create(req.body);
    res.status(200).json({
      message: "Language Add Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_Languages = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await language.find();
    res.status(200).json({
      message: "Language List",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.get_Language = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await language.findOne(req.params._id);
    res.status(200).json({
      message: "get Language ",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.update_language = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await language.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "Language Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.delete_language = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await language.findByIdAndDelete(id);
    res.status(200).json({
      message: "Language Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
