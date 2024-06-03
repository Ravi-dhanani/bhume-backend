var express = require("express");
var router = express.Router();

var privacyPolicy = require("../controller/privacy-policy");
var auth = require("../middleware/auth");

router.post(
  "/add_privacyPolicy",
  auth.check_token,
  privacyPolicy.add_privacyPolicy
);
router.get("/get_privacyPolicy/:id", privacyPolicy.get_privacyPolicy);
router.put(
  "/update_privacyPolicy/:id",
  auth.check_token,
  privacyPolicy.update_privacyPolicy
);

module.exports = router;
