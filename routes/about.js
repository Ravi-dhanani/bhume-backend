var express = require("express");
var router = express.Router();

var about = require("../controller/about");

router.post("/add_about", about.add_about);
router.get("/get_about", about.get_about);
router.get("/delete_about/:id", about.delete_about);
router.get("/get_about_data/:id", about.get_about_data);
router.put("/update_about/:id", about.update_about);

module.exports = router;
