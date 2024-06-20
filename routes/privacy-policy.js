var express = require("express");
var router = express.Router();

var privacyPolicy = require("../controller/privacy-policy");

router.post("/add_privacyPolicy", privacyPolicy.add_privacyPolicy);
router.get("/get_privacyPolicy/:id", privacyPolicy.get_privacyPolicy);
router.put("/update_privacyPolicy/:id", privacyPolicy.update_privacyPolicy);

module.exports = router;
