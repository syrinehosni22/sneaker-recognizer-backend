const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const productResultController = require("../controllers/productResult.controller");

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Public
router.get("/", productResultController.getProductResults);
router.get("/popular", productController.getPopular);
// router.get("/special-offers", productController.get);
router.get("/:id", productController.getSneakerById);

// Admin
router.post("/", auth, role("ADMIN"), sneakerController.createSneaker);
router.put("/:id", auth, role("ADMIN"), sneakerController.updateSneaker);
router.delete("/:id", auth, role("ADMIN"), sneakerController.deleteSneaker);

module.exports = router;
