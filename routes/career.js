var express = require("express");
var router = express.Router();

var career = require("../controller/carrer");

router.post("/add_career", career.add_career);
router.get("/get_career", career.get_career);
router.get("/delete_career/:id", career.delete_career);
router.put("/update_career/:id", career.update_career);

module.exports = router;
