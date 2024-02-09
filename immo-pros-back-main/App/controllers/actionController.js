import dataMapper from "../models/actionDatamapper.js";

const actionController = {
  /**
  * @param {*} req
  * @param {*} res
  * @param {*} next 
  */
  // Méthode pour récupérer toutes les actions via l'id de l'information:
  getAllActionsByInformationId: async (req, res, next) => {
    const informationId = parseInt(req.params.information_id, 10);

    const { error, result }= await dataMapper.getAllActionsByInformationId(informationId);

    if (error) {
        // si j'ai une erreur => next(error)
        next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour récupérer une action par son id 
  getActionById: async (req, res, next) => {
    const actionId = parseInt(req.params.action_id, 10);


    const {error, result} = await dataMapper.getActionById(actionId);
    if (error) {
        // si j'ai une erreur => next(error)
        next(error);
    }
    else {
        // si tout va bien
        res.status(200).json(result);
    }
  },

  // Méthode pour créer une action pour une information via son ID:
  createActionByInformationId: async (req, res, next) => {
    const informationId = parseInt(req.params.information_id, 10);


    const {error, result} = await dataMapper.createActionByInformationId(informationId , req.body);

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
      // si tout va bien
      res.status(201).json({message: 'Action successfully created.', result});
    }

  },

  // Méthode pour mettre à jour une action par son id:
  updateAction: async (req, res, next) => {
    const actionId = parseInt(req.params.action_id, 10);


    const {error, result} = await dataMapper.updateAction(
      actionId,
      req.body
    );

    if (error) {
      // si j'ai une erreur => next(error)
      next(error);
    }
    else {
        // si tout va bien
        res.status(200).json({message: 'Action successfully updated.', result});
    }
  },

  // Méthode pour supprimer une action par son id:
  deleteAction: async (req, res, next) => {
    const actionId = parseInt(req.params.action_id, 10);

    const { error, result } = await dataMapper.deleteAction(actionId);

    if (error) {
        // si j'ai une erreur => next(error)
        next(error);
    }
    else {
        // si tout va bien
        res.status(204).json({ message: 'Action successfully deleted.', result});
    }
  },
};

export default actionController;
