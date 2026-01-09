const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/reset-password", authController.resetPassword);
router.post("/send-code", authController.sendCode);

// Private route
router.get("/me", auth, authController.me);

module.exports = router;
