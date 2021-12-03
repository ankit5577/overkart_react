const router = require("express").Router();
const { login, signup } = require("./_user/_functions");

// login
router.post("/login", login);

// Signup
router.post("/signup", signup);

module.exports = router;
