import client from "../services/client.js";
import APIError from "../services/APIError.js";

const informationDataMapper = {
  // ------------------- Information ------------------- //
  // Méthode pour récupérer tous les informations d'un collaborateur
  async getAllInformations(collaboratorId) {
    const sqlQuery = `SELECT * FROM information WHERE collaborator_id = $1;`;
    const values = [collaboratorId];

    let result;
    let error;

    try {
        // j'envoie ma requête à ma BDD
        const response = await client.query(sqlQuery, values);

        // je place la réponse dans result
        result = response.rows;
    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }
    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour récupérer un information par son id
  async getInformationById(informationId) {
    const sqlQuery = "SELECT * FROM information WHERE id = $1";
    const values = [informationId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je teste pour savoir si au moins une ligne a été retournée
        if (response.rows.length == 0) {
            // aucune catégorie n'a été trouvée
            error = new APIError("Aucune information n'a été trouvée", 404);
        }
        else {
            // je place la réponse dans result
            result = response.rows[0];
        }

    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour créer un information
  async createInformation(information, longitude, latitude) {
    const sqlQuery = `
            INSERT INTO information (
                type, 
                owner_name, 
                owner_email, 
                address_number, 
                address_street, 
                code_zip, 
                address_city,
                address_info, 
                source, 
                category, 
                comment, 
                date, 
                collaborator_id, 
                sector_id,
                phone_1,
                phone_2,
                notification_date,
                longitude,
                latitude
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) 
            RETURNING *`;

    const values = [
      information.type,
      information.owner_name,
      information.owner_email,
      information.address_number,
      information.address_street,
      information.code_zip,
      information.address_city,
      information.address_info,
      information.source,
      information.category,
      information.comment,
      information.date,
      information.collaborator_id,
      information.sector_id,
      information.phone_1,
      information.phone_2,
      information.notification_date,
      longitude,
      latitude
    ];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je place la réponse dans result
        result = response.rows[0];
    }
    catch (err) {
        //debug(err);
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };

  },

  // Méthode pour mettre à jour un information
  async updateInformation(informationId, information) {
    const sqlQuery = `
            UPDATE information 
            SET type = $1, owner_name = $2, owner_email = $3, address_number = $4, address_street = $5, code_zip = $6, address_city = $7, address_info = $8, source = $9, category = $10, comment = $11, collaborator_id = $12, sector_id = $13, phone_1 = $14, phone_2 = $15, notification_date = $16
            WHERE id = $17
            RETURNING *;`;

    const values = [
      information.type,
      information.owner_name,
      information.owner_email,
      information.address_number,
      information.address_street,
      information.code_zip,
      information.address_city,
      information.address_info,
      information.source,
      information.category,
      information.comment,
      information.collaborator_id,
      information.sector_id,
      information.phone_1,
      information.phone_2,
      information.notification_date,
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
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500,err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour supprimer un information
  async deleteInformation(informationId) {
    const sqlQuery = "DELETE FROM information WHERE id = $1";
    const values = [informationId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);
        // je place la réponse dans result
        result = response.rows[0];

        if(response.rowCount === 0){
            error = new APIError("Aucune information n'a été supprimée", 404);
        }
    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
};

export default informationDataMapper;
