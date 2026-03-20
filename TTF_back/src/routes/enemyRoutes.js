const express = require("express");
const router = express.Router();

const {
  createEnemy,
  getAllEnemies,
  getEnemyById,
  updateEnemy,
  deleteEnemy,
} = require("../controllers/enemyController");

router.post("/", createEnemy);
router.get("/", getAllEnemies);
router.get("/:id", getEnemyById);
router.put("/:id", updateEnemy);
router.delete("/:id", deleteEnemy);

module.exports = router;
