const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/ads", require("./routes/ads"));

// Health check
app.get("/", (req, res) => res.send("Wesh API running ✅"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server on ${process.env.PORT || 5000}`)
    );
  })
  .catch((e) => console.error("❌ Mongo error:", e.message));
