const express = require("express");
const cors = require("cors");

const enemyRoutes = require("./routes/enemyRoutes");
const mapRoutes = require("./routes/mapRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Try The Flame funcionando 🚀" });
});

app.use("/api/enemies", enemyRoutes);
app.use("/api/maps", mapRoutes);

module.exports = app;
