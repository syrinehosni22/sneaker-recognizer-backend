const mongoose = require("mongoose");

const sneakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [String],
    sizes: [
      {
        size: Number,
        stock: Number,
      },
    ],
    description: String,
    isPopular: {
      type: Boolean,
      default: false,
    },
    isSpecialOffer: {
      type: Boolean,
      default: false,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sneaker", sneakerSchema);
