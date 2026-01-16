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

    // Can store URL or Base64
    images: {
      type: [String],
      default: [],
    },

    sizes: [
      {
        size: Number,
        stock: Number,
      },
    ],

    description: String,

    shop: String,
    link: String,

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
