const Sneaker = require("../models/Sneaker");
const { success, error } = require("../utils/response");

// GET ALL SNEAKERS
exports.getAllSneakers = async (req, res, next) => {
  try {
    const sneakers = await Sneaker.find();
    success(res, sneakers, "Sneakers retrieved");
  } catch (err) {
    next(err);
  }
};

// GET POPULAR SNEAKERS
exports.getPopular = async (req, res, next) => {
  try {
    const sneakers = await Sneaker.find({ isPopular: true });
    success(res, sneakers, "Popular sneakers retrieved");
  } catch (err) {
    next(err);
  }
};

// GET SPECIAL OFFERS
exports.getSpecialOffers = async (req, res, next) => {
  try {
    const sneakers = await Sneaker.find({ isSpecialOffer: true });
    success(res, sneakers, "Special offers retrieved");
  } catch (err) {
    next(err);
  }
};

// GET SINGLE SNEAKER
exports.getSneakerById = async (req, res, next) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);
    if (!sneaker) return error(res, "Sneaker not found", 404);

    success(res, sneaker);
  } catch (err) {
    next(err);
  }
};

// CREATE / UPDATE / DELETE (ADMIN)
exports.createSneaker = async (req, res, next) => {
  try {
    const sneaker = await Sneaker.create(req.body);
    success(res, sneaker, "Sneaker created", 201);
  } catch (err) {
    next(err);
  }
};

exports.updateSneaker = async (req, res, next) => {
  try {
    const sneaker = await Sneaker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sneaker) return error(res, "Sneaker not found", 404);
    success(res, sneaker, "Sneaker updated");
  } catch (err) {
    next(err);
  }
};

exports.deleteSneaker = async (req, res, next) => {
  try {
    const sneaker = await Sneaker.findByIdAndDelete(req.params.id);
    if (!sneaker) return error(res, "Sneaker not found", 404);
    success(res, {}, "Sneaker deleted");
  } catch (err) {
    next(err);
  }
};
