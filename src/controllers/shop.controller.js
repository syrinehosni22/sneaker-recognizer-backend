// ====== PRODUCT OFFER CRUD ======
exports.createOffer = async (req, res) => {
  try {
    const offer = await ProductOffer.create(req.body);
    res.status(201).json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOffers = async (req, res) => {
  try {
    const offers = await ProductOffer.find().populate("productId shopId");
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOfferById = async (req, res) => {
  try {
    const offer = await ProductOffer.findById(req.params.id).populate("productId shopId");
    if (!offer) return res.status(404).json({ error: "Offer not found" });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const offer = await ProductOffer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!offer) return res.status(404).json({ error: "Offer not found" });
    res.json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const offer = await ProductOffer.findByIdAndDelete(req.params.id);
    if (!offer) return res.status(404).json({ error: "Offer not found" });
    res.json({ message: "Offer deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====== SHOP CRUD ======
exports.createShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getShopById = async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ error: "Shop not found" });
    res.json(shop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateShop = async (req, res) => {
  try {
    const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shop) return res.status(404).json({ error: "Shop not found" });
    res.json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteShop = async (req, res) => {
  try {
    const shop = await Shop.findByIdAndDelete(req.params.id);
    if (!shop) return res.status(404).json({ error: "Shop not found" });
    res.json({ message: "Shop deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
