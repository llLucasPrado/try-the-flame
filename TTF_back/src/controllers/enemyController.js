const Enemy = require("../models/Enemy");

async function createEnemy(req, res) {
  try {
    const { name, title, description, image } = req.body;

    const enemy = await Enemy.create({
      name,
      title,
      description,
      image,
    });

    res.status(201).json(enemy);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar inimigo", error: error.message });
  }
}

async function getAllEnemies(req, res) {
  try {
    const enemies = await Enemy.find().sort({ createdAt: -1 });
    res.json(enemies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar inimigos", error: error.message });
  }
}

async function getEnemyById(req, res) {
  try {
    const enemy = await Enemy.findById(req.params.id);

    if (!enemy) {
      return res.status(404).json({ message: "Inimigo não encontrado" });
    }

    res.json(enemy);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar inimigo", error: error.message });
  }
}

async function updateEnemy(req, res) {
  try {
    const { name, title, description, image } = req.body;

    const enemy = await Enemy.findByIdAndUpdate(
      req.params.id,
      { name, title, description, image },
      { new: true, runValidators: true },
    );

    if (!enemy) {
      return res.status(404).json({ message: "Inimigo não encontrado" });
    }

    res.json(enemy);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar inimigo", error: error.message });
  }
}

async function deleteEnemy(req, res) {
  try {
    const enemy = await Enemy.findByIdAndDelete(req.params.id);

    if (!enemy) {
      return res.status(404).json({ message: "Inimigo não encontrado" });
    }

    res.json({ message: "Inimigo removido com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao remover inimigo", error: error.message });
  }
}

module.exports = {
  createEnemy,
  getAllEnemies,
  getEnemyById,
  updateEnemy,
  deleteEnemy,
};
