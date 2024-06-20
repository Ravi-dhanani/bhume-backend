var express = require("express");
var router = express.Router();

var admin = require("../controller/admin");

router.post("/add_admin", admin.add_admin);
router.post("/login_admin", admin.admin_login);
// router.put("/update_title/:id", home.update_home);

module.exports = router;
