var express = require("express");

var privacyPolicy = require("../model/privacy-policy");

exports.add_privacyPolicy = async (req, res) => {
  try {
    var data = await privacyPolicy.create(req.body);
    res.status(200).json({
      message: " privacyPolicy Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_privacyPolicy = async (req, res) => {
  try {
    var data = await privacyPolicy.findOne({ language: req.params.id });

    res.status(200).json({
      message: "privacyPolicy title",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.update_privacyPolicy = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await privacyPolicy.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "privacyPolicy Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
