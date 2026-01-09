const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");
const auth = require("../middlewares/auth.middleware");

// Auth required
router.use(auth);

router.post("/create-intent", paymentController.createPaymentIntent);
router.post("/confirm", paymentController.confirmPayment);

module.exports = router;
