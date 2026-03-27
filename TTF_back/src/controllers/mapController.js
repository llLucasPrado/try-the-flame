const Map = require("../models/Map");

async function createMap(req, res) {
  try {
    const { name, title, description, image } = req.body;

    const map = await Map.create({
      name,
      title,
      description,
      image,
    });

    res.status(201).json(map);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar mapa",
      error: error.message,
    });
  }
}

async function getAllMaps(req, res) {
  try {
    const maps = await Map.find().sort({ createdAt: -1 });
    res.json(maps);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar mapas",
      error: error.message,
    });
  }
}

async function getMapById(req, res) {
  try {
    const map = await Map.findById(req.params.id);

    if (!map) {
      return res.status(404).json({ message: "Mapa não encontrado" });
    }

    res.json(map);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar mapa",
      error: error.message,
    });
  }
}

async function updateMap(req, res) {
  try {
    const { name, title, description, image } = req.body;

    const map = await Map.findByIdAndUpdate(
      req.params.id,
      { name, title, description, image },
      { new: true, runValidators: true }
    );

    if (!map) {
      return res.status(404).json({ message: "Mapa não encontrado" });
    }

    res.json(map);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar mapa",
      error: error.message,
    });
  }
}

async function deleteMap(req, res) {
  try {
    const map = await Map.findByIdAndDelete(req.params.id);

    if (!map) {
      return res.status(404).json({ message: "Mapa não encontrado" });
    }

    res.json({ message: "Mapa removido com sucesso" });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao remover mapa",
      error: error.message,
    });
  }
}

module.exports = {
  createMap,
  getAllMaps,
  getMapById,
  updateMap,
  deleteMap,
};
