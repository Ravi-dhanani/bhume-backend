var express = require("express");
var router = express.Router();

var home = require("../controller/home");

router.post("/add_title", home.add_home);
router.get("/get_title/:id", home.get_home);
router.put("/update_title/:id", home.update_home);

module.exports = router;
