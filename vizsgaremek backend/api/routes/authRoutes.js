const express = require("express");

const router = express.Router();

const { getAuthStatus, login, logout } = require("../controllers/authController");

router.get(["/", "/status"], getAuthStatus);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;