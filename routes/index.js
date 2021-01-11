const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");
const saldo = require("./saldo");

router.use(user);
router.use(product);
router.use(saldo);

module.exports = router;
