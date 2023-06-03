const express = require("express");
const { login, logout, forgetPassword, resetPassword, signup } = require("../controllers/authUser");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/resetPassword/:id/:token", resetPassword);
router.post("/forgetPassword", forgetPassword); //get email whose password is forgot..

module.exports = router;