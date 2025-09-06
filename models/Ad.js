const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },        // عنوان آگهی
    description: { type: String, required: true },  // توضیحات
    price: { type: Number, required: true },        // قیمت
    city: { type: String, required: true },         // شهر
    category: { type: String, required: true },     // دسته‌بندی
    images: [{ type: String }],                     // لینک عکس‌ها
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // کاربری که آگهی گذاشته
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
