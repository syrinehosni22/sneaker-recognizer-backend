const express = require("express");
const router = express.Router();
const sneakerController = require("../controllers/sneaker.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Public
router.get("/", sneakerController.getAllSneakers);
router.get("/popular", sneakerController.getPopular);
router.get("/special-offers", sneakerController.getSpecialOffers);
router.get("/:id", sneakerController.getSneakerById);

// Admin
router.post("/", auth, role("ADMIN"), sneakerController.createSneaker);
router.put("/:id", auth, role("ADMIN"), sneakerController.updateSneaker);
router.delete("/:id", auth, role("ADMIN"), sneakerController.deleteSneaker);

module.exports = router;
