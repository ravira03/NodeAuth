const express = require("express");
const router = express.Router();

const { register, login, forgotpasswd, restpasswd } = require("../controllers/auth");


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpasswd);

router.route("/restpassword/:restToken").put(restpasswd);

module.exports = router;