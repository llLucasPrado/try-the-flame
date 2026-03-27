const express = require("express");
const router = express.Router();

const {
  createMap,
  getAllMaps,
  getMapById,
  updateMap,
  deleteMap,
} = require("../controllers/mapController");

router.post("/", createMap);
router.get("/", getAllMaps);
router.get("/:id", getMapById);
router.put("/:id", updateMap);
router.delete("/:id", deleteMap);

module.exports = router;
