var express = require("express");

var home = require("../model/home");

exports.add_home = async (req, res) => {
  try {
    var data = await home.create(req.body);
    res.status(200).json({
      message: " title Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_Lst_home = async (req, res) => {
  try {
    var data = await home.find();

    res.status(200).json({
      message: "home title",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.get_home = async (req, res) => {
  try {
    var data = await home.findOne({ language_id: req.params.id });
    res.status(200).json({
      message: "get Home",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.update_home = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await home.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "title Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
