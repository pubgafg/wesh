const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    condition: { type: String, enum: ["new", "used", "almost_new"], default: "used" },
    category: { type: String, default: "general" },
    sold: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
