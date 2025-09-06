const express = require("express");
const Ad = require("../models/Ad");
const auth = require("../middleware/auth");
const router = express.Router();

// Create ad (auth)
router.post("/", auth, async (req, res) => {
  try {
    const { title, desc, price, city, condition, category } = req.body;
    const ad = await Ad.create({ title, desc, price, city, condition, category, owner: req.user.id });
    res.json({ message: "created", ad });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// List ads + filters (?city=...&condition=...&q=...)
router.get("/", async (req, res) => {
  try {
    const { city, condition, q } = req.query;
    const where = {};
    if (city && city !== "all") where.city = city;
    if (condition) where.condition = condition;
    if (q) where.title = { $regex: q, $options: "i" };
    const ads = await Ad.find(where).sort({ createdAt: -1 }).limit(200);
    res.json(ads);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// My ads (auth)
router.get("/mine", auth, async (req, res) => {
  const ads = await Ad.find({ owner: req.user.id }).sort({ createdAt: -1 });
  res.json(ads);
});

// Toggle sold (auth, owner only)
router.patch("/:id/sold", auth, async (req, res) => {
  const ad = await Ad.findOne({ _id: req.params.id, owner: req.user.id });
  if (!ad) return res.status(404).json({ error: "Not found" });
  ad.sold = !ad.sold;
  await ad.save();
  res.json({ message: "updated", ad });
});

// Delete (auth, owner only)
router.delete("/:id", auth, async (req, res) => {
  const ad = await Ad.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
  if (!ad) return res.status(404).json({ error: "Not found" });
  res.json({ message: "deleted" });
});

module.exports = router;
