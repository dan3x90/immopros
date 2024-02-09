import dataMapper from '../models/sectorDatamapper.js';

const sectorController = {
  // Méthode pour récupérer tous les secteurs:
  getAllSectors: async (_, res, next) => {
    const {error, result} = await dataMapper.getAllSectors();

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour récupérer un secteur par son id:
  getSectorById: async (req, res, next) => {
    const sectorId = parseInt(req.params.id, 10);

    const {error, result} = await dataMapper.getSectorById(sectorId);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour créer un secteur:
  createSector: async (req, res, next) => {
    const {error, result} = await dataMapper.createSector(req.body);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(201).json({ message: "Sector successfully created.", result });
    }
  },

  // Méthode pour mettre à jour un secteur par son id:
  updateSector: async (req, res, next) => {
    const sectorId = parseInt(req.params.id, 10);
    
    const { error, result } = await dataMapper.updateSector(sectorId, req.body);

    if (error) {
        // si j'ai une erreur => next(error)
        next(error);
    }
    else {
        // si tout va bien
        res.status(200).json({ message: "Sector successfully updated.", result });
    }
  },

  // Méthode pour supprimer un secteur par son id:
  deleteSector: async (req, res, next) => {
    const sectorId = parseInt(req.params.id, 10);
    const { error, result } = await dataMapper.deleteSector(sectorId);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(204).json({ message: "Sector successfully deleted.", result });
    }
  },
};

export default sectorController;