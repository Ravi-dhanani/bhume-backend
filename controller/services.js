var express = require("express");

const services = require("../model/services");

exports.add_services = async (req, res) => {
  try {
    var data = await services.create(req.body);
    res.status(200).json({
      message: " services Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_services = async (req, res) => {
  try {
    var data = await services.find();

    res.status(200).json({
      message: "services list",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.get_service = async (req, res) => {
  try {
    var data = await services.findOne({ language: req.params.id });

    res.status(200).json({
      message: "get services ",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.update_services = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await services.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "services Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
exports.delete_services = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await services.findByIdAndDelete(id);
    res.status(200).json({
      message: "services Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
