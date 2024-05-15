var express = require("express");

var about = require("../model/about");

exports.add_about = async (req, res) => {
  try {
    var data = await about.create(req.body);
    res.status(200).json({
      message: "About section Add Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_about = async (req, res) => {
  try {
    var data = await about.find();
    res.status(200).json({
      message: "About List",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.get_about_data = async (req, res) => {
  try {
    var data = await about.findOne({ language: req.params.id });
    res.status(200).json({
      message: "get About recode",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.update_about = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await about.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "About Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.delete_about = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await about.findByIdAndDelete(id);
    res.status(200).json({
      message: "About Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
