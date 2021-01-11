const express = require("express");
const router = express.Router();
const saldoController = require("../controller/saldo");
const middleware = require("./../middleware");

router.put("/saldo/:id", middleware.admin, saldoController.updateSaldo);

module.exports = router;
