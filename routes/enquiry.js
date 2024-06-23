var express = require("express");
var router = express.Router();

var enquiry = require("../controller/enquiry");

router.post("/add_Enquiry", enquiry.add_enquiry);
router.get("/get_Enquiry", enquiry.get_enquiry);
router.put("/update_Enquiry/:id", enquiry.update_enquiry);
router.get("/delete_Enquiry/:id", enquiry.update_enquiry);

module.exports = router;
