var express = require("express");
var router = express.Router();

var services = require("../controller/services");

router.post("/add_services", services.add_services);
router.get("/get_services", services.get_services);
router.put("/update_services/:id", services.update_services);
router.get("/delete_services/:id", services.delete_services);
router.get("/get_service/:id", services.get_service);

module.exports = router;
