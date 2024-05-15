var express = require("express");

var termsCondition = require("../model/terms-condition");

exports.add_termsCondition = async (req, res) => {
  try {
    var data = await termsCondition.create(req.body);
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

exports.get_termsCondition = async (req, res) => {
  try {
    var data = await termsCondition.findOne({ language: req.params.id });

    res.status(200).json({
      message: "terms-condition title",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.update_termsCondition = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await termsCondition.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "terms-Condition Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
