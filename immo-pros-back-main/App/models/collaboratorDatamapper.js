import client from "../services/client.js";
import APIError from "../services/APIError.js";

const collaboratorDataMapper = {
  // Méthode pour récupérer tous les utilisateurs
  async getAllCollaborators() {
    const sqlQuery = `
    SELECT avatar.url, collaborator.* 
    FROM collaborator
    JOIN avatar ON collaborator.avatar_id = avatar.id
    WHERE role_id = 2;
    `;

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

    // Méthode pour récupérer tous les utilisateurs pour la messagerie
    async getAllCollaboratorsForMessagerie() {
      const sqlQuery = `
      SELECT avatar.url,collaborator.id, collaborator.firstname, collaborator.lastname
      FROM collaborator
      JOIN avatar ON collaborator.avatar_id = avatar.id
      WHERE role_id = 2;
      `;
  
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

  // Méthode pour récupérer un utilisateur par son id
  async getCollaboratorById(collaboratorId) {
    const sqlQuery = "SELECT * FROM collaborator WHERE id = $1";
    const values = [collaboratorId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je teste pour savoir si au moins une ligne a été retournée
        if (response.rows.length == 0) {
            // aucune catégorie n'a été trouvée
            error = new APIError("Aucun collaborateur n'a été trouvé", 404);
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

  // Méthode pour créer un utilisateur
  async createCollaborator(collaborator, hashedPassword) {
    const sqlQuery = `
            INSERT INTO collaborator (
                firstname, 
                lastname, 
                email, 
                password, 
                phone, 
                acces, 
                secret_key, 
                avatar_id
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
            RETURNING *`;

    const values = [
      collaborator.firstname,
      collaborator.lastname,
      collaborator.email,
      hashedPassword,
      collaborator.phone,
      collaborator.acces,
      collaborator.secret_key,
      collaborator.avatar_id
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

  // Méthode pour mettre à jour un utilisateur
  async updateCollaborator(collaboratorId, collaborator) {
    const sqlQuery = `
            UPDATE collaborator 
            SET firstname = $1, lastname = $2, email = $3, phone = $4, acces = $5, secret_key = $6,  avatar_id = $7 
            WHERE id = $8 
            RETURNING *;`;

    const values = [
      collaborator.firstname,
      collaborator.lastname,
      collaborator.email,
      collaborator.phone,
      collaborator.acces,
      collaborator.secret_key,
      collaborator.avatar_id,
      collaboratorId
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

  // Méthode pour supprimer un utilisateur
  async deleteCollaborator(collaboratorId) {
    const sqlQuery = "DELETE FROM collaborator WHERE id = $1";
    const values = [collaboratorId];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);
        // je place la réponse dans result
        result = response.rows[0];

        if(response.rowCount === 0){
            error = new APIError("Aucun collaborateur n'a été supprimé", 404);
        }
    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  // Méthode pour récupérer un utilisateur par son email
  async getCollaboratorByEmail(email) {
    const sqlQuery = "SELECT * FROM collaborator WHERE email = $1";
    const values = [email];

    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);

        // je teste pour savoir si au moins une ligne a été retournée
        if (response.rows.length == 0) {
            // aucune catégorie n'a été trouvée
            error = new APIError("Aucun collaborateur n'a été trouvé", 404);
        }
        else {
            // je place la réponse dans result
            result = response.rows[0];
        }

    }
    catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500,err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async updatePassword (email, hash) {
    const sqlQuery = `
            UPDATE collaborator 
            SET password = $1
            WHERE email = $2 
            RETURNING *;`;

    const values = [
      hash,
      email
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

  }
};

export default collaboratorDataMapper;
