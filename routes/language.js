var express = require("express");
var router = express.Router();

var language = require("../controller/language");
var auth = require("../middleware/auth");

router.post("/add_language", auth.check_token, language.add_Language);
router.get("/get_language", language.get_Languages);
router.put("/update_language/:id", auth.check_token, language.update_language);
router.get("/delete_language/:id", auth.check_token, language.delete_language);

module.exports = router;
