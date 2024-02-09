import dataMapper from "../models/collaboratorDatamapper.js";
import bcrypt from "bcrypt";

const collaboratorController = {
  // Méthode pour récupérer tous les utilisateurs
  getAllCollaborators: async (_, res, next) => {
    const {error, result} = await dataMapper.getAllCollaborators();

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour récupérer tous les utilisateurs pour la messagerie
  getAllCollaboratorsForMessagerie: async (_, res, next) => {
    const {error, result} = await dataMapper.getAllCollaboratorsForMessagerie();

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour récupérer un utilisateur par son id
  getCollaboratorById: async (req, res, next) => {
    const collaboratorId = parseInt(req.params.id, 10);

    const {error, result} = await dataMapper.getCollaboratorById(collaboratorId);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour créer un utilisateur
  createCollaborator: async (req, res, next) => {
    const saltRounds = 10; 
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const {error, result} = await dataMapper.createCollaborator(req.body, hashedPassword);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(201).json({message: 'Collaborator successfully created.', result});
    }
  },

  // Méthode pour mettre à jour un utilisateur
  updateCollaborator: async (req, res, next) => {
    const collaboratorId = parseInt(req.params.id, 10);

    const {error, result} = await dataMapper.updateCollaborator(collaboratorId, req.body);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json({message: 'Collaborator successfully updated.', result});
    }
  },

  // Méthode pour supprimer un utilisateur
  deleteCollaborator: async (req, res, next) => {
    const collaboratorId = parseInt(req.params.id, 10);

    const { error, result } = await dataMapper.deleteCollaborator(collaboratorId);

    if (error) {
        // si j'ai une erreur => next(error)
        next(error);
    }
    else {
        // si tout va bien
        res.status(204).json({ message: "Collaborator successfully deleted.", result });
    }
  },

};

export default collaboratorController;
