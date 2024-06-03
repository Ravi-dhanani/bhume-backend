var express = require("express");
var router = express.Router();

var termsCondition = require("../controller/terms-condition");
var auth = require("../middleware/auth");

router.post(
  "/add_termsCondition",
  auth.check_token,
  termsCondition.add_termsCondition
);
router.get("/get_termsCondition/:id", termsCondition.get_termsCondition);
router.put(
  "/update_termsCondition/:id",
  auth.check_token,
  termsCondition.update_termsCondition
);

module.exports = router;
