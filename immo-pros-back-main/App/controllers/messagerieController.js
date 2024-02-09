import dataMapper from "../models/messagerieDatamapper.js";

const messagerieController = {
  // Controller pour post un message
  async postMessage(req, res, next) {
    // Récupérer les données du body
    const { content, sender_id, receiver_id, discussion_id } = req.body;

    // Vérifier que les données sont présentes
    if (!content || !sender_id || !receiver_id || !discussion_id) {
      res.status(400).json("Tous les champs sont obligatoires.");
    }
    // Créez un nouveau message
    const messageData = { content, sender_id, receiver_id, discussion_id };
    const { result, error } = await dataMapper.createMessage(messageData);
    // Si erreur je next
    if (error) {
      next(error);
    } else {
      // Sinon je renvoie le résultat
      res.status(201).json({
        message: "Information successfully created.",
        result,
      });
    }
  },

  // Controller pour récupérer tous les messages par leur discussion_id
  async getAllMessagesByDiscussionId(req, res, next) {
    // Récupérer l'id de la discussion
    const discussionId = req.params.id;
    // Récupérer les messages ou error
    const { result, error } = await dataMapper.getAllMessagesByDiscussionId(discussionId);
    // Si erreur je next
    if (error) {
      next(error);
    } else {
      // Sinon je renvoie le résultat
      res.status(200).json({ message: "recupération réussite", result });
    }
  },

  // Controller pour delete un message
  async deleteMessage(req, res, next) {
    // Récupérer l'id du message dans les params
    const messageId = req.params.id;
    // Supprimer le message ou error
    const { result, error } = await dataMapper.deleteMessage(messageId);
    if (error) {
      // Si erreur je next
      next(error);
    } else {
      // Sinon je renvoie le résultat
      res.status(200).json({ message: "Message supprimé", result });
    }
  },

  // Controller pour récupérer toutes les discussions d'un user
  async checkDiscussionExistsAndCreate(req, res, next) {
    // Récupérer les données du body
    const { sender_id, receiver_id } = req.body;
    // Vérifier que les données sont présentes
    if (!sender_id || !receiver_id) {
      return res
        .status(400)
        .json("Les champs sender_id et receiver_id sont obligatoires.");
    }
    // Vérifier que la discussion n'existe pas déjà
    const { result, error } = await dataMapper.checkDiscussionExists(
      sender_id,
      receiver_id
    );

    if (error) {
      next(error);
    } else {
      if (!result) {
        // Créer une nouvelle discussion
        const { result, error } = await dataMapper.createDiscussion(
          sender_id,
          receiver_id
        );
        if (error) {
          next(error);
        } else {
          // Si discussion créée
          res.status(201).json({ message: "discussion créée", result });
        }
      } else {
        // Si discussion existante
        res.status(201).json({ message: "discussion existante", result });
      }
    }
  },
};

export default messagerieController;
