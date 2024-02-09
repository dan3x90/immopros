// messagerieDataMapper.js
import client from "../services/client.js";
import APIError from "../services/APIError.js";
import debug from "debug";

const messagerieDataMapper = {
  // DataMapper pour vérifier si une discussion existe déjà
  async checkDiscussionExists(sender_id, receiver_id) {
    const sqlQuery = `
            SELECT * FROM discussion
            WHERE (collaborator_1 = $1 AND collaborator_2 = $2)
            OR (collaborator_1 = $2 AND collaborator_2 = $1);
        `;
    const values = [sender_id, receiver_id];

    let result;
    let error;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows[0];
    } catch (err) {
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    return { result, error };
  },

  // DataMapper pour créer une discussion
  async createDiscussion(sender_id, receiver_id) {
    const sqlQuery = `
            INSERT INTO discussion (collaborator_1, collaborator_2)
            VALUES ($1, $2)
            RETURNING *;
        `;
    const values = [sender_id, receiver_id];

    let result;
    let error;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows[0];
    } catch (err) {
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    return { result, error };
  },

  // DataMapper pour créer un message
  async createMessage(data) {
    const { content, sender_id, receiver_id, discussion_id } = data;
    const sqlQuery = `
            INSERT INTO message (content, sender_id, receiver_id, discussion_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
    const values = [content, sender_id, receiver_id, discussion_id];

    let result;
    let error;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows[0];
    } catch (err) {
      error = new APIError("Erreur interne au serveur", 500, err);
    }
    return { result, error };
  },

  async getAllMessagesByDiscussionId(discussionId) {
    const sqlQuery = `SELECT * FROM message WHERE discussion_id=$1 ORDER BY sent_date ASC`;
    const values = [discussionId];
    let error;
    let result;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows;
    } catch (err) {
      error = new APIError("Erreur interne au serveur", 500, err);
    }
    return { result, error };
  },

  // DataMapper pour supprimer un message
  async deleteMessage(messageId) {
    const sqlQuery = `DELETE FROM message WHERE id=$1`;
    const values = [messageId];
    let error;
    let result;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows[0];

      if (response.rowCount === 0) {
        error = new APIError("Aucun secteur n'a été supprimé", 404);
      }
    } catch (err) {
      error = new APIError("Erreur interne au serveur", 500, err);
    }
    return { result, error };
  },

};

export default messagerieDataMapper;
