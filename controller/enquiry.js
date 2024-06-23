var express = require("express");

var enquiry = require("../model/enquiry");

exports.add_enquiry = async (req, res) => {
  try {
    req.body.Date = new Date().toISOString().slice(0, 10);
    var data = await enquiry.create(req.body);
    res.status(200).json({
      message: "Enquiry Add Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.get_enquiry = async (req, res) => {
  try {
    // var data = await language.find().populate("cat_id").select("cat_id");
    var data = await enquiry.find();
    res.status(200).json({
      message: "Enquiry List",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.update_enquiry = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await enquiry.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "Enquiry Update SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};

exports.delete_Enquiry = async (req, res) => {
  try {
    const id = req.params.id;
    var data = await enquiry.findByIdAndDelete(id);
    res.status(200).json({
      message: "Enquiry Delete SuccessFully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      status: error,
    });
  }
};
