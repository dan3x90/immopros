import client from "../services/client.js";
import APIError from "../services/APIError.js";

const sectorDataMapper = {
  // Méthode pour récupérer tous les secteurs:
  async getAllSectors() {
    const sqlQuery = `SELECT * FROM sector`;

    let result;
    let error;

    try {
        // j'envoie ma requête à ma BDD
        const response = await client.query(sqlQuery);

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

  // Méthode pour récupérer un secteur par son id:
  async getSectorById(sectorId) {
    const sqlQuery = "SELECT * FROM sector WHERE id = $1";
    const values = [sectorId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je teste pour savoir si au moins une ligne a été retournée
        if (response.rows.length == 0) {
            // aucune catégorie n'a été trouvée
            error = new APIError("Aucun secteur n'a été trouvé", 404);
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

  // Méthode pour créer un secteur:
  async createSector(sector) {
    const sqlQuery = `
            INSERT INTO sector (
                label,
                color_code,
                city,
                code_zip,
                collaborator_id
            ) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING *;`;

    const values = [
        sector.label,
        sector.color_code,
        sector.city,
        sector.code_zip,
        sector.collaborator_id
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
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour mettre à jour un secteur:
  async updateSector(sectorId, data) {
    const sqlQuery = `
            UPDATE sector 
            SET label = $1, color_code = $2, city = $3, code_zip = $4, collaborator_id = $5
            WHERE id = $6
            RETURNING *;`;

    const values = [
        data.label,
        data.color_code,
        data.city,
        data.code_zip,
        data.collaborator_id,
        sectorId
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
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour supprimer un secteur:
  async deleteSector(sectorId) {
    const sqlQuery = "DELETE FROM sector WHERE id = $1";
    const values = [sectorId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);
        // je place la réponse dans result
        result = response.rows[0];

        if(response.rowCount === 0){
            error = new APIError("Aucun secteur n'a été supprimé", 404);
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

export default sectorDataMapper;
