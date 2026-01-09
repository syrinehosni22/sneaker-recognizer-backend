const Stripe = require("stripe");
const Order = require("../models/Order");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const { success, error } = require("../utils/response");

// CREATE PAYMENT INTENT
exports.createPaymentIntent = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return error(res, "Order not found", 404);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.total * 100), // Stripe uses cents
      currency: "usd",
      metadata: { orderId: order._id.toString() },
    });

    order.paymentIntentId = paymentIntent.id;
    await order.save();

    success(res, { clientSecret: paymentIntent.client_secret }, "Payment intent created");
  } catch (err) {
    next(err);
  }
};

// CONFIRM PAYMENT (webhook or manual)
exports.confirmPayment = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return error(res, "Order not found", 404);

    order.status = "PAID";
    await order.save();

    success(res, order, "Payment confirmed");
  } catch (err) {
    next(err);
  }
};
