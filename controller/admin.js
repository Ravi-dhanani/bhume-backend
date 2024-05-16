var express = require("express");
var bcrypt = require("bcryptjs");
var admin = require("../model/admin");
var jwt = require("jsonwebtoken");

exports.add_admin = async (req, res) => {
  try {
    if (!req.body.password) {
      res.status(200).json({
        message: "Password is required",
      });
    }
    password = await bcrypt.hash(req.body.password, 12);
    const adminData = {
      name: req.body.name,
      email: req.body.email,
      password: password,
    };
    var data = await admin.create(adminData);

    res.status(200).json({
      message: "Admin Successfully",
      data,
      status: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};

exports.admin_login = async (req, res) => {
  try {
    if (!req.body.password || !req.body.email) {
      res.status(200).json({
        message: "invalid  Data",
      });
    }
    const adminLogin = await admin.findOne({ email: req.body.email });
    if (adminLogin) {
      const isMatch = await bcrypt.compare(
        req.body.password,
        adminLogin.password
      );

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credientials" });
      }
      if (adminLogin) {
        var token = jwt.sign({ id: adminLogin._id }, "Bhume");
        console.log(token);
        res.status(200).json({
          message: "Admin Successfully",
          data: adminLogin,
          token,
          status: true,
        });
      }
    }
  } catch (error) {
    res.status(200).json({
      message: error,
    });
  }
};
