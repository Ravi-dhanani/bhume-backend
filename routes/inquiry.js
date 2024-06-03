var express = require("express");
var router = express.Router();

var inquiry = require("../controller/inquiry");
var auth = require("../middleware/auth");

router.post("/add_inquiry", inquiry.add_inquiry);
router.get("/get_inquiry", auth.check_token, inquiry.get_inquiry);
router.put("/update_inquiry/:id", auth.check_token, inquiry.update_inquiry);
router.put("/delete_inquiry/:id", auth.check_token, inquiry.delete_inquiry);

module.exports = router;
