const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const header = req.header("Authorization");
  if (!header) return res.status(401).json({ error: "No token" });
  const token = header.startsWith("Bearer ") ? header.slice(7) : header;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: ... }
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
