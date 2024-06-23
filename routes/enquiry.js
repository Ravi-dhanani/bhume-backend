var express = require("express");
var router = express.Router();

var enquiry = require("../controller/enquiry");

router.post("/add_enquiry", enquiry.add_enquiry);
router.get("/get_enquiry", enquiry.get_enquiry);
router.put("/update_enquiry/:id", enquiry.update_enquiry);
router.get("/delete_enquiry/:id", enquiry.delete_Enquiry);

module.exports = router;
