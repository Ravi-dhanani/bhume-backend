var express = require("express");

var career = require("../model/career");

exports.add_career = async (req, res) => {
  try {
    var data = await career.create(req.body);
    res.status(200).json({
      message: "Career Add Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_career = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await career.find();
    res.status(200).json({
      message: "Career List",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.get_single_career = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await career.findOne(req.body._id);
    res.status(200).json({
      message: "get Career ",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.get_Career_data= async (req, res) => {
  try {
    var data = await about.findOne({ language: req.params.id });
    res.status(200).json({
      message: "get Career",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.update_career = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await career.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "career Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.delete_career = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await career.findByIdAndDelete(id);
    res.status(200).json({
      message: "Career Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
