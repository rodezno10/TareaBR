var express = require("express");
var router = express.Router();

// Personas EndPoint
var personasRouter = require("./personas/index");
// var productosRouter = require("./productos/index");
// Registrar es enrutador a una ruta superior

// api/personas/
router.use("/personas", personasRouter);
// router.use("/productos", productosRouter);



module.exports = router;
