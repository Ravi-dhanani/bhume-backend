var express = require("express");
var router = express.Router();

var home = require("../controller/home");
var auth = require("../middleware/auth");

router.post("/add_title", auth.check_token, home.add_home);
router.get("/get_title", home.get_home);
router.put("/update_title/:id", auth.check_token, home.update_home);

module.exports = router;
