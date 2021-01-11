const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/users/sign-in", userController.signin);
router.post("/users/sign-up", userController.signup);

module.exports = router;
