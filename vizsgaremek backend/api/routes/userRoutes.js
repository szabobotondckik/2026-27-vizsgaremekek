const express = require("express");

const router = express.Router();

const { getUser, getUsers, createUser, updateUser, deleteUser } = require("../controllers/userController");

const { isUserLoggedIn, isUserAdmin } = require("../middlewares/authHandler");

router.get("/:username",getUser);

router.get("/",  getUsers);

router.post("/", createUser);

router.patch("/:username",  updateUser);

router.delete("/:username",  deleteUser);

module.exports = router;