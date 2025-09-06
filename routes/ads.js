const express = require("express");
const router = express.Router();
const Ad = require("../models/Ad");

// ➡️ ساخت آگهی جدید
router.post("/", async (req, res) => {
  try {
    const ad = new Ad(req.body);
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➡️ گرفتن همه‌ی آگهی‌ها
router.get("/", async (req, res) => {
  try {
    const ads = await Ad.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➡️ گرفتن آگهی بر اساس دسته‌بندی یا شهر (جستجو ساده)
router.get("/search", async (req, res) => {
  try {
    const { city, category } = req.query;
    const filter = {};
    if (city) filter.city = city;
    if (category) filter.category = category;

    const ads = await Ad.find(filter).sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
