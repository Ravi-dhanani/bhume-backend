var express = require("express");
var router = express.Router();

var termsCondition = require("../controller/terms-condition");

router.post("/add_termsCondition", termsCondition.add_termsCondition);
router.get("/get_termsCondition/:id", termsCondition.get_termsCondition);
router.put("/update_termsCondition/:id", termsCondition.update_termsCondition);

module.exports = router;
