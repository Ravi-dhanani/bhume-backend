var express = require("express");
var router = express.Router();

var language = require("../controller/language");

router.post("/add_language", language.add_Language);
router.get("/get_language", language.get_Languages);
router.get("/get_language/:id", language.get_Language);
router.put("/update_language/:id", language.update_language);
router.get("/delete_language/:id", language.delete_language);

module.exports = router;
