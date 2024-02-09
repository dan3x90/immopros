import client from "../services/client.js";
import APIError from "../services/APIError.js";

// Debug
import debug from 'debug';
const logger = debug('model');


const actionDataMapper = {
  // Méthode pour récupérer toutes les actions d'une information

  async getAllActionsByInformationId(informationId) {
    const sqlQuery = "SELECT * FROM action WHERE information_id = $1";
    const values = [informationId];

    let result;
    let error;

    try {
      const response = await client.query(sqlQuery, values);
      result = response.rows

    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return {
      error,
      result
    };
  },

  // Méthode pour récupérer une action par son id 
  async getActionById(actionId) {
    const sqlQuery = "SELECT * FROM action WHERE id = $1";
    const values = [actionId];

    let result;
    let error;

    try {
      const response = await client.query(sqlQuery, values);

      // je teste pour savoir si au moins une ligne a été retournée
      if (response.rows.length == 0) {
          // aucune action n'a été trouvée
          error = new APIError("Aucune action n'a été trouvée", 404);
      }
      else {
          // je place la réponse dans result
          result = response.rows[0];
      }
      
    } catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour créer une action
  async createActionByInformationId(informationId, data) {
    const sqlQuery = `
                INSERT INTO action (
                    description,
                    date,
                    information_id
                ) 
                VALUES ($1, $2, $3) 
                RETURNING *`;
    const values = [
      data.description,
      data.date,
      informationId
    ];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je place la réponse dans result
        result = response.rows[0];
    }
    catch (err) {
        debug(err);
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500,err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
},

  // Méthode pour mettre à jour une action par son id:
  async updateAction(actionId, data) {
    const sqlQuery = `
                UPDATE action 
                SET description = $1
                WHERE id = $2 
                RETURNING *;`;

    const values = [
      data.description,
      actionId
    ]
    
    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je place la réponse dans result
        result = response.rows[0];
    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour supprimer un utilisateur
  async deleteAction(actionId) {
    const sqlQuery = "DELETE FROM action WHERE id = $1";
    const values = [actionId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je place la réponse dans result
        result = response.rows[0];

        if(response.rowCount === 0){
            error = new APIError("Aucune action n'a été supprimée", 404);
        }
    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500,err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

};

export default actionDataMapper;