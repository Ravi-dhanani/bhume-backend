var express = require("express");
var router = express.Router();

var inquiry = require("../controller/inquiry");

router.post("/add_inquiry", inquiry.add_inquiry);
router.get("/get_inquiry", inquiry.get_inquiry);
router.put("/update_inquiry/:id", inquiry.update_inquiry);

module.exports = router;
