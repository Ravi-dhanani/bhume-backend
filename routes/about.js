var express = require("express");
var router = express.Router();

var about = require("../controller/about");
var auth = require("../middleware/auth");

router.post("/add_about", auth.check_token, about.add_about);
router.get("/get_about", about.get_about);
router.get("/delete_about/:id", auth.check_token, about.delete_about);
router.get("/get_about_data/:id", about.get_about_data);
router.put("/update_about/:id", auth.check_token, about.update_about);

module.exports = router;
